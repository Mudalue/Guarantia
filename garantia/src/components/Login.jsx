import React from "react";
import Navbar from "./other/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />
      <section className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="p-5">
                          <img
                            src="./images/logingarantia.svg"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 lh-lg">

                        <div className="p-5">
                          <div className="text-center  py-3">
                            <h4>
                              Welcome back, Login
                            </h4>
                          </div>
                          <form
                            action=""
                            className="px-4 custom-form">
                            <div className="row">
                              <div className="col-md-12">
                                <label>Email Address *</label>
                                <input className="form-control form-control-lg mb-2" placeholder="Your Email" />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <label>Password</label>
                                <input className="form-control form-control-lg" placeholder="Password" />
                                <p className="text-end">forgot password?</p>
                              </div>
                            </div>
                            <div className="text-center">
                              <p>Dont have an account? Sign in</p>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <button
                                  className="btn btn-warning text-center fw-bold text-light py-2"
                                  style={{ width: "100%" }}
                                >
                                  Login
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
