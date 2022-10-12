import React from "react";
import { Card,CardBody,CardText} from "reactstrap";

const Customer=({customer})=>
{
    return(

<Card >
    <CardBody>
       <CardText>{customer.customerId}</CardText>
       <CardText>{customer.customerName}</CardText>
       <CardText>{customer.orderId}</CardText>
       <CardText>{customer.customerPhone}</CardText>
       <CardText>{customer.customerEmail}</CardText>
    </CardBody>
</Card>


    )
}

export default Customer;