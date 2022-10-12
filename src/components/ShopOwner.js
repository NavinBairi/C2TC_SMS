import React from "react";
import { Card,CardBody,CardText} from "reactstrap";


const ShopOwner=({shopowner})=>
{
    return(

<Card >
    <CardBody>

       <CardText>{shopowner.id}</CardText>
       <CardText>{shopowner.name}</CardText>
       <CardText>{shopowner.dob}</CardText>
       <CardText>{shopowner.address}</CardText>   
       <CardText>{shopowner.shop_id}</CardText>

    </CardBody>
</Card>

    )
}

export default ShopOwner;

