import React from "react";
import { Link } from 'react-router-dom'
import './AdminHeader.css'
import "bootstrap"


function AdminHeader() {
  return (
    <header className="admin-header">
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container-fluid row">
          <div className="logo col-3">
            <a href="#" className="site-title">Thư viện</a>
          </div>

          <button class="navbar-toggler col-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse col-8 mb-2 mb-lg-0" id="navbarSupportedContent">
            <div className="container-fluid row">
              <ul className="navbar-nav col-6">
                <div className="container-fluid row">
                  <li className="nav-item col-4">
                    <div class="dropdown">
                      <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown">
                        Book
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Books list</a></li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Add new book
                          </a>
                          
                        </li>
                  
                      </ul>
                    </div>
                  </li>
                  
                  <li className="nav-item col-4">

                    <div class="dropdown">
                      <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown">
                        Member
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Members list</a></li>
                        <li><a class="dropdown-item" href="#">Add member</a></li>
                  
                      </ul>
                    </div>
                  </li>
                  
                  <li className="nav-item col-4">
                    <a className="nav-link" href="#">Request</a>
                  </li>
                </div>            
              </ul>

              <div className="search col-5">
                  <form class="d-flex" role="search">
                    <input class="form-control me-1" type="Tìm sách" placeholder="Search" aria-label="Search"></input>
                    <button class="btn" type="submit"><a className="ti-search"></a></button>
                  </form>
                </div>

              <div className="user col-1">
                <a href="#"><i class="fa-solid fa-user"></i></a>
              </div>
            </div>
            
          </div>
        </div>
      </nav>
    </header>
  );
}

export default AdminHeader;