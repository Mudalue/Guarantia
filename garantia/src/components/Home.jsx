import React from "react";
import Navbar from "./other/Navbar";


const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="Home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="card py-3 px-4  animate__animated animate__pulse animate__repeat-5 ">
                <div className="card-body">
                  <h4 className="card-title text-center">Registration</h4>
                  <div className="card-text">
                    <form>
                      <div className="row">
                        <div className="col-md-12 pt-2">
                          <label>Full name</label>
                          <input className=" form-control" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 pt-2">
                          <label>Email</label>
                          <input className=" form-control" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 pt-2">
                          <label>Address</label>
                          <input className=" form-control" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 pt-2">
                          <label>Business Name</label>
                          <input className=" form-control" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 pt-2">
                          <label>Social Media Platform</label>
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>select social media</option>
                            <option value="1">Instagram</option>
                            <option value="2">Whatsapp</option>
                            <option value="3">Facebook</option>
                            <option value="4">Telegram</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 pt-2">
                          <label>Amount</label>
                          <input className="form-control" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 pt-2">
                          <label>Customers Email</label>
                          <input className="form-control" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 pt-2">
                          <div>
                            <button
                              className="btn btn-md btn-warning py-2 text-light"
                              style={{ width: "100%" }}
                            >
                              Register
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 ">
              <div className="homecontent text-center lh-lg animate__animated animate__bounce animate__repeat-2">
                <h1>garantia</h1>
                <p>your trusted online eskrow service</p>
                <div>
                  <button className="btn btn-light btn-lg fw-bold px-3">
                    Learn more
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
