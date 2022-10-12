import axios from "axios";
import base_url from "../api/bootapi";
import React, { useEffect, useState } from "react";
import Shop from "./Shop";
import { toast } from "react-toastify";

const AllShop = () => {
  //hook for setting title on components loading
   
  useEffect(
        () => {
           document.title="All shops"
        },
        []
    );

    const getAllShopFromServer = () => {
        axios.get(`${base_url}/shops`).then(
            //axios.get(${localhost:8008}/shops).then(

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


    //hook
    useEffect(   () => {
            getAllShopFromServer();
        },
        []
    );

    const [shops, setCourse] = useState([ ]);
    return (
        <div>
            <h1>All Shops</h1>
            {
                shops.length > 0 ?
                    shops.map((item) => <Shop shop={item} />)
                    : "No shops here"
            }

        </div>
    )

}

export default AllShop;