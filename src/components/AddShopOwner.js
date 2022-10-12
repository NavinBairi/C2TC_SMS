import axios from "axios";
import { Fragment, useEffect, useState } from "react"
import { Container, FormGroup, Form, Input, Button } from "reactstrap";
import base_url from "../api/bootapi";


const AddShopOwner = () => {
    useEffect(
        () => {
           document.title="Add ShopOwners"
        },
        []
    );
   const [shopOwner,setShopOwner]=
   useState({});

    //form handler
    const handleForm = (e) => {
        console.log(shopOwner);
        postDataToServer(shopOwner)

        e.preventDefault();

    };

    //For saving data in Server
    const postDataToServer=(data)=>
    {
        axios.post(`${base_url}/ShopOwner`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
            },
            (error)=>{
                console.log(error);
                console.log("error");
            })
    };

    return (
        <Fragment>
            <h1 className="text-center my 3">Enter ShopOwner Details</h1>

           <Form onSubmit={handleForm}> 
                <FormGroup>
                    <label for="id">ShopOwner id</label>
                    <Input type="text"
                        placeholder="ShopOwner id here"
                        name="id"
                        id="id"
                        onChange={(e) => {
                            setShopOwner({ ...shopOwner, id: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="address">Address  Name </label>
                    <Input type="text"
                        placeholder="ShopOwner Address name here"
                        name="name"
                        id="name"
                        onChange={(e) => {
                            setShopOwner({ ...shopOwner, address: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="dob">ShopOwner DateOfBirth</label>
                    <Input type="text"
                        placeholder="ShoOwner date  of birth here"
                        name="dob"
                        id="dob"
                        onChange={(e) => {
                            setShopOwner({ ...shopOwner, dob: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="name">ShopOwner , name</label>
                    <Input type="text"
                        placeholder="ShopOwner name here"
                        name="name"
                        id="name"
                        onChange={(e) => {
                            setShopOwner({ ...shopOwner, name: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="shop_id">ShopOwner shop_id</label>
                    <Input type="text"
                        placeholder="ShopOwner shop_id here"
                        name="shop_d"
                        id="shop_id"
                        onChange={(e) => {
                            setShopOwner({ ...shopOwner, shop_id: e.target.value });
                        }}
                    />
                </FormGroup>
               

                <Container className="text-center">
                    <Button type="submit" color="success">
                        Add ShopOwner
                    </Button>

                    <Button type="reset"
                        color="warning m1-2" onClick={(e) => {
                            setShopOwner({});
                        }}>Clear</Button>

                </Container>
            </Form>

        </Fragment >


    )
}
export default AddShopOwner;

