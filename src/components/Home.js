import React from "react";
import { Card, CardBody, Container,Button} from "reactstrap";
import  { useEffect} from "react";


const Home = () => {
    useEffect(
        () => {
           document.title="Home"
        },
        []
    );
    return (
        <div>
           
            <Container>
            
                <Card className="my-3 bg-info">
                    <CardBody>
                        <h2 className="text-center my-5">Shopping Management System</h2>
                    </CardBody>
                </Card>
            </Container>


            <Container>
                <p>Shopping management software allows to plan Shoppings, train the students as per relevant market requirements, organize recruitment drives and let companies recruit students. </p>

                <p>How is Training and Shopping software helpful for higher education institutions?
                    The Shopping management system creates databases of students, and companies can use these to access details of students who qualify the company’s criteria.
                    Features of Shopping Management software
                    Shoppings Registration
                    Students can register for Shoppings online without help from the Shopping management team each time they need to do so. The relevant details and documents can all be turned in online.
                    Process of Shopping Management software
                    The process is relatively simple.
                    In this project, we will be designing a simple shopping mall management system. The mall will provide a soothing shopping experience for customers, provide mall management functions to 
                    mall administrators and inventory/staff management to shop owners at the mall.

                    <hr />
                    <div>
                        Step 1: The User must first register themselves through the  Shopping portal.
                    </div>
                    <div>
                        Step 2: Second, the User must update all relevant details.
                    </div>

                    <div>
                        Step 3: Now, the User can apply for Shop.
                    </div>
                    <div>
                        Step 4:The Shop Owner is responsible for setting up the shop and maintaining it. The job involves managing the inventory in the shop. Also, the shop owner can add or remove customers from his shop. The Shop Owner can also decide to close shop and remove it from the mall
                    </div>
                </p>    </Container>

                <Container>
                    <Button color="warning"  >Start Exploring</Button></Container>
               

        </div>
    )
}


export default Home;