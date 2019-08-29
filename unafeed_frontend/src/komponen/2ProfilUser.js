import React, {Component} from 'react'
import axios from 'axios'
import Footer from './1Home/eFooter'

class ProfilUser extends Component{

    constructor(){
        super()
        this.state = {
            nama: '', email: '', alamat: '', kabkota: '', telp: '',
            foto: 'Foto Anda ...'
        }
    }

    namaInput = (event) => {
        this.setState({nama: event.target.value});
    }
    emailInput = (event) => {
        this.setState({email: event.target.value});
    }
    alamatInput = (event) => {
        this.setState({alamat: event.target.value});
    }
    kabkotaInput = (event) => {
        this.setState({kabkota: event.target.value});
    }
    telpInput = (event) => {
        this.setState({telp: event.target.value});
    }
    pilihFoto = (e) => {
        console.log(e.target.files[0])
        this.setState({
            foto: e.target.files[0].name
        })
    }

    render(){
        return(
            <div>
                <div style={{paddingTop: '50px'}}></div>
                <section className="py-5 team-w3ls" id="best">
                    <div className="container">
                        <h3 className="title-w3 pt-sm-5 text-wh font-weight-bold">
                            Profil Saya
                        </h3>
                        <div className="d-flex team-w3ls-row pt-xl-5 pt-md-3">
                            
                            <div className="col-lg-3 col-sm-4">

                                {/* foto profil */}
                                <div className="box20 mb-2">
                                    <img src={this.props.user.ufoto} alt="" className="img-fluid" />
                                    <div className="box-content">
                                        <h3 className="title">
                                            Upload
                                        </h3>
                                        <span className="post mb-2">
                                            foto profil
                                        </span>
                                        <h2 className="title">
                                            <i class="fas fa-hand-point-down"></i>
                                        </h2>
                                    </div>
                                </div>

                                {/* tombol upload */}
                                {/* https://medium.com/@mahesh_joshi/reactjs-nodejs-upload-image-how-to-upload-image-using-reactjs-and-nodejs-multer-918dc66d304c */}
                                <div>
                                    <label for="files" className="btn btn-info">
                                        Unggah foto&nbsp;&nbsp;<i class="fas fa-camera"></i>
                                    </label>
                                    &nbsp;&nbsp;{this.state.foto}
                                    <input id="files" style={{visibility:'hidden'}} type="file" name='filename'
                                    onChange={this.pilihFoto}/>
                                </div>
                            </div>

                            <div className="col-lg-9 col-sm-8">
                                
                                {/* input nama */}
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                        <i className="fas fa-user"></i>
                                        </span>
                                    </div>
                                    <input value={this.props.user.unama} onChange={this.namaInput}  
                                    type="text" className="form-control" placeholder={this.props.user.unama} 
                                    aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>

                                {/* input email */}
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                        <i className="fas fa-envelope"></i>
                                        </span>
                                    </div>
                                    <input value={this.props.user.uemail} onChange={this.emailInput}  
                                    type="text" className="form-control" placeholder={this.props.user.uemail} 
                                    aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>

                                {/* input alamat */}
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                        <i class="fas fa-map-marker-alt"></i>
                                        </span>
                                    </div>
                                    <input value={this.props.user.ualamat} onChange={this.alamatInput}  
                                    type="text" className="form-control" placeholder={this.props.user.ualamat ? this.props.user.ualamat : 'Ketik alamat Anda ...'} 
                                    aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>

                                {/* input kabkota */}
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                        <i class="fas fa-city"></i>
                                        </span>
                                    </div>
                                    <input value={this.props.user.ukabkota} onChange={this.kabkotaInput}  
                                    type="text" className="form-control" placeholder={this.props.user.ukabkota ? this.props.user.ukabkota : 'Ketik Kota/Kabupaten Anda ...'} 
                                    aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>

                                {/* input telp */}
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                        <i className="fas fa-envelope"></i>
                                        </span>
                                    </div>
                                    <input value={this.props.user.utelp} onChange={this.telpInput}  
                                    type="text" className="form-control" placeholder={this.props.user.utelp ? this.props.user.utelp : 'Ketik no. telephone Anda ...'} 
                                    aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                                
                                <div className='mb-5'>
                                    <p>Terdaftar: <i>{this.props.user.utglreg}</i>
                                    &nbsp;&nbsp;-
                                    Terakhir diupdate: <i>{this.props.user.utglupdate}</i></p>
                                </div>

                                <button className='btn btn-danger'>
                                    Batal
                                    <i className="ml-2 fas fa-window-close"></i>
                                </button>
                                &nbsp;&nbsp;
                                <button className='btn btn-success'>
                                    Simpan
                                    <i className="ml-2 fas fa-save"></i>
                                </button>
                                  
                            </div>  
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}

export default ProfilUser