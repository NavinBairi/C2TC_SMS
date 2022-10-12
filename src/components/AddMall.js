import axios from "axios";
import { Fragment, useEffect, useState } from "react"
import { Container, FormGroup, Form, Input, Button } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddMall = () => {
    useEffect(
        () => {
           document.title="Add Malls"
        },
        []
    );
    const [mall, setMall] = useState({});

    //form handler
    const handleForm = (e) => {
        console.log(mall);
        postDataToServer(mall)

        e.preventDefault();

    };

    //For saving data in Server
    const postDataToServer=(data)=>
    {
        axios.post(`${base_url}/mall`,data).then(
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
            <h1 className="text-center my 3">Enter Mall Details</h1>

           <Form onSubmit={handleForm}> 
                <FormGroup>
                    <label for="id">Mall id</label>
                    <Input type="text"
                        placeholder="Mall id here"
                        name="id"
                        id="id"
                        onChange={(e) => {
                            setMall({ ...mall, id: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="mallAdmin">Mall Admin</label>
                    <Input type="text"
                        placeholder="Mall Admin here"
                        name="mallAdmin"
                        id="mallAdmin"
                        onChange={(e) => {
                            setMall({ ...mall, mallAdmin: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="mallName">Mall Name</label>
                    <Input type="text"
                        placeholder="Mall name here"
                        name="mallName"
                        id="mallName"
                        onChange={(e) => {
                            setMall({ ...mall, mallName: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="location">mall location</label>
                    <Input type="text"
                        placeholder="loaction here"
                        name="location"
                        id="location"
                        onChange={(e) => {
                            setMall({ ...mall, location: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="categories">Mall categories</label>
                    <Input type="text"
                        placeholder="mall categories here"
                        name="categories"
                        id="categories"
                        onChange={(e) => {
                            setMall({ ...mall, categories: e.target.value });
                        }}
                    />
                </FormGroup>
                

                <Container className="text-center">
                    <Button type="submit" color="success">
                        Add Mall
                    </Button>

                    <Button type="reset"
                        color="warning m1-2" onClick={(e) => {
                            setMall({});
                        }}>Clear</Button>

                </Container>
            </Form>

        </Fragment >



    )
}
export default AddMall;