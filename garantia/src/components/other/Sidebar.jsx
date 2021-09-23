import React from "react";
import {
  Home,
  Mail,
  Settings,
  User,
  Clipboard,
  Info,
  ShoppingCart,
  AlignJustify,
} from "react-feather";
import { Switch, useRouteMatch, Route, Link } from "react-router-dom";
import Customers from "../Dashboardcomponent/Customers";
import InvoicesPage from "../Dashboardcomponent/InvoicesPage";
import Product from "../Dashboardcomponent/Product";
import Userdashboard from "../Dashboardcomponent/Userdashboard";

const Sidebar = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <section id="home2">
        <nav class="navbar navbar-expand-lg navbar-light bg-dark text-light px-3">
          <div class="container-fluid">
            <a
              class="txt-warning text-decoration-none bg-transparent border-0"
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
            >
             <AlignJustify/>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="d-flex justify-content-end">
              <ul class="navbar-nav">
                {/* <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li> */}
                <li class="nav-item">
                  <div className="d-flex">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                      class="rounded-circle me-3"
                      height="25"
                      alt=""
                      loading="lazy"
                    />
                    <div>
                      <p>John-doe</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <siebar></siebar> */}

        <div
          class="offcanvas offcanvas-start bg-dark text-light"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
          style={{ width: "18%" }}
        >
          <div class="offcanvas-header my-">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">
              Garantia
            </h5>
            <button
              type="button"
              class="btn-close text-reset  bg-light"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul>
              <li className="" style={{ width: "100%" }}>
                <Link to={`${url}`}>
                  <Home size={16} className="me-2" /> Home
                </Link>
              </li>
              <li>
                <Link to={`${url}/customers`}>
                  <User size={16} className="me-2" /> Customers
                </Link>
              </li>
              <li>
                <Link to={`${url}/products`}>
                  <Clipboard size={16} className="me-2" /> Products
                </Link>
              </li>
              <li>
                <Link to={`${url}/invoices`}>
                  <ShoppingCart size={16} className="me-2" /> Invoices
                </Link>
              </li>
              <li>
                <a href="">
                  <span>
                    <Mail size={16} className="me-2" /> Messages
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>
                    <Settings size={16} className="me-2" /> Settings
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>
                    <Info size={16} className="me-2" /> Help
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="" className="fw-bold">
                  Log-out
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container-fluid bg-light p-5">
          <Switch>
            <Route exact path={`${path}/invoices`}>
              <InvoicesPage />
            </Route>
            <Route exact path={`${path}/products`}>
              <Product />
            </Route>
            <Route exact path={`${path}/customers`}>
              <Customers />
            </Route>
            <Route exact path={path}>
              <Userdashboard />
            </Route>
          </Switch>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
