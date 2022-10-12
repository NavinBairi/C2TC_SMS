import axios from "axios";
import base_url from "../api/bootapi";
import React, { useEffect, useState } from "react";
import MallAdmin from "./MallAdmin";
import { toast } from "react-toastify";

const AllMallAdmin = () => {
  useEffect(
        () => {
           document.title="All Malladmin"
        },
        []
    );

    const getAllMallAdminFromServer  = () => {
        axios.get(`${base_url}/malladmin`).then(

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
            getAllMallAdminFromServer();
        },
        []
    );

    const [malladmin, setCourse] = useState([ ]);
    return (
        <div>
            <h1>All Malladmins</h1>
            {
                malladmin.length > 0 ?
                    malladmin.map((item) => <MallAdmin  malladmin={item} />)
                    : "No Malladmin"
            }

        </div>
    )
}
export default AllMallAdmin ;