import React from "react";
import { ChevronRight } from "react-feather";
import Customerstab from "../other/Customerstab";
const Customers = () => {
  return (
    <>
      <section className="customer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 lh-lg">
              <div style={{margin: 50}}>
                <h4 style={{fontSize: 40}} className="fw-bolder">My Customers</h4>
              </div>
              <div className="card card-body">
              <div className="d-flex flex-wrap justify-content-between card1">
                <h4 className="fw-bold">Recent Customer</h4>
                <button
                  className="btn btn-transparent"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <ChevronRight />
                </button>
              </div>
              <div class="collapse" id="collapseExample">
                <div class="card ">
                  <h4 className="card-Title fw-bold">Details</h4>
                  <Customerstab />
                </div>
              </div>
              <hr/>
              <div className="row">
              <div className="col-md-12">
                <div className="d-flex flex-wrap justify-content-between card1">
                  <h4 className="fw-bold">Old Customer</h4>
                  <button
                    className="btn btn-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#oldcustomer"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <ChevronRight />
                  </button>
                </div>
                <div class="collapse" id="oldcustomer">
                  <div class="card ">
                    <h4 className="card-Title">Details</h4>
                    <Customerstab />
                  </div>
                </div>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex flex-wrap justify-content-between card1">
                  <h4 className="fw-bold">Top Customer</h4>
                  <button
                    className="btn btn-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#topcustomer"
                    aria-expanded="false"
                    aria-controls="topcustomer"
                  >
                    <ChevronRight />
                  </button>
                </div>
                <div class="collapse" id="topcustomer">
                  <div class="card cmargin">
                    <h4 className="card-Title">Details</h4>
                    <Customerstab />
                  </div>
                </div>
              </div>
            </div>
              </div>
              
            </div>
 
          </div>
        </div>
      </section>
    </>
  );
};

export default Customers;
