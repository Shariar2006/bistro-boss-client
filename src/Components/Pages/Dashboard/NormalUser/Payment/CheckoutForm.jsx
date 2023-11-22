import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useCart from '../../../../Hooks/useCart';
import { AuthContext } from '../../../../../AuthProvider';


const CheckoutForm = () => {
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosSource = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const [cart] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        axiosSource.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosSource, totalPrice])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error)
            setError(error.message)
        } else {
            console.log('payment success', paymentMethod)
            setError('')
        }

        //payment confirm
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'abcxyz',
                    name: user?.displayName || 'abcxyz'
                }

            }
        })
        if (confirmError) {
            console.log('confirm error', confirmError)
        } else {
            console.log('success', paymentIntent)
            if (paymentIntent.status === "succeeded") {
                setTransactionId(paymentIntent.id)

                //now save the payment in the database

                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: cart?.map(item=> item._id),
                    menuItemIds: cart?.map(item=> item.menuId),
                    status: 'pending'
                }

                const res = await axiosSource.post('/payments', payment)
                console.log('save payment', res.data)
            }
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-primary my-5' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className='text-red-500'>{error}</p>
            {
                transactionId ? <p className='text-green-600'>Your Transaction Id: ( {transactionId} )</p> : ''
            }
        </form>
    );
};

export default CheckoutForm;