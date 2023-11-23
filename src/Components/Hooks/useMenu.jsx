import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"
// import { useEffect, useState } from "react"



const useMenu = () => {
    const axiosSource = useAxiosPublic()
    // const [menu, setMenu] = useState([])
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     fetch('https://bistro-boss-server-beige-six.vercel.app/foodMenu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data)
    //             setLoading(false)
    //         })
    // }, [])

    const { data: menu = [], isPending: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async()=>{
            const res = await axiosSource.get('/foodMenu');
            return res.data
        }
    })


    return [menu, loading, refetch]
}

export default useMenu