import React from "react";
import { Card,CardBody,CardText} from "reactstrap";

const Order=({order})=>
{
    return(

<Card>
    <CardBody>
       <CardText>{order.id}</CardText>
       <CardText>{order.name}</CardText>
       <CardText>{order.dateOfPurchase}</CardText>
       <CardText>{order.paymentMode}</CardText>
       <CardText>{order.price}</CardText>
       <CardText>{order.total}</CardText>
    </CardBody>
</Card>


    )
}

export default Order;