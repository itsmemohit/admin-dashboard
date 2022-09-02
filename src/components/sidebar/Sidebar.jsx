import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import UploadIcon from '@mui/icons-material/Upload';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import DesignServicesSharpIcon from '@mui/icons-material/DesignServicesSharp';
import PermMediaSharpIcon from '@mui/icons-material/PermMediaSharp';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import notificationsLabel from '@mui/icons-material/Notifications';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            {/* <Link to="/" className="link">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Dashboard
              </li>
            </Link> */}
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              History
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Product Details
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Service Registration
              </li>
            </Link>
            <Link to="/Transactions" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Coupon Discount
              </li>
            </Link>
            <Link to="/vendorRequest" className="link">
              <li className="sidebarListItem">
                <AddCircleOutlineSharpIcon className="sidebarIcon" />
                Allotment of tasks
              </li>
            </Link>
            <Link to="totalServices" className="link">
              <li className="sidebarListItem">
                <DesignServicesSharpIcon className="sidebarIcon" />
                Task performed details
              </li>
            </Link>
            <Link to="Testimonials" className="link">
              <li className="sidebarListItem">
                <MailOutline className="sidebarIcon" />
                Request/Appointments
              </li>
            </Link>
            <Link to="Gallery" className="link">
              <li className="sidebarListItem">
                <PermMediaSharpIcon className="sidebarIcon" />
                Manages Products/Services
              </li>
            </Link>
            <Link to="complaint" className="link">
              <li className="sidebarListItem">
                <Badge color="secondary" >
                  <MailIcon className="sidebarIcon" />
                </Badge>
                Manage partner merchant
              </li>
            </Link>
            <Link to="complaint" className="link">
              <li className="sidebarListItem">
                <Badge color="secondary" >
                  <MailIcon className="sidebarIcon" />
                </Badge>
                Category details manage
              </li>
            </Link>
            <Link to="complaint" className="link">
              <li className="sidebarListItem">
                <Badge color="secondary" >
                  <MailIcon className="sidebarIcon" />
                </Badge>
                Add to cart
              </li>
            </Link>
            <Link to="complaint" className="link">
              <li className="sidebarListItem">
                <Badge color="secondary" >
                  <MailIcon className="sidebarIcon" />
                </Badge>
                Paid Ads feature
              </li>
            </Link>
            <Link to="complaint" className="link">
              <li className="sidebarListItem">
                <Badge color="secondary" >
                  <MailIcon className="sidebarIcon" />
                </Badge>
                User comment
              </li>
            </Link>
            <Link to="complaint" className="link">
              <li className="sidebarListItem">
                <Badge color="secondary" >
                  <MailIcon className="sidebarIcon" />
                </Badge>
                Rating and Reviews
              </li>
            </Link>
            <Link to="complaint" className="link">
              <li className="sidebarListItem">
                <Badge color="secondary" >
                  <MailIcon className="sidebarIcon" />
                </Badge>
                Orders
              </li>
            </Link>
            <Link to="complaint" className="link">
              <li className="sidebarListItem">
                <Badge color="secondary" >
                  <MailIcon className="sidebarIcon" />
                </Badge>
                Commission
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Profiles</h3>
          <ul className="sidebarList">
            <Link to="ManageProfile">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Payment
              </li>
            </Link>
            <Link to='setting' className="link">
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Settings
              </li>
            </Link>
            <Link to="ManageProfile">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Report/Statistics
              </li>
            </Link>
            <Link to="ManageProfile">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Check Out Transactions
              </li>
            </Link>
            <Link to="ManageProfile">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Favorites
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="ManageProfile">
              <li className="sidebarListItem">
                <WorkOutline className="sidebarIcon" />
                Total Products
              </li>
            </Link>
            <Link to='setting' className="link">
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Total Category
              </li>
            </Link>
            <Link to='setting' className="link">
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Total Orders
              </li>
            </Link>
            <Link to='setting' className="link">
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Users List
              </li>
            </Link>
            <Link to='setting' className="link">
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                Category
              </li>
            </Link>
            <Link to='setting' className="link">
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                New Products
              </li>
            </Link>
            <Link to='setting' className="link">
              <li className="sidebarListItem">
                <Report className="sidebarIcon" />
                New Users
              </li>
            </Link>
          </ul>
        </div>

        <Button variant="outlined" color="error">
          log out
        </Button>
      </div>
    </div>
  );
}
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}