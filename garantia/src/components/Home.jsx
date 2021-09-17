import React from "react";
import Navbar from "./other/Navbar";
import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="Home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="card py-3 px-4  animate__animated animate__pulse animate__repeat-5">
                <div className="card-body">
                  <h4 className="card-title text-center">Registration</h4>
                  <div className="card-text">
                    <div className="alert alert-secondary text-center mt-4 mb-4">
                      Create a free account to generate a link and <strong>start selling today</strong>.
                    </div>
                    <form className="custom-form">
                      <div className="row">
                        <div className="col-md-6">
                          <label>First Name</label>
                          <input className=" form-control form-control-lg" placeholder="Enter Your First Name" />
                        </div>
                        <div className="col-md-6">
                          <label>Last Name</label>
                          <input className="form-control form-control-lg" placeholder="Enter Last Name" />
                        </div>
                      </div>
                      <div className="row pt-3">
                        <div className="col-md-6">
                          <label>Email</label>
                          <input className=" form-control form-control-lg" placeholder="Your Valid Email Add." />
                        </div>

                        <div className="col-md-6">
                          <label>Phone No.</label>
                          <input className=" form-control form-control-lg" placeholder="Your Active Phone Num." />
                        </div>
                      </div>
                      <div className="row pt-3">
                        <div className="col-md-6">
                          <label>Password</label>
                          <input className=" form-control form-control-lg" placeholder="Your Password" />
                        </div>
                        <div className="col-md-6">
                          <label>Repeat Password</label>
                          <input className=" form-control form-control-lg" placeholder="Repeat Password" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 pt-3">
                          <label>Business Name</label>
                          <input className=" form-control form-control-lg" placeholder="Perhaps, a name that matches your online business!" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 pt-3">
                          <div>
                            <button
                              className="btn btn-lg btn-warning mt-2"
                              style={{ width: "100%", height: 100 }}
                            >
                              CREATE ACCOUNT <ArrowRight size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                      <h5 className="text-center pt-2">Already Own An Account? <Link to="/Login">Login</Link></h5>
                    </form>

                    {/* form2 here */}
                    <form action="">

                    </form>
                    {/* /form2 ends here */}

                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 ">
              <div className="homecontent text-center lh-lg animate__animated animate__bounce animate__repeat-2">
                <h1 className="text-dark">garantia.</h1>
                <hr />
                <p className="text-dark" style={{ fontSize: 26 }}>Your trusted online escrow service.</p>
                <div>
                  <button className="btn btn-light btn-lg fw-bold px-3">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
