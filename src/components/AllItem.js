import axios from "axios";
import base_url from "../api/bootapi";
import React, {useEffect,useState} from "react";
import Item from "./Item";
import {toast} from "react-toastify";



const AllItem = () => {
    useEffect(
        () => {
            document.title = "All Item"
        },
        []
    );
    const getAllItemFromServer = () => {
        axios.get(`${base_url}/items `).then(
            (response) => {
                console.log(response.data)
                toast.success("Data Loaded");
                setCourse(response.data);

            },
            (error) => {
                console.log(error);
                toast.error("something went wrong");
            }
        );
    };
    useEffect( () => {
        getAllItemFromServer();

    },
    []
    );

    const [items, setCourse ] = useState([]);
    return(
        <div>
            <h1> All Item </h1>
            {
                items.length > 0 ?
                items.map((item) => <Item item={item} />)
                : "no item here "
            }
        </div>
    )

}
export default AllItem;