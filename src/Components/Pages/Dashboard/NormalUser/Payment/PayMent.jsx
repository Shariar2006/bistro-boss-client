import SectionTitle from '../../../../SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_TOKEN)
const PayMent = () => {
    return (
        <div>
            <div className='my-5'>
                <SectionTitle subtitle='Payment' headerTitle='Pay to eat'></SectionTitle>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default PayMent;