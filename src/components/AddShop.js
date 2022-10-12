import axios from "axios";
import { Fragment, useEffect, useState } from "react"
import { Container, FormGroup, Form, Input, Button } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddShop = () => {
    useEffect(
        () => {
           document.title="Add Shops"
        },
        []
    );


    const [shop, setShop] = useState({});

    //form handler
    const handleForm = (e) => {
        console.log(shop);
        postDataToServer(shop)

        e.preventDefault();

    };

    //For saving data in Server
    const postDataToServer=(data)=>
    {
        axios.post(`${base_url}/shops`,data).then(
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
            <h1 className="text-center my 3">Enter Shop Details</h1>

           <Form onSubmit={handleForm} > 
                <FormGroup>
                    <label for="id">Shop id</label>
                    <Input type="text"
                        placeholder="Shop id here"
                        name="id"
                        id="id"
                        onChange={(e) => {
                            setShop  ({ ...shop, id: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="shopCategory">shop Category</label>
                    <Input type="text"
                        placeholder="Shop Category here"
                        name="shopCategory"
                        id="shopCategory"
                        onChange={(e) => {
                            setShop({ ...shop, shopCategory: e.target.value });
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="shopEmployeeID">shop Employee ID</label>
                    <Input type="text"
                        placeholder=" Shop Employee ID here"
                        name="shopEmployeeID"
                        id="shopEmployeeID"
                        onChange={(e) => {
                            setShop({ ...shop, shopEmployeeID: e.target.value });
                        }}
                    />
                </FormGroup>


                <FormGroup>
                    <label for="shopName">shop Name</label>
                    <Input type="text"
                        placeholder="shop Name here"
                        name="shopName"
                        id="shopName"
                        onChange={(e) => {
                            setShop({ ...shop, shopName: e.target.value });
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="customers">Customers</label>
                    <Input type="text"
                        placeholder="Customer id here"
                        name="customers"
                        id="customers"
                        onChange={(e) => {
                            setShop  ({ ...shop, customers: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="shopStatus">shopStatus</label>
                    <Input type="text"
                        placeholder="shopStatus here"
                        name="shopStatus"
                        id="shopStatus"
                        onChange={(e) => {
                            setShop({ ...shop, shopStatus: e.target.value });
                        }}
                    />
                </FormGroup>

             
            
                <FormGroup>
                    <label for="shopOwner">shopOwner</label>
                    <Input type="text"
                        placeholder="shop Owner here"
                        name="shopOwner"
                        id="shopOwner"
                        onChange={(e) => {
                            setShop({ ...shop, shopOwner: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="leaseStatus">lease Status</label>
                    <Input type="text"
                        placeholder="Shop leaseS tatus here"
                        name="leaseStatus"
                        id="leaseStatus"
                        onChange={(e) => {
                            setShop({ ...shop, leaseStatus: e.target.value });
                        }}
                    />
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">
                        Add Shop
                    </Button>

                    <Button type="reset"
                        color="warning m1-2" onClick={(e) => {
                            setShop({});
                        }}>Clear</Button>

                </Container>
            </Form>

        </Fragment >
    )
}
export default AddShop;