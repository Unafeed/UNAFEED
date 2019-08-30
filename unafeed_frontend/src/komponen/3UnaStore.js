import React, {Component} from 'react'
import axios from 'axios'
import Footer from './1Home/eFooter'

class UnaStore extends Component{

    constructor(){
        super()
        this.state = {
            produk: []
        }
    }

    componentWillMount(){
        var url = 'http://localhost:1234/product'
        axios.get(url)
        .then((x)=>{
            console.log(x.data)
            this.setState({
                produk: x.data
            })
        })
        .catch((x)=>{
            console.log(x)
        })
    }

    render(){

        var produkList = this.state.produk.map((val, i)=>{
            return (
                <div key={i} className="col-lg-3 col-sm-6">
                    <div className="box20">
                        <img src={val.pfoto} alt="" className="img-fluid" />
                        <div className="box-content">
                            <h3 className="title">
                                {val.pnama}
                            </h3>
                            <span className="post">
                                {val.pharga}
                            </span>
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
            )
        }) 

        return(
            <div>
                <div style={{paddingTop: '50px'}}></div>
                <section className="py-5 team-w3ls" id="best">
                    
                    <div className="container">
                        <h3 className="title-w3 pt-sm-5 text-wh font-weight-bold">
                            UnaStore
                        </h3>
                        <div className="d-flex team-w3ls-row pt-xl-5 pt-md-3">
                            
                            {produkList}

                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default UnaStore