import React, {Component} from 'react'
import axios from 'axios'
import Footer from './1Home/eFooter'
// npm i react-chartjs-2 chart.js
import {Line} from 'react-chartjs-2';

class UnaSense extends Component{

    constructor(){
        super()
        this.state = {
        }
    }

    render(){

        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40]
              }
            ]
          };

        return(
            <div>
                <div style={{paddingTop: '50px'}}></div>
                <section className="py-5 team-w3ls" id="best">
                    <div className="container">
                        <h3 className="title-w3 pt-sm-5 text-wh font-weight-bold">
                            UnaSense
                        </h3>
                        <p>Pantau kondisi kolam sidat & <b>Una Feeder</b> Anda</p>
                        <div className="d-flex team-w3ls-row pt-xl-5 pt-md-3">
                            
                            <div className='col-sm-6'>
                                <Line data={data} />
                            </div>

                            <div className='col-sm-6'>
                                <Line data={data} />
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