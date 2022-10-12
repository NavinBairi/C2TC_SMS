import axios from "axios";
import { Fragment, useEffect, useState } from "react"
import { Container, FormGroup, Form, Input, Button } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const UpdateItem = () => {
    useEffect(
        () => {
           document.title="Update item"
        },
        []
    );
    const [item, setItem] = useState({});

    //form handler
    const handleForm = (e) => {
        console.log(item);
        putDataToServer(item)

        e.preventDefault();

    };

    //For saving data in Server
    const putDataToServer=(data)=>
    {
        axios.post(`${base_url}/items`,data).then(
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
            <h1 className="text-center my 3">Enter item Details</h1>

           <Form onSubmit={handleForm}> 
               
           <FormGroup>
                    <label for="id">Item id</label>
                    <Input type="text"
                        placeholder="Item id here"
                        name="id"
                        id="id"
                        onChange={(e) => {
                            setItem  ({ ...item, id: e.target.value });
                        }}
                    />
                </FormGroup>
              
                <FormGroup>
                    <label for="name">ItemCategory</label>
                    <Input type="text"
                        placeholder="Item Category here"
                        name="name"
                        id="name"
                        onChange={(e) => {
                            setItem({ ...item, name: e.target.value });
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <label for="manufacturing">manufacturing</label>
                    <Input type="text"
                        placeholder="manufacturing here"
                        name="name"
                        id="name"
                        onChange={(e) => {
                            setItem({ ...item,manufacturing: e.target.value });
                        }}
                    />
                </FormGroup>
            
                <FormGroup>
                    <label for="expiry">expiry</label>
                    <Input type="text"
                        placeholder="expiry here"
                        name="name"
                        id="name"
                        onChange={(e) => {
                            setItem({ ...item, expiry: e.target.value });
                        }}
                    />
                </FormGroup>
            
                <FormGroup>
                    <label for="price">Price</label>
                    <Input type="text"
                        placeholder=" Item ID here"
                        name="id"
                        id="id"
                        onChange={(e) => {
                            setItem({ ...item, price: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="category">category</label>
                    <Input type="text"
                        placeholder="category here"
                        name="name"
                        id="name"
                        onChange={(e) => {
                            setItem({ ...item, category: e.target.value });
                        }}
                    />
                </FormGroup>



                <Container className="text-center">
                    <Button type="submit" color="success">
                        Update Item
                    </Button>

                    <Button type="reset"
                        color="warning m1-2" onClick={(e) => {
                            setItem({});
                        }}>Clear</Button>

                </Container>
            </Form>

        </Fragment >
    )
}
export default UpdateItem;