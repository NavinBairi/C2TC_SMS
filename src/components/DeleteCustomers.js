import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Fragment, useState } from "react"
import { Container, FormGroup, Form, Input, Button } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const DeleteCustomers = () => {

    const [customer, setCustomer] = useState({});

    //form handler
    const handleForm = (e) => {
        console.log(customer);
        deleteDataToServer(customer)

        e.preventDefault();

    };

    //For saving data in Server
    const deleteDataToServer=(id)=>
    {
        axios.delete(`${base_url}/customers/${id}`).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Data remove");
                setCustomer(response.data);
            },  
            (error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong");
            })
    };

    return (
        <Fragment>
            <h1 className="text-warning">Enter Customer Id</h1>

           <Form onSubmit={handleForm}> 
                <FormGroup>
                    <label for="id"className="text-warning">Customer id</label>
                    <Input type="text"
                        placeholder="Customer id here"
                        name="id"
                        id="id"
                        onChange={(e) => {
                            setCustomer  ({ ...customer, id: e.target.value });
                        }}
                    />
                </FormGroup>
       
                <Container className="text-center">
                    <Button type="submit" color="danger" onClick={deleteDataToServer(customer.id)} >
                        Delete Customer
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
export default DeleteCustomers;