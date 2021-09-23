import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar sticky-top navbar-expand-lg navbar-light bgk-warning px-4 py-2 ">
        <div class="container-fluid">
          <a class="navbar-brand text-dark" href="#">
            garantia
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active text-dark" aria-current="page" href="/Login">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">
                  Developers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="/About">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
