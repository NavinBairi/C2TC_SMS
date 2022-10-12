import React from "react";
import { Card,CardBody,CardText} from "reactstrap";

const Shop=({shop})=>
{
    return(

<Card>
    <CardBody>
       <CardText>{shop.id}</CardText>
       <CardText>{shop.shopCategory}</CardText>
       <CardText>{shop.shopEmployeeID}</CardText>
       <CardText>{shop.shopName}</CardText>
       <CardText>{shop.customers}</CardText>
       <CardText>{shop.shopStatus}</CardText>
       <CardText>{shop.shopOwner}</CardText>
       <CardText>{shop.leaseStatus}</CardText>


    </CardBody>
</Card>


    )
}

export default Shop;