import React from 'react'
import Form from 'react-bootstrap/Form';
import Slider from "react-slick";


const ResCas = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        color:"black"
    };
    return (
        <>
            <section id='d-1'>
                <div className='row'>
                    <div className='col-lg-3 col-11'>
                        <div className='container' id='cor' style={{marginLeft:"5%",backgroundColor:"white"}}>
                            <div className='container' style={{backgroundColor:"white",padding:"2px"}}>
                            <Slider  {...settings}>
                                <div id='date'>
                                    <div className='card' style={{marginBottom:"2px"}}>
                                        <h6 className='text-center' style={{marginTop:"2px"}}>TUE</h6>
                                        <h6 className='text-center'><b style={{fontWeight:"800",fontSize:"larger"}}>04</b></h6>
                                        <h6 className='text-center'>SEP</h6>
                                    </div>
                                </div>

                                <div id='daa'>
                                    <div className='card'>
                                        <h6 className='text-center' style={{marginTop:"2px"}}>WED</h6>
                                        <h6 className='text-center'><b style={{fontWeight:"800",fontSize:"larger"}}>05</b></h6>
                                        <h6 className='text-center'>SEP</h6>
                                    </div>
                                </div>




                                <div id='da'>
                                    <div className='card'>
                                        <h6 className='text-center' style={{marginTop:"2px"}}>THU</h6>
                                        <h6 className='text-center'><b style={{fontWeight:"800",fontSize:"larger"}}>06</b></h6>
                                        <h6 className='text-center'>SEP</h6>
                                    </div>
                                </div>

                                <div id='da'>
                                    <div className='card'>
                                        <h6 className='text-center' style={{marginTop:"2px"}}>THU</h6>
                                        <h6 className='text-center'><b style={{fontWeight:"800",fontSize:"larger"}}>07</b></h6>
                                        <h6 className='text-center'>SEP</h6>
                                    </div>
                                </div>

                                <div id='da'>
                                    <div className='card'>
                                        <h6 className='text-center' style={{marginTop:"2px"}}>THU</h6>
                                        <h6 className='text-center'><b style={{fontWeight:"800",fontSize:"larger"}}>08</b></h6>
                                        <h6 className='text-center'>SEP</h6>
                                    </div>
                                </div>

                                <div>
                                </div>


                                <div>
                                </div>


                                <div>
                                </div>

                                <div>
                                </div>

                                

                            </Slider>

                            </div>
                            
                            
                        </div>

                    </div>







                    <div className='col-lg-3 col-0'>
                        <div>

                        </div>
                        

                    </div>






                    <div className='col-lg-6 col-10'>
                        <div className='row'> 
                            <div className='col-4'>
                            <button class="btn btn-secondary " type="button" style={{width:"115%",borderColor:"white",padding:"20px",background:"white",borderRadius:"0px"}} >
                             <h6 className='font' style={{color:"rgb(54, 51, 51)"}}>Tamil - 2D</h6>
                            </button>                            

                            </div>

                            <div className='col-4'>
                            <div class="dropdown ">
                                <button class="btn btn-secondary" style={{width:"115%",borderColor:"white",padding:"20px",background:"white",borderRadius:"0px"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <h6 className='font' style={{color:"rgb(54, 51, 51)"}}>Filter Price Range</h6>
                                </button>
                                <ul class="dropdown-menu">
                                
                                    <Form style={{marginLeft:"15px"}}>
                                        {['checkbox'].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <Form.Check // prettier-ignore
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`Rs. 0 - 100`}
                                                />
                                                <Form.Check // prettier-ignore
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`Rs. 101 - 200`}
                                                />
                                                

          
                                            </div>
                                         ))}
                                    </Form>
                                </ul>
                            </div>
                            </div>

                            <div className='col-4'>
                            <div class="dropdown-center" id='dropdown-1' >
                            <button class="btn btn-secondary " type="button" style={{width:"115%",borderColor:"white",padding:"20px",background:"white",borderRadius:"0px"}} data-bs-toggle="dropdown" aria-expanded="false">
                            <h6 className='font' style={{color:"rgb(54, 51, 51)"}}>Filter Show Timing</h6>
                            </button>
                                <ul class="dropdown-menu">
                                <Form style={{marginLeft:"15px"}}>
                                        {['checkbox'].map((type) => (
                                            <div key={`default-${type}`} className="mb-3">
                                                <Form.Check // prettier-ignore
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`Morning`}
                                                />
                                                <Form.Check // prettier-ignore
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`Afternoon`}
                                                />
                                                <Form.Check // prettier-ignore
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`Evening`}
                                                />
                                                <Form.Check // prettier-ignore
                                                    type={type}
                                                    id={`default-${type}`}
                                                    label={`Night`}
                                                />
                                                

          
                                            </div>
                                         ))}
                                    </Form>
                                </ul>
                        </div>  
                            </div>
                        </div>

                            



                        

                    </div>




                </div>
            </section>
        </>
    )
}

export default ResCas