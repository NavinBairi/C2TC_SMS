import axios from "axios";
import base_url from "../api/bootapi";
import React, { useEffect, useState } from "react";
import Mall from "./Mall";
import { toast } from "react-toastify";

const AllMall = () => {
  useEffect(
        () => {
           document.title="All Malls"
        },
        []
    );

    const getAllMallFromServer = () => {
        axios.get(`${base_url}/mall`).then(

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
            getAllMallFromServer();
        },
        []
    );

    const [mall, setCourse] = useState([ ]);
    return (
        <div>
            <h1>All MallS</h1>
            {
                mall.length > 0 ?
                    mall.map((item) => <Mall mall={item} />)
                    : "No Mall"
            }

        </div>
    )
}
export default AllMall;