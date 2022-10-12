import axios from "axios";
import { Fragment, useEffect, useState } from "react"
import { Container, FormGroup, Form, Input, Button } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const UpdateUsers = () => {
    useEffect(
        () => {
           document.title="Update Users"
        },
        []
    );
    const [user, setUser] = useState({});

    //form handler
    const handleForm = (e) => {
        console.log(user);
        putDataToServer(user)

        e.preventDefault();

    };

    //For saving data in Server
    const putDataToServer=(data)=>
    {
        axios.post(`${base_url}/user`,data).then(
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
            <h1 className="text-center my 3">Enter User Details</h1>

           <Form onSubmit={handleForm}> 
                <FormGroup>
                    <label for="id">User id</label>
                    <Input type="text"
                        placeholder="user id here"
                        name="id"
                        id="id"
                        onChange={(e) => {
                            setUser({ ...user, id: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="name">User Name</label>
                    <Input type="text"
                        placeholder="User name here"
                        name="name"
                        id="name"
                        onChange={(e) => {
                            setUser({ ...user, name: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="type">User Type</label>
                    <Input type="text"
                        placeholder="User type here"
                        name="type"
                        id="type"
                        onChange={(e) => {
                            setUser({ ...user, type: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="password">User Password</label>
                    <Input type="text"
                        placeholder="User password here"
                        name="password"
                        id="password"
                        onChange={(e) => {
                            setUser({ ...user, password: e.target.value });
                        }}
                    />
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">
                        Update User
                    </Button>

                    <Button type="reset"
                        color="warning m1-2" onClick={(e) => {
                            setUser({});
                        }}>Clear</Button>

                </Container>
            </Form>

        </Fragment >
    )
}
export default UpdateUsers;