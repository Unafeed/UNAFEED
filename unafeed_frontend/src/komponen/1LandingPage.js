import React, {Component} from 'react'

// komponen
import Banner from './1LandingPage/aBanner'
import Layanan from './1LandingPage/bLayanan'
import Founder from './1LandingPage/cFounder'
import Testimoni from './1LandingPage/dTestimoni'
import Footer from './1LandingPage/eFooter'

class LandingPage extends Component {
    render(){
        return(
            <div>

              <Banner/> 
              <Layanan/>
              <Founder/> 
              <Testimoni/>
              <Footer/>
                
            </div>
        )
    }
}

export default LandingPage