import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

import { Row, Col, Container } from 'reactstrap';
import { ToastContainer } from 'react-toastify';

import AllShop from './components/AllShop';
import AllItem from './components/AllItem';
import AllOrders from './components/AllOrders';
import AllCustomers from  './components/AllCustomers';
import AllUsers from  './components/AllUsers';
import AllEmployees from  './components/AllEmployees';
import AllMall from  './components/AllMall';
import AllMallAdmin from  './components/AllMallAdmin';
import AllShopOwner from './components/AllShopOwner';


import AddShop from "./components/AddShop";
import AddItem from './components/AddItem';
import AddOrders from './components/AddOrders';
import AddCustomers from  './components/AddCustomers';
import AddUsers from  './components/AddUsers';
import AddEmployees from  './components/AddEmployees';
import AddShopOwner from './components/AddShopOwner';
import AddMall from  './components/AddMall';
import AddMallAdmin from  './components/AddMallAdmin';

import UpdateShop from './components/UpdateShop';
import UpdateItem from './components/UpdateItem';
import UpdateOrders from './components/UpdateOrders';
import UpdateCustomers from './components/UpdateCustomers';
import UpdateUsers from './components/UpdateUsers';
import UpdateEmployees from  './components/UpdateEmployees';
import UpdateShopOwner from './components/AllShopOwner';
import UpdateMall from  './components/UpdateMall';
import UpdateMallAdmin from  './components/UpdateMallAdmin';

import DeleteOrders from  './components/DeleteOrders';
import DeleteCustomers from  './components/DeleteCustomers';

import Menu from './components/Menu';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import './index.css';
import './NavbarStyle.css';

//import img2 from '../image/image2.jpg';


//mport ParentComponent from './components/ParentComponent';
//import Product from './components/Product';



function App() {

  return (
   

    <div className="App" >

      <Router>
        <ToastContainer />
        <Container>
       
          <Row>
          <Navbar />
          </Row>
          
          <Row>
                        <Col md={12}>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/menu" element={<Menu />} exact />


                <Route path="/view-shops" element={<AllShop />} exact />
                <Route path="/view-items" element={<AllItem />} exact />
                <Route path="/view-orders" element={<AllOrders />} exact />
                <Route path="/view-customers" element={<AllCustomers />} exact />
                <Route path="/view-users" element={<AllUsers />} exact />
                <Route path="/view-employees" element={<AllEmployees />} exact />
                <Route path="/view-mall" element={<AllMall/>} exact />
                <Route path="/view-malladmin" element={<AllMallAdmin/>} exact />
                <Route path="/view-shopowner" element={<AllShopOwner/>} exact />

                <Route path="/add-shops" element={<AddShop />} exact />
                <Route path="/add-items" element={<AddItem />} exact />
                <Route path="/add-orders" element={<AddOrders />} exact />
                <Route path="/add-customers" element={<AddCustomers />} exact />
                <Route path="/add-users" element={<AddUsers />} exact />
                <Route path="/add-employees" element={<AddEmployees />} exact />
                <Route path="/add-mall" element={<AddMall/>} exact />
                <Route path="/add-malladmin" element={<AddMallAdmin/>} exact />
                <Route path="/add-shopowner" element={<AddShopOwner/>} exact />

                <Route path="/update-shops" element={<UpdateShop/>} exact />
                <Route path="/update-items" element={<UpdateItem/>} exact />
                <Route path="/update-orders" element={<UpdateOrders/>} exact />
                <Route path="/update-customers" element={<UpdateCustomers/>} exact />
                <Route path="/update-users" element={<UpdateUsers/>} exact />
                <Route path="/update-employees" element={<UpdateEmployees />} exact />
                <Route path="/update-mall" element={<UpdateMall/>} exact />
                <Route path="/update-malladmin" element={<UpdateMallAdmin/>} exact />
                <Route path="/update-shopowner" element={<UpdateShopOwner/>} exact />



                <Route path="/delete-orders" element={<DeleteOrders/>} exact />
                <Route path="/delete-customers" element={<DeleteCustomers/>} exact />

                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Col>
            </Row>
            <Menu/>
          
        </Container>
      </Router>
      </div>

  )

}
export default App;