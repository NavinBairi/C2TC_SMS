import axios from "axios";
import base_url from "../api/bootapi";
import React, { useEffect, useState } from "react";
import ShopOwner from "./ShopOwner";
import { toast } from "react-toastify";

const AllShopOwner = () => {
  useEffect(
        () => {
           document.title="All ShopOwners"
        },
        []
    );

    const getAllShopOwnerFromServer = () => {
        axios.get(`${base_url}/ShopOwner`).then(

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
            getAllShopOwnerFromServer();
        },
        []
    );

    const [shopOwners, setCourse] = useState([ ]);
    return (
        <div>
            <h1>All ShopOwner</h1>
            {
                shopOwners.length > 0 ?
                    shopOwners.map((item) => <ShopOwner shopowner={item} />)
                    : "No ShopOwner"
            }

        </div>
    )
}
export default AllShopOwner;

