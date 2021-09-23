import { DataGrid } from "@material-ui/data-grid";
import React from "react";

const InvoicesPage = () => {
  const columns = [
    { field: "id", headerName: "id", width: 150 },
    { field: "invoice", headerName: "invoice", width: 150 },
    { field: "customers", headerName: "customers", width: 300 },
    { field: "amount", headerName: "amount", width: 250 },
    { field: "date", headerName: "date ", width: 250 },
    { field: "status", headerName: "status", width: 150 },
  ];
  const rows = [
    {
      id: 1,
      invoice: "830403",
      customers: "Snow Jon",
      amount: "N 25, 000.00",
      date: "03/05/2021",
      status: "paid",
    },
    {
        id: 2,
      invoice: "920023",
      customers: "Lannister Cersei",
      amount: "N 55, 000.00",
      date: "04/02/2021",
      status: "paid",
    },
    {
        id: 3,
      invoice: "202930",
      customers: "Lannister Jaime",
      amount: "N 5, 000.00",
      date: "04/05/2021",
      status: "pending",
    },
    {
        id: 4,
      invoice: "903292",
      customers: "Stark Arya",
      amount: "N 7, 000.00",
      date: "16/06/2021",
      status: "paid",
    },
    {
        id: 5,
      invoice: "020932",
      customers: "Targaryen Daenerys",
      amount: "N 150, 000.00",
      date: "25/08/2020",
      status: "not-paid",
    },
    {
        id: 6,
      invoice: "894874",
      customers: "Melisandre",
      amount: "N 30, 000.00",
      date: "14/05/2020",
      status: "paid",
    },
    {
        id: 7,
      invoice: "129938",
      customers: "Clifford Ferrara",
      amount: "N 2, 000.00",
      date: "03/03/2019",
      status: "paid",
    },
    {
        id: 8,
      invoice: "748348",
      customers: "Frances Rossini",
      amount: "N 27, 000.00",
      date: "17/09/2019",
      status: "paid",
    },
    {
        id: 9,
      invoice: "930483",
      customers: "Roxie Harvey",
      amount: "N 25, 000.00",
      date: "05/10/2018",
      status: "paid",
    },
  ];
  return (
    <>
      <section  style={{padding: 50}}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 mb-2">
              <h4 style={{fontSize: 40}} className="fw-bolder">Invoices</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-title">
                  <h4 className="sixteen fw-bold p-3">History</h4>
                </div>
                <div className="card-body">
                  <div style={{ height: 400 }}>
                    <DataGrid columns={columns} rows={rows} pageSize={5} className="sixteen"/>
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

export default InvoicesPage;
