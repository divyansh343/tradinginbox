
import React, { useEffect, useState } from 'react'
import axios from "axios";


const Orders = () => {

    const [orders, setOrders] = useState([])

    const getAllOrders = async () => {

        let headersList = {
            "Accept": "*/*",
        }

        let reqOptions = {
            url: "https://assessment.api.vweb.app/orders",
            method: "GET",
            headers: headersList,
        }


        try {
            const response = await axios.request(reqOptions)
            setOrders(response.data)
        } catch (error) {
        }
    }

    useEffect(() => {
        getAllOrders()
    }, [])

    return (
        <>
            <section className="container mx-auto pt-20 p-6 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th className=" font-thin text-sm px-7 py-3">All Orders</th>
                                    <th className=" font-thin text-sm px-7 py-3">total orders {orders.length}</th>
                                    
                                </tr>
                            </thead>
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th className="px-4 py-3">order Id</th>
                                    <th className="px-4 py-3">product Id</th>
                                    <th className="px-4 py-3">Quantity</th>
                                    <th className="px-4 py-3">user_id</th>
                                    <th className="px-4 py-3">Budget</th>
                                    <th className="px-4 py-3">order Date</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {orders.map((b) => (
                                    <>
                                        <tr className="text-gray-700">
                                            <td className="px-4 py-3 border">
                                                <div className="flex items-center text-sm">
                                                    <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                                                        <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                    </div>
                                                    <div>
                                                        <p className=" font-semibold text-black">{b.order_id}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-sm  border">{b.product_id}</td>
                                            <td className="px-4 py-3 text-xs border">
                                                <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> {b.quantity} </span>
                                            </td>
                                            <td className="px-4 py-3 text-sm border">{b.user_id}</td>
                                            <td className="px-4 py-3 text-sm border">{b.budget}</td>
                                            <td className="px-4 py-3 text-sm border">{b.order_date}</td>
                                        </tr>
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Orders