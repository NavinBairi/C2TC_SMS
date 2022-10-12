import axios from "axios";
import { Fragment, useEffect, useState } from "react"
import { Container, FormGroup, Form, Input, Button } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddOrders = () => {
    useEffect(
        () => {
           document.title="Add Orders"
        },
        []
    );
    const [orders, setOrder] = useState({});

    //form handler
    const handleForm = (e) => {
        console.log(orders);
        postDataToServer(orders)

        e.preventDefault();

    };

    //For saving data in Server
    const postDataToServer=(data)=>
    {
        axios.post(`${base_url}/orders`,data).then(
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
            <h1 className="text-center my 3">Enter Order Details</h1>

           <Form onSubmit={handleForm}> 
                <FormGroup>
                    <label for="id">Order id</label>
                    <Input type="text"
                        placeholder="Order id here"
                        name="id"
                        id="id"
                        onChange={(e) => {
                            setOrder({ ...orders, id: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="name">Name</label>
                    <Input type="text"
                        placeholder="Order name here"
                        name="name"
                        id="name"
                        onChange={(e) => {
                            setOrder({ ...orders, name: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="dateOfPurchase">Order dateOfPurchase</label>
                    <Input type="text"
                        placeholder="Order date here"
                        name="dateOfPurchase"
                        id="dateOfPurchase"
                        onChange={(e) => {
                            setOrder({ ...orders, dateOfPurchase: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="paymentMode">Order paymentMode</label>
                    <Input type="text"
                        placeholder="Order paymentMode here"
                        name="paymentMode"
                        id="paymentMode"
                        onChange={(e) => {
                            setOrder({ ...orders, paymentMode: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="price">Order price</label>
                    <Input type="text"
                        placeholder="Order price here"
                        name="price"
                        id="price"
                        onChange={(e) => {
                            setOrder({ ...orders, price: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="total">Order total</label>
                    <Input type="text"
                        placeholder="Order total here"
                        name="total"
                        id="total"
                        onChange={(e) => {
                            setOrder({ ...orders, total: e.target.value });
                        }}
                    />
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">
                        Add Order
                    </Button>

                    <Button type="reset"
                        color="warning m1-2" onClick={(e) => {
                            setOrder({});
                        }}>Clear</Button>

                </Container>
            </Form>

        </Fragment >



    )
}
export default AddOrders;