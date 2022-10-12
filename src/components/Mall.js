import React from "react";
import { Card,CardBody,CardText} from "reactstrap";

const Mall=({mall})=>
{
    return(

<Card >
    <CardBody>
       <CardText>{mall.id}</CardText>
       <CardText>{mall.mallAdmin}</CardText>
       <CardText>{mall.mallName}</CardText>
       <CardText>{mall.location}</CardText>
       <CardText>{mall.categories}</CardText>
             
    </CardBody>
</Card>


    )
}

export default Mall;