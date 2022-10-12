import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Fragment, useEffect, useState } from "react"
import { Container, FormGroup, Form, Input, Button } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";


const DeleteOrders = () => {
    useEffect(
        () => {
           document.title="Delete Orders"
        },
        []
    );
    const [order, setOrder] = useState({});

    //form handler
    const handleForm = (e) => {
        console.log(order);
        deleteDataToServer(order)
        e.preventDefault();

    };

    //For saving data in Server
    const deleteDataToServer=(id)=>
    {
        axios.delete(`${base_url}/orders/${id}`).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Data remove");
                setOrder(response.data);
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong");
            })
    };
    return (
        <Fragment>
            <h1 className="text-center my 3">Delete Order Id</h1>

           <Form onSubmit={handleForm}> 
                <FormGroup>
                    <label for="id">Order id</label>
                    <Input type="text"
                        placeholder="Order id here"
                        name="id"
                        id="id"
                        onChange={(e) => {
                            setOrder({ ...order, id: e.target.value });
                        }}
                    />
                </FormGroup>

                <Container className="text-center">
                <Button type="submit" color="danger" onClick={deleteDataToServer(order.id)} >
                        Delete order
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
export default DeleteOrders;