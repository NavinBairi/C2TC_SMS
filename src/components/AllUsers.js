import axios from "axios";
import base_url from "../api/bootapi";
import React, { useEffect, useState } from "react";
import User from './User';
import { toast } from "react-toastify";

const AllUsers = () => {
  //hook for setting title on components loading
   
  useEffect(
        () => {
           document.title="All users"
        },
        []
    );

    const getAllUsersFromServer = () => {
        axios.get(`${base_url}/users`).then(
           

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
            getAllUsersFromServer();
        },
        []
    );

    const [users, setCourse] = useState([ ]);
    return (
        <div>
            <h1>All Users</h1>
            {
                users.length > 0 ?
                    users.map((item) => <User user={item} />)
                    : "No users here"
            }

        </div>
    )

}

export default AllUsers;