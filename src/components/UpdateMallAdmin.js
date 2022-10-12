import axios from "axios";
import { Fragment, useEffect, useState } from "react"
import { Container, FormGroup, Form, Input, Button } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const UpdateMallAdmin = () => {
    useEffect(
        () => {
           document.title="Update Malladmins"
        },
        []
    );
    const [malladmin, setMallAdmin] = useState({});

    //form handler
    const handleForm = (e) => {
        console.log(malladmin);
        putDataToServer(malladmin)

        e.preventDefault();

    };

    //For saving data in Server
    const putDataToServer=(data)=>
    {
        axios.post(`${base_url}/malladmin`,data).then(
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
            <h1 className="text-center my 3">Enter Malladmin Details</h1>

           <Form onSubmit={handleForm}> 
           <FormGroup>
                    <label for="id">Malladmin id</label>
                    <Input type="text"
                        placeholder="id here"
                        name="id"
                        id="id"
                        onChange={(e) => {
                            setMallAdmin({ ...malladmin, id: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="name">MallADMIN Name</label>
                    <Input type="text"
                        placeholder="Malladmin name here"
                        name="malladminName"
                        id="malladminName"
                        onChange={(e) => {
                            setMallAdmin({ ...malladmin, name: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="password">password</label>
                    <Input type="text"
                        placeholder="mall password here"
                        name="password"
                        id="password"
                        onChange={(e) => {
                            setMallAdmin({ ...malladmin, password: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="phone">Malladmin phone</label>
                    <Input type="text"
                        placeholder="phone here"
                        name="phone"
                        id="phone"
                        onChange={(e) => {
                            setMallAdmin({ ...malladmin, phone : e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="mall">Mall </label>
                    <Input type="text"
                        placeholder="Mall  here"
                        name="mall "
                        id="mall"
                        onChange={(e) => {
                            setMallAdmin({ ...malladmin, mall: e.target.value });
                        }}
                    />
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">
                        Update Customer
                    </Button>

                    <Button type="reset"
                        color="warning m1-2" onClick={(e) => {
                            setMallAdmin({});
                        }}>Clear</Button>

                </Container>
            </Form>

        </Fragment >
    )
}
export default UpdateMallAdmin;