import axios from "axios";
import { Fragment, useEffect, useState } from "react"
import { Container, FormGroup, Form, Input, Button } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const UpdateCustomers = () => {
    useEffect(
        () => {
           document.title="Update Customers"
        },
        []
    );
    const [customer, setCustomer] = useState({});

    //form handler
    const handleForm = (e) => {
        console.log(customer);
        putDataToServer(customer)

        e.preventDefault();

    };

    //For saving data in Server
    const putDataToServer=(data)=>
    {
        axios.post(`${base_url}/customers`,data).then(
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
            <h1 className="text-center my 3">Enter Customer Details</h1>

           <Form onSubmit={handleForm}> 
                <FormGroup>
                    <label for="customerId">Customer id</label>
                    <Input type="text"
                        placeholder="Customer id here"
                        name="customerId"
                        id="customerId"
                        onChange={(e) => {
                            setCustomer({ ...customer, customerId: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="customerName">Custmer Name</label>
                    <Input type="text"
                        placeholder="Customer name here"
                        name="customerName"
                        id="customerName"
                        onChange={(e) => {
                            setCustomer({ ...customer, customerName: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="orderId">Order Id</label>
                    <Input type="text"
                        placeholder="Order Id here"
                        name="orderId"
                        id="orderId"
                        onChange={(e) => {
                            setCustomer({ ...customer,orderId: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="customerPhone">Customer Phone</label>
                    <Input type="text"
                        placeholder="customer phone here"
                        name="customerPhone"
                        id="customerPhone"
                        onChange={(e) => {
                            setCustomer({ ...customer, customerPhone: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="customerEmail">Custmer Email</label>
                    <Input type="text"
                        placeholder="Customer Email here"
                        name="customerEmail"
                        id="customerEmail"
                        onChange={(e) => {
                            setCustomer({ ...customer, customerEmail: e.target.value });
                        }}
                    />
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">
                        Update Customer
                    </Button>

                    <Button type="reset"
                        color="warning m1-2" onClick={(e) => {
                            setCustomer({});
                        }}>Clear</Button>

                </Container>
            </Form>

        </Fragment >
    )
}
export default UpdateCustomers;