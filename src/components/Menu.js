import React from "react";
import { Link } from "react-router-dom";
import  { useEffect} from "react";

import img1 from '../image/image1.jpeg';
import img2 from '../image/image2.jpg';


import { CardText, CardGroup, CardImg, CardBody, Container, Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const Menu = () => {

    useEffect(
        () => {
           document.title="Menu"
        },
        []
    );
   
    return (

       
        <Container>
          
      
          
            <br /><br /><br /> <br /> <br /> <br /> <br /> <br /> <br />
            <CardGroup>

          <Card  style={{flex:1, backgroundColor:'chartreuse'}}>
                
                 <CardImg src={img1} alt="View Image" />
                    <CardBody>


                        <UncontrolledDropdown>
                            <DropdownToggle
                                caret
                                color="dark">
                                View
    
   
                            </DropdownToggle>
                            
                            <DropdownMenu dark>
                                <DropdownItem View>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/View-shops" action>
                                        View Shop
                                    </Link>
                                </DropdownItem>

                                <DropdownItem View>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/View-items" action>
                                        View Item
                                    </Link>
                                </DropdownItem>

                                <DropdownItem View>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/view-orders" action>
                                        View Order
                                    </Link>
                                </DropdownItem>

                                <DropdownItem View>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/view-customers" action>
                                        View Customer
                                    </Link>
                                </DropdownItem>
                                <DropdownItem View>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/view-users" action>
                                        View User
                                    </Link>
                                </DropdownItem>

                                <DropdownItem View>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/view-employees" action>
                                        View Employees
                                    </Link>
                                </DropdownItem>

                                <DropdownItem View>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/view-shopowner" action>
                                        View ShopOwner
                                    </Link>
                                </DropdownItem>

                                <DropdownItem View>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/view-mall" action>
                                        View Mall
                                    </Link>
                                </DropdownItem>

                                <DropdownItem View>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/view-malladmin" action>
                                        View MallAdmin
                                    </Link>
                                </DropdownItem>

                            </DropdownMenu>
                           
                        </UncontrolledDropdown>
                       

                        <CardText >
                            Select  from the  View for Retrive the data
                        </CardText>

                      </CardBody>
                     </Card>



                     <Card  style={{flex:1, backgroundColor:'cyan'}}>
                    <CardImg src={img2} alt="Add Image" />
                    <CardBody>

                        <UncontrolledDropdown>
                            <DropdownToggle
                                caret
                                color="dark"
                            >
                                Add
                            </DropdownToggle>

                            <DropdownMenu dark>
                                <DropdownItem Add>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/Add-shops" action>
                                        Add Shop
                                    </Link>
                                </DropdownItem>

                                <DropdownItem Add>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/Add-items" action>
                                        Add Item
                                    </Link>
                                </DropdownItem>
                                <DropdownItem Add>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/add-orders" action>
                                        Add Order
                                    </Link>
                                </DropdownItem>
                                <DropdownItem Add>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/add-customers" action>
                                        Add Customer
                                    </Link>
                                </DropdownItem>
                                <DropdownItem Add>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/add-users" action>
                                        Add User
                                    </Link>
                                </DropdownItem>

                                <DropdownItem Add>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/add-employees" action>
                                        Add Employees
                                    </Link>
                                </DropdownItem>

                                <DropdownItem Add>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/add-shopowner" action>
                                        Add ShopOwner
                                    </Link>
                                </DropdownItem>

                                <DropdownItem Add>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/add-mall" action>
                                        Add Mall
                                    </Link>
                                </DropdownItem>

                                <DropdownItem Add>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/add-malladmin" action>
                                        Add MallAdmin
                                    </Link>
                                </DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <CardText>
                            To add Data click on Add
                        </CardText>

                    </CardBody>
                </Card>


                <Card  style={{flex:1, backgroundColor:'cadetblue'}}>
                    <CardImg src={img1} alt="Add Image" />
                    <CardBody>

                        <UncontrolledDropdown>
                            <DropdownToggle
                                caret
                                color="dark"
                            >
                                Update
                            </DropdownToggle>

                            <DropdownMenu dark>
                                <DropdownItem update>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/update-shops" action>
                                        Update  Shop
                                    </Link>
                                </DropdownItem>

                                <DropdownItem item>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/update-items" action>
                                        Update Item
                                    </Link>
                                </DropdownItem>
                                <DropdownItem update>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/update-orders" action>
                                        Update Order
                                    </Link>

                                </DropdownItem>
                                <DropdownItem update>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/update-customers" action>
                                        Update Customer
                                    </Link>
                                </DropdownItem>

                                <DropdownItem Update>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/update-users" action>
                                        Update User
                                    </Link>
                                </DropdownItem>

                                <DropdownItem Update>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/update-employees" action>
                                        Update Employees
                                    </Link>
                                </DropdownItem>

                                <DropdownItem Update>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/update-shopowner" action>
                                        Update ShopOwner
                                    </Link>
                                </DropdownItem>

                                <DropdownItem Update>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/update-mall" action>
                                        Update Mall
                                    </Link>
                                </DropdownItem>

                                <DropdownItem Update>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/update-mall" action>
                                        Update MallAdmin
                                    </Link>
                                </DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <CardText>
                            Click on update and select which table want to update
                        </CardText>

                    </CardBody>
                </Card>


                <Card  style={{flex:1, backgroundColor:'yellow'}}>
                    <CardImg src={img2} alt="Delete Image" />
                    <CardBody>


                        <UncontrolledDropdown>
                            <DropdownToggle
                                caret
                                color="dark"
                            >
                                Delete
                            </DropdownToggle>

                            <DropdownMenu dark>
                                <DropdownItem delete>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/delete-shops" action>
                                        Delete Shop
                                    </Link>
                                </DropdownItem>

                                <DropdownItem delete>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/delete-items" action>
                                        Delete Item
                                    </Link>
                                </DropdownItem>
                                <DropdownItem delete>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/delete-orders" action>
                                        Delete Order
                                    </Link>
                                </DropdownItem>

                                <DropdownItem delete>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/delete-customers" action>
                                        Delete Customer
                                    </Link>
                                </DropdownItem>

                                <DropdownItem delete>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/delete-users" action>
                                        Delete User
                                    </Link>
                                </DropdownItem>

                                <DropdownItem delete>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/delete-employees" action>
                                        Delete Employees
                                    </Link>
                                </DropdownItem>

                                <DropdownItem delete>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/delete-shopowner" action>
                                        Delete ShopOwner
                                    </Link>
                                </DropdownItem>

                                <DropdownItem delete>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/delete-mall" action>
                                        Delete Mall
                                    </Link>
                                </DropdownItem>
                                <DropdownItem delete>
                                    <Link className="list-group-item list-group-item-action" tag="a" to="/delete-malladmin" action>
                                        Delete MallAdmin
                                    </Link>
                                </DropdownItem>


                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <CardText>
                            To delete table Select from delete
                        </CardText>

                    </CardBody>
                </Card>

            </CardGroup>

            <CardBody>

            </CardBody>


        </Container >

    );
};

export default Menu;

