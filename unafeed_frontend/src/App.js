import React, {Component} from 'react';

// komponen
import LandingPage from './komponen/1LandingPage'

class App extends Component {
  render(){
    return (
      <div>
        
        <header>
          <div className="container-fluid">
            <div className="header d-md-flex justify-content-between align-items-center py-sm-4 py-3 px-xl-5 px-lg-3 px-2">
              <div id="logo">
                <h1><a className="" href="index.html">
                  <img src='img/logo.png' width='160px'/>
                </a></h1>
              </div>
              <div className="nav_w3ls">
                <nav>
                  <label for="drop" className="toggle toogle-2">Menu</label>
                  <input type="checkbox" id="drop" />
                  <ul className="menu">
                    <li className="active"><a href="index.html">Beranda</a></li>
                    <li className="mx-lg-4 mx-md-3 my-md-0 my-2"><a href="about.html">
                      Tentang
                    </a></li>
                    <li><a href="gallery.html">
                      Galeri
                    </a></li>
                    <li className="mx-lg-4 mx-md-3 my-md-0 my-2">
                      <label for="drop-2" className="toggle">
                        Dropdown
                        <span className="fa fa-angle-down" aria-hidden="true"></span>
                      </label>
                      <a href="#">Dropdown <span className="fa fa-angle-down" aria-hidden="true"></span></a>
                      <input type="checkbox" id="drop-2" />
                      <ul>
                        <li><a href="#best" className="drop-text">Healthy Food</a></li>
                        <li><a href="about.html" className="drop-text">Farmers</a></li>
                        <li><a href="#testi" className="drop-text">Testimonials</a></li>
                        <li><a href="#newsletter" className="drop-text">Newsletter</a></li>
                      </ul>
                    </li>
                    <li><a href="contact.html">
                      Hubungi Kami
                    </a></li>
                    <li className="mx-lg-4 mx-md-3 my-md-0 my-2">
                      <label for="drop-2" className="toggle">
                        Login
                        <span className="fa fa-angle-down" aria-hidden="true"></span>
                      </label>
                      <a href="#">Login <span className="fa fa-angle-down" aria-hidden="true"></span></a>
                      <input type="checkbox" id="drop-2" />
                      <ul>
                        <li>
                          <a data-toggle="modal" data-target="#modalLogin" href="#best" className="drop-text">
                          <i className="fas fa-user"></i>
                          &nbsp;
                          Login
                          </a>
                        </li>
                        <li>
                          <a data-toggle="modal" data-target="#modalSignup" href="about.html" className="drop-text">
                          <i className="fas fa-clipboard-check"></i>
                          &nbsp;
                          Signup
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <LandingPage/>

        {/* modal login */}
        <div class="mt-5 modal fade" id="modalLogin" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title font-weight-bold" id="exampleModalLabel">
                  User Login
                  <i class="mx-2 fas fa-user"></i>
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                
                {/* input email */}
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control" placeholder="Email Anda ..." aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                {/* input password */}
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fas fa-unlock"></i>
                    </span>
                  </div>
                  <input type="password" class="form-control" placeholder="Password Anda ..." aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">
                  Batal
                  <i class="ml-2 fas fa-window-close"></i>
                </button>
                <button type="button" class="btn btn-info">
                  Login
                  <i class="ml-2 fas fa-user"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* modal signup */}
        <div class="mt-5 modal fade" id="modalSignup" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title font-weight-bold" id="exampleModalLabel">
                  User Signup
                  <i class="mx-2 fas fa-clipboard-check"></i>
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">

                {/* input nama */}
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control" placeholder="Nama Anda ..." aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                {/* input email */}
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control" placeholder="Email Anda ..." aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                
                {/* input password */}
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                      <i class="fas fa-unlock"></i>
                    </span>
                  </div>
                  <input type="password" class="form-control" placeholder="Password Anda ..." aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">
                  Batal
                  <i class="ml-2 fas fa-window-close"></i>
                </button>
                <button type="button" class="btn btn-info">
                  Signup
                  <i class="ml-2 fas fa-clipboard-check"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
