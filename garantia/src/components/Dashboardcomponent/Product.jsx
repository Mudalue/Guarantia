import React from "react";
import Producttab from "../other/Producttab";

const Product = () => {
  return (
    <>
      <section className="productpage">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h4 style={{fontSize: 40}} className="fw-bolder mb-3">Products</h4>
                </div>
            </div>
          <div className="row">
            <div className="col-md-3">
              <Producttab />
            </div>
            <div className="col-md-3">
              <Producttab />
            </div>
            <div className="col-md-3">
              <Producttab />
            </div>
            <div className="col-md-3">
              <Producttab />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3">
              <Producttab />
            </div>
            <div className="col-md-3">
              <Producttab />
            </div>
            <div className="col-md-3">
              <Producttab />
            </div>
            <div className="col-md-3">
              <Producttab />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
