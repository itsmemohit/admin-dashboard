import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Transactions from "./components/widgetLg/WidgetLg";
import Cards from "./components/cards/cards";
import Manage from "./pages/manage/managerUser";
import Gallery from './pages/gallery/gallery';

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path="/Transactions">
            <Transactions />
          </Route>
          <Route path="/UploadServices">
            <Transactions />
          </Route>
          <Route path="/vendorRequest">
            <Cards />
          </Route>
          <Route path="/totalServices">
            <Cards />
          </Route>
          <Route path="/testimonials">
            <Cards />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/complaint">
            <Cards />
          </Route>
          <Route path="/ManageProfile">
            <User />
          </Route>
          <Route path="/Setting">
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
