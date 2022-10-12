import axios from "axios";
import base_url from "../api/bootapi";
import React, { useEffect, useState } from "react";
import Customer from "./Customer";
import { toast } from "react-toastify";

const AllCustomers = () => {
  useEffect(
        () => {
           document.title="All Customers"
        },
        []
    );

    const getAllCustomersFromServer = () => {
        axios.get(`${base_url}/customers`).then(

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
            getAllCustomersFromServer();
        },
        []
    );

    const [customers, setCourse] = useState([ ]);
    return (
        <div>
            <h1>All Customers</h1>
            {
                customers.length > 0 ?
                    customers.map((item) => <Customer customer={item} />)
                    : "No customers"
            }

        </div>
    )
}
export default AllCustomers