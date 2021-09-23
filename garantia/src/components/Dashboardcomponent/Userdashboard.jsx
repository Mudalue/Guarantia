import React from "react";
import { DollarSign, Clipboard, User, Activity } from "react-feather";
import Sidebar from "../other/Sidebar";

const Userdashboard = () => {
  return (
    <>
      {/* <Sidebar /> */}
     
        
          <div className="row">
                <div className="col-md-3">
                  <div className="card  mt-5 p-3 card-height">
                    <div className="d-flex lh-lg p-2">
                      <div className="border rounded-circle bg-danger text-light me-3" style={{padding: "3px 13px"}}>
                        <DollarSign size={15}/>
                      </div>
                      <p className="fw-bold">Total Revenue</p>
                    </div>
                    <h1 className="text-center fw-bolder">&#8358; 1200</h1>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card  mt-5 p-3 card-height">
                    <div className="d-flex lh-lg p-2">
                      <div className="border rounded-circle bgk-success text-light me-3" style={{padding: "3px 13px"}}>
                        <Clipboard size={15}/>
                      </div>
                      <p className="fw-bold">Invoices</p>
                    </div>
                    <h1 className="text-center fw-bolder">250</h1>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card  mt-5 p-3 card-height">
                    <div className="d-flex lh-lg p-2 ">
                      <div className="border rounded-circle bg-info text-light me-3" style={{padding: "3px 13px"}}>
                        <User size={15}/>
                      </div>
                      <div><p className="fw-bold pt-1">Clients</p></div>
                      
                    </div>
                    <h1 className="text-center fw-bolder"> 1200</h1>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card  mt-5 p-3 card-height">
                    <div className="d-flex lh-lg p-2 ">
                      <div className="border rounded-circle bg-primary text-light me-3" style={{padding: "3px 13px"}}>
                        <Activity size={15}/>
                      </div>
                      <p className="fw-bold">Loyalty</p>
                    </div>
                    <h1 className="text-center fw-bolder"> 120</h1>
                  </div>
                </div>
            
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card mt-3">
                <div className="card-body">
                  {/* <Bar
                    data={data}
                    width={100}
                    height={50}
                    options={{ maintainAspectRatio: false }}
                  /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="card mt-3 p-3 lh-lg">
                <div className="card-body">
                  <h4 className="card-title mb-3">Activity</h4>
                  <div
                    className="d-flex justify-content-between p-3"
                    style={{ height: 50, borderLeft: "3px solid #fdd20eff" }}
                  >
                    <div className="d-flex">
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                        class="rounded-circle me-3"
                        height="25"
                        alt=""
                        loading="lazy"
                      />
                      <div>
                        <p>John-doe created invoice PC-78328</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-muted forteen"> 5 min ago</p>
                    </div>
                  </div>
                  <hr />
                  <div
                    className="d-flex justify-content-between p-3"
                    style={{ height: 50, borderLeft: "3px solid #fdd20eff" }}
                  >
                    <div className="d-flex">
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                        class="rounded-circle me-3"
                        height="25"
                        alt=""
                        loading="lazy"
                      />
                      <div>
                        <p>John-doe sent invoice PC-78328</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-muted forteen">just now</p>
                    </div>
                  </div>
                  <hr />
                  <div
                    className="d-flex justify-content-between p-3"
                    style={{ height: 50, borderLeft: "3px solid #fdd20eff" }}
                  >
                    <div className="d-flex">
                      <img
                        src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                        class="rounded-circle me-3"
                        height="25"
                        alt=""
                        loading="lazy"
                      />
                      <div>
                        <p>John-doe recieved invoice PC-78328</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-muted forteen">just now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="card mt-3 p-3 lh-lg">
                <h4 className="card-title mt-3">Recent invoices</h4>
                <div className="card-body">
                  <table class="table forteen">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Date created</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Pc-72838</th>
                        <td>25 July, 2020</td>
                        <td>John doe</td>
                        <td>&#8358; 3400</td>
                        <td>
                          <span className="bg-success px-2 text-light rounded-pill fw-bold">
                            Paid
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Pc-72908</th>
                        <td>02 December, 2021</td>
                        <td>Sullivan bowman</td>
                        <td>&#8358; 400</td>
                        <td>
                          <span className="bg-warning px-2 text-light rounded-pill fw-bold">
                            Pending
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Pc-72908</th>
                        <td>12 March, 2021</td>
                        <td>Cristiano ronaldo</td>
                        <td>&#8358; 6000</td>
                        <td>
                          <span className="bg-danger px-2 text-light rounded-pill fw-bold">
                            Not Paid
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Pc-72908</th>
                        <td>52 September, 2021</td>
                        <td>Lionel messi</td>
                        <td>&#8358; 16000</td>
                        <td>
                          <span className="bg-danger px-2 text-light rounded-pill fw-bold">
                            Not Paid
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
    
    </>
  );
};

export default Userdashboard;
