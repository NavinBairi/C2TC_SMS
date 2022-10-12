import React from "react";
import { Card,CardBody,CardText} from "reactstrap";

const  MallAdmin=({malladmin})=>
{
    return(
        <Card>
        <CardBody>
            <CardText>{malladmin.id}</CardText>
            <CardText>{malladmin.name}</CardText>
            <CardText>{malladmin.password}</CardText>
            <CardText>{malladmin.phone}</CardText>
            <CardText>{malladmin.mall}</CardText>


        </CardBody>
    </Card>


    )
}

export default MallAdmin;