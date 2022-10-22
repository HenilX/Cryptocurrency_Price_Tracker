import React from "react";
import { Link } from "react-router-dom";

export default function navi() {
  return (
    <div className="new">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="/iconic.png" alt="" width="50" class="Mar" />
          Market
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link " aria-current="page" to="/home">
                Crypto
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/market">
                Market
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/textform">
                Textform
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}
