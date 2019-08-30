import React, {Component} from 'react'
import axios from 'axios'
import Footer from './1Home/eFooter'

class UnaSense extends Component{

    constructor(){
        super()
        this.state = {
        }
    }

    render(){

        return(
            <div>
                <div style={{paddingTop: '50px'}}></div>
                <section className="py-5 team-w3ls" id="best">
                    <div className="container">
                        <h3 className="title-w3 pt-sm-5 text-wh font-weight-bold">
                            UnaStore
                        </h3>
                        <div className="d-flex team-w3ls-row pt-xl-5 pt-md-3">
                            
                            <div className="col-lg-3 col-sm-6">
                                <div className="box20">
                                    <img src="img/fraka.png" alt="" className="img-fluid" />
                                    <div className="box-content">
                                        <h3 className="title">Raka</h3>
                                        <span className="post">CFO</span>
                                    </div>
                                </div>
                                <div className="text-right social-icons-section">
                                    <a className="fac" href="#">
                                        <i className="fab fa-facebook-square"></i>
                                    </a>
                                    <a className="twitter" href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="twitter" href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a className="twitter" href="#">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 my-sm-0 my-4">
                                <div className="box20 active">
                                    <img src="img/fjati.jpg" alt="" className="img-fluid" />
                                    <div className="box-content active">
                                        <h3 className="title">Jati</h3>
                                        <span className="post">COO</span>
                                    </div>
                                </div>
                                <div className="text-right social-icons-section">
                                    <a className="fac" href="#">
                                        <i className="fab fa-facebook-square"></i>
                                    </a>
                                    <a className="twitter" href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="twitter" href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a className="twitter" href="#">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mt-lg-0 mt-sm-4 mx-auto">
                                <div className="box20">
                                    <img src="img/flintang.jpg" alt="" className="img-fluid" />
                                    <div className="box-content">
                                        <h3 className="title">Lintang</h3>
                                        <span className="post">CTO</span>
                                    </div>
                                </div>
                                <div className="text-right social-icons-section">
                                    <a className="fac" href="#">
                                        <i className="fab fa-facebook-square"></i>
                                    </a>
                                    <a className="twitter" href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="twitter" href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a className="twitter" href="#">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 my-sm-0 my-4">
                                <div className="box20 active">
                                    <img src="img/fapiz.png" alt="" className="img-fluid" />
                                    <div className="box-content active">
                                        <h3 className="title">Apiz</h3>
                                        <span className="post">CEO-CMO</span>
                                    </div>
                                </div>
                                <div className="text-right social-icons-section">
                                    <a className="fac" href="#">
                                        <i className="fab fa-facebook-square"></i>
                                    </a>
                                    <a className="twitter" href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a className="twitter" href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a className="twitter" href="#">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default UnaSense