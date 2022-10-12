import axios from "axios";
import { Fragment, useEffect, useState } from "react"
import { Container, FormGroup, Form, Input, Button } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddEmployees = () => {
    useEffect(
        () => {
           document.title="Add Employees"
        },
        []
    );


    const [employee, setEmployee] = useState({});

    //form handler
    const handleForm = (e) => {
        console.log(employee);
        postDataToServer(employee)

        e.preventDefault();

    };

    //For saving data in Server
    const postDataToServer=(data)=>
    {
        axios.post(`${base_url}/employees`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Data Loaded");
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong");
            })
    };

    return (

        <Fragment>
            <h1 className="text-center my 3">Enter Employee Details</h1>

           <Form onSubmit={handleForm}> 
                <FormGroup>
                    <label for="id">Employee id</label>
                    <Input type="text"
                        placeholder="Employee id here"
                        name="id"
                        id="id"
                        onChange={(e) => {
                            setEmployee ({ ...employee, id: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="name">Employee Name</label>
                    <Input type="text"
                        placeholder="Employee Name here"
                        name="name"
                        id="name"
                        onChange={(e) => {
                            setEmployee({ ...employee, name: e.target.value });
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="dob">Employee Date Of Birth</label>
                    <Input type="text"
                        placeholder="Employee date of birth here"
                        name="dob"
                        id="dob"
                        onChange={(e) => {
                            setEmployee({ ...employee, dob: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="salary">Employee Salary</label>
                    <Input type="text"
                        placeholder="Employee Salary here"
                        name="salary"
                        id="salary"
                        onChange={(e) => {
                            setEmployee({ ...employee, salary: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="address">Employee Address</label>
                    <Input type="text"
                        placeholder="Employee Address here"
                        name="address"
                        id="address"
                        onChange={(e) => {
                            setEmployee({ ...employee, address: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="designation">Employee Designation</label>
                    <Input type="text"
                        placeholder="Employee Designation here"
                        name="designation"
                        id="designation"
                        onChange={(e) => {
                            setEmployee({ ...employee, designation: e.target.value });
                        }}
                    />
                </FormGroup>

                
                <Container className="text-center">
                    <Button type="submit" color="success">
                        Add Employee
                    </Button>

                    <Button type="reset"
                        color="warning m1-2" onClick={(e) => {
                            setEmployee({});
                        }}>Clear</Button>
                </Container>
            </Form>

        </Fragment >
    )
}
export default AddEmployees;