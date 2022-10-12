import React from "react";
import { Card,CardBody,CardText} from "reactstrap";

const Employee=({employee})=>
{
    return(

<Card >
    <CardBody>
       <CardText>{employee.id}</CardText>
       <CardText>{employee.name}</CardText>
       <CardText>{employee.dob}</CardText>
       <CardText>{employee.address}</CardText>
       <CardText>{employee.designation}</CardText>
       <CardText>{employee.salary}</CardText>
    </CardBody>
</Card>


    )
}

export default Employee;