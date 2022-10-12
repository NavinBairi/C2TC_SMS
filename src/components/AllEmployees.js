import axios from "axios";
import base_url from "../api/bootapi";
import React, { useEffect, useState } from "react";
import Employee from './Employee';
import { toast } from "react-toastify";

const AllEmployees = () => {
  //hook for setting title on components loading
   
  useEffect(
        () => {
           document.title="All employees"
        },
        []
    );

    const getAllEmployeesFromServer = () => {
        axios.get(`${base_url}/employees`).then(
           

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
            getAllEmployeesFromServer();
        },
        []
    );

    const [employees, setCourse] = useState([ ]);
    return (
        <div>
            <h1>All Employees</h1>
            {
                employees.length > 0 ?
                    employees.map((item) => <Employee employee={item} />)
                    : "No employees here"
            }

        </div>
    )

}

export default AllEmployees;