import React from "react";
import { Card,CardBody,CardText} from "reactstrap";

const Item = ({ item }) => {
    return (
        <Card>
            <CardBody>
                <CardText> {item.id} </CardText>
                <CardText>{item.name} </CardText>
                <CardText> {item.manufacturing}</CardText>
                <CardText> {item.expiry}</CardText>
                <CardText> {item.price}</CardText>
                <CardText>{ item.category}</CardText>
            </CardBody>
        </Card>
    )
}
export default Item;
