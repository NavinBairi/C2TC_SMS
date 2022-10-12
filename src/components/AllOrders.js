import axios from "axios";
import base_url from "../api/bootapi";
import React, { useEffect, useState } from "react";
import Order from "./Order";
import { toast } from "react-toastify";

const AllOrders = () => {
  useEffect(
        () => {
           document.title="All Orders"
        },
        []
    );

    const getAllOrdersFromServer = () => {
        axios.get(`${base_url}/orders`).then(

            (response) => {
                console.log(response.data);
                toast.success("Data Loaded");
                setCourse(response.data);


            },
            (error) => {
                console.log(error);
                toast.error("Something went wrong");

            }
        );
    };
    useEffect(   () => {
            getAllOrdersFromServer();
        },
        []
    );

    const [orders, setCourse] = useState([ ]);
    return (
        <div>
            <h1>All Orders</h1>
            {
                orders.length > 0 ?
                    orders.map((item) => <Order order={item} />)
                    : "No orders"
            }

        </div>
    )
}
export default AllOrders;