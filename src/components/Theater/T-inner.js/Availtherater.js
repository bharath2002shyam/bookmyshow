
import React from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {BsHeart} from 'react-icons/bs'
import {CiMobile4} from 'react-icons/ci'
import {MdOutlineFastfood} from 'react-icons/md'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {BsCircle} from 'react-icons/bs'





const Availtherater = () => {
  return (
    <>
    <section className='' style={{backgroundColor:"rgb(165, 159, 159)",padding:"0%"}}>
        <div  style={{paddingTop:"10px"}}>
         
        </div>









        <div className='' style={{backgroundColor:"white",width:"98%",marginLeft:"1%"}}>

        <div className='row' style={{paddingTop:"10px"}}>
          <div className='col-lg-7 col-12'>
          </div>

          <div className='col-lg-5'>
            <div className='row'>
              

              <div className='col-4'>
                <h6 style={{fontSize:"10px"}}><BsCircle style={{backgroundColor:"green",borderRadius:"50%",borderColor:"green",fontSize:"8px",marginBottom:"4px"}}/>  AVAILABLE</h6>
              </div>

              <div className='col-4'>
                  <h6 style={{fontSize:"10px"}}><BsCircle style={{backgroundColor:"orange",borderRadius:"50%",borderColor:"orange",fontSize:"8px",marginBottom:"4px"}}/>  FAST FILLING</h6>
              </div>
                  
              <div className='col-4'>
                  <h6 style={{fontSize:"10px"}}>SUBTITILES LANGUAGE</h6>
              </div>
            </div>
          </div>
        </div>
<hr style={{marginTop:"0px"}}></hr>









            <div className='row'>
                <div className='col-lg-8 col-12'>
                    <div className='row' style={{padding:"2%"}}>
                        <div className='col-lg-5 '  >
                        
                            <h6><BsHeart id='heart' style={{color:"pink"}}/>  AGS Cinemas OMR: Navlur</h6>
                            <div className='row'>
                                <div className='col-lg-4 col-12'>
                                    <p id='mticket' style={{fontSize:"14px",color:"green"}}><CiMobile4/>  M-Ticket</p>
                                </div>

                                <div className='col-lg-6 col-12'>
                                    <p id='food' style={{fontSize:"14px",color:"rgb(224, 210, 3)"}}><MdOutlineFastfood/>  Food & Beverage</p>
                                </div>

                            </div>
                        </div>

                        <div className='col-lg-1'>
                            <div>
                            
                            <p id='info' style={{fontSize:"14px",color:"rgb(128, 123, 124)"}}><AiOutlineInfoCircle/>  Info</p>
                            
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='row'>
                                <div className='col-6'>
                                    <div>
                                    {['top'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip style={{backgroundColor:"white"}} id={`tooltip-${placement}`}>
              <div className='row'>
                <div className='col-6'>
                    <p style={{fontSize:"8px"}}>Rs.190.00</p>
                    <p style={{fontSize:"8px"}}>DIAMOND</p>
                </div>

                <div className='col-6'>
                    <p style={{fontSize:"8px"}}>Rs. 60.00</p>
                    <p style={{fontSize:"8px"}}>PEARL</p>
                </div>
              </div>
            </Tooltip>
          }
        >
          <Button className='btn' variant="secondary" style={{backgroundColor:"white",borderColor:"orange"}}><span style={{color:"orange",backgroundColor:"white"}}>10:10 AM</span></Button>
        </OverlayTrigger>
      ))}
                                    </div>
                                    <div style={{marginTop:"8%"}}>
                                        <p style={{fontSize:"14px"}}><BsCircle style={{backgroundColor:"yellow",borderRadius:"50%",borderColor:"yellow",fontSize:"8px",marginBottom:"4px"}}/>  Non-cancelable</p>
                                    </div> 
                                </div>

                                <div className='col-lg-6 col-3'>
                                    <div>
                                    {['top'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip style={{backgroundColor:"white"}} id={`tooltip-${placement}`}>
              <div className='row'>
                <div className='col-6'>
                    <p style={{fontSize:"8px"}}>Rs.190.00</p>
                    <p style={{fontSize:"8px"}}>DIAMOND</p>
                </div>

                <div className='col-6'>
                    <p style={{fontSize:"8px"}}>Rs. 60.00</p>
                    <p style={{fontSize:"8px"}}>PEARL</p>
                </div>
              </div>
            </Tooltip>
          }
        >
          <Button className='btn' variant="secondary" style={{backgroundColor:"white",borderColor:"green"}}><span style={{color:"green",backgroundColor:"white"}}>3:40 PM</span></Button>
        </OverlayTrigger>
      ))}
                                    </div>
                                </div>
                            </div>
                               
                        </div>

                    </div>

                </div>




                <div className='col-lg-4 col-12' >

                </div>
<hr style={{width:"98%",marginLeft:"1%"}}></hr>
            </div>
            
        </div>



































        <div className='' style={{backgroundColor:"white",width:"98%",marginLeft:"1%"}}>
    <div className='row'>
        <div className='col-lg-8 col-12'>
            <div className='row' style={{padding:"2%"}}>
                <div className='col-lg-5 '  >
                
                    <h6><BsHeart id='heart' style={{color:"pink"}}/>  INOX: Chennai City Centre, Dr. RK Salai</h6>
                    <div className='row'>
                        <div className='col-lg-4 col-12'>
                            <p id='mticket' style={{fontSize:"14px",color:"green"}}><CiMobile4/>  M-Ticket</p>
                        </div>

                        <div className='col-lg-6 col-12'>
                            <p id='food' style={{fontSize:"14px",color:"rgb(224, 210, 3)"}}><MdOutlineFastfood/>  Food & Beverage</p>
                        </div>

                    </div>
                </div>

                <div className='col-lg-1'>
                    <div>
                    
                    <p id='info' style={{fontSize:"14px",color:"rgb(128, 123, 124)"}}><AiOutlineInfoCircle/>  Info</p>
                    
                    </div>
                </div>

                <div className='col-lg-4'>
                    <div className='row'>
                        <div className='col-6'>
                            <div>
                            {['top'].map((placement) => (
<OverlayTrigger
  key={placement}
  placement={placement}
  overlay={
    <Tooltip style={{backgroundColor:"white"}} id={`tooltip-${placement}`}>
      <div className='row'>
        <div className='col-6'>
            <p style={{fontSize:"8px"}}>Rs.190.00</p>
            <p style={{fontSize:"8px"}}>DIAMOND</p>
        </div>

        <div className='col-6'>
            <p style={{fontSize:"8px"}}>Rs. 60.00</p>
            <p style={{fontSize:"8px"}}>PEARL</p>
        </div>
      </div>
    </Tooltip>
  }
>
  <Button className='btn' variant="secondary" style={{backgroundColor:"white",borderColor:"green"}}><span style={{color:"green",backgroundColor:"white"}}>1:30 PM</span></Button>
</OverlayTrigger>
))}
                            </div>
                            <div style={{marginTop:"8%"}}>
                                <p style={{fontSize:"14px"}}><BsCircle style={{backgroundColor:"yellow",borderRadius:"50%",borderColor:"yellow",fontSize:"8px",marginBottom:"4px"}}/>  Non-cancelable</p>
                            </div> 
                        </div>

                        <div className='col-lg-6 col-3'>
                            <div>
                            {['top'].map((placement) => (
<OverlayTrigger
  key={placement}
  placement={placement}
  overlay={
    <Tooltip style={{backgroundColor:"white"}} id={`tooltip-${placement}`}>
      <div className='row'>
        <div className='col-6'>
            <p style={{fontSize:"8px"}}>Rs.190.00</p>
            <p style={{fontSize:"8px"}}>DIAMOND</p>
        </div>

        <div className='col-6'>
            <p style={{fontSize:"8px"}}>Rs. 60.00</p>
            <p style={{fontSize:"8px"}}>PEARL</p>
        </div>
      </div>
    </Tooltip>
  }
>
  <Button className='btn' variant="secondary" style={{backgroundColor:"white",borderColor:"orangr"}}><span style={{color:"orange",backgroundColor:"white"}}>5:oo AM</span></Button>
</OverlayTrigger>
))}
                            </div>
                        </div>
                    </div>
                       
                </div>

            </div>

        </div>




        <div className='col-lg-4 col-12' >

        </div>
<hr style={{width:"98%",marginLeft:"1%"}}></hr>
    </div>
    
</div>

































<div className='' style={{backgroundColor:"white",width:"98%",marginLeft:"1%"}}>
    <div className='row'>
        <div className='col-lg-8 col-12'>
            <div className='row' style={{padding:"2%"}}>
                <div className='col-lg-5 '  >
                
                    <h6><BsHeart id='heart' style={{color:"pink"}}/>  Latha Cinemas A/c Atmos 2K 3D: Chengalpattu</h6>
                    <div className='row'>
                        <div className='col-lg-4 col-12'>
                            <p id='mticket' style={{fontSize:"14px",color:"green"}}><CiMobile4/>  M-Ticket</p>
                        </div>

                        <div className='col-lg-6 col-12'>
                            <p id='food' style={{fontSize:"14px",color:"rgb(224, 210, 3)"}}><MdOutlineFastfood/>  Food & Beverage</p>
                        </div>

                    </div>
                </div>

                <div className='col-lg-1'>
                    <div>
                    
                    <p id='info' style={{fontSize:"14px",color:"rgb(128, 123, 124)"}}><AiOutlineInfoCircle/>  Info</p>
                    
                    </div>
                </div>

                <div className='col-lg-4'>
                    <div className='row'>
                        <div className='col-6'>
                            <div>
                            {['top'].map((placement) => (
<OverlayTrigger
  key={placement}
  placement={placement}
  overlay={
    <Tooltip style={{backgroundColor:"white"}} id={`tooltip-${placement}`}>
      <div className='row'>
        <div className='col-6'>
            <p style={{fontSize:"8px"}}>Rs.190.00</p>
            <p style={{fontSize:"8px"}}>DIAMOND</p>
        </div>

        <div className='col-6'>
            <p style={{fontSize:"8px"}}>Rs. 60.00</p>
            <p style={{fontSize:"8px"}}>PEARL</p>
        </div>
      </div>
    </Tooltip>
  }
>
  <Button className='btn' variant="secondary" style={{backgroundColor:"white",borderColor:"green"}}><span style={{color:"green",backgroundColor:"white"}}>4:30 PM</span></Button>
</OverlayTrigger>
))}
                            </div>
                            <div style={{marginTop:"8%"}}>
                                <p style={{fontSize:"14px"}}><BsCircle style={{backgroundColor:"yellow",borderRadius:"50%",borderColor:"yellow",fontSize:"8px",marginBottom:"4px"}}/>  Non-cancelable</p>
                            </div> 
                        </div>

                        <div className='col-lg-6 col-3'>
                            <div>
                            {['top'].map((placement) => (
<OverlayTrigger
  key={placement}
  placement={placement}
  overlay={
    <Tooltip style={{backgroundColor:"white"}} id={`tooltip-${placement}`}>
      <div className='row'>
        <div className='col-6'>
            <p style={{fontSize:"8px"}}>Rs.190.00</p>
            <p style={{fontSize:"8px"}}>DIAMOND</p>
        </div>

        <div className='col-6'>
            <p style={{fontSize:"8px"}}>Rs. 60.00</p>
            <p style={{fontSize:"8px"}}>PEARL</p>
        </div>
      </div>
    </Tooltip>
  }
>
  <Button className='btn' variant="secondary" style={{backgroundColor:"white",borderColor:"orangr"}}><span style={{color:"orange",backgroundColor:"white"}}>4:45 AM</span></Button>
</OverlayTrigger>
))}
                            </div>
                        </div>
                    </div>
                       
                </div>

            </div>

        </div>




        <div className='col-lg-4 col-12' >

        </div>
<hr style={{width:"98%",marginLeft:"1%"}}></hr>
    </div>
    
</div>



























<div className='' style={{backgroundColor:"white",width:"98%",marginLeft:"1%"}}>
    <div className='row'>
        <div className='col-lg-8 col-12'>
            <div className='row' style={{padding:"2%"}}>
                <div className='col-lg-5 '  >
                
                    <h6><BsHeart id='heart' style={{color:"pink"}}/>  PVR: Grand Mall, Ve</h6>
                    <div className='row'>
                        <div className='col-lg-4 col-12'>
                            <p id='mticket' style={{fontSize:"14px",color:"green"}}><CiMobile4/>  M-Ticket</p>
                        </div>

                        <div className='col-lg-6 col-12'>
                            <p id='food' style={{fontSize:"14px",color:"rgb(224, 210, 3)"}}><MdOutlineFastfood/>  Food & Beverage</p>
                        </div>

                    </div>
                </div>

                <div className='col-lg-1'>
                    <div>
                    
                    <p id='info' style={{fontSize:"14px",color:"rgb(128, 123, 124)"}}><AiOutlineInfoCircle/>  Info</p>
                    
                    </div>
                </div>

                <div className='col-lg-4'>
                    <div className='row'>
                        <div className='col-6'>
                            <div>
                            {['top'].map((placement) => (
<OverlayTrigger
  key={placement}
  placement={placement}
  overlay={
    <Tooltip style={{backgroundColor:"white"}} id={`tooltip-${placement}`}>
      <div className='row'>
        <div className='col-6'>
            <p style={{fontSize:"8px"}}>Rs.190.00</p>
            <p style={{fontSize:"8px"}}>DIAMOND</p>
        </div>

        <div className='col-6'>
            <p style={{fontSize:"8px"}}>Rs. 60.00</p>
            <p style={{fontSize:"8px"}}>PEARL</p>
        </div>
      </div>
    </Tooltip>
  }
>
  <Button className='btn' variant="secondary" style={{backgroundColor:"white",borderColor:"green"}}><span style={{color:"green",backgroundColor:"white"}}>1:30 PM</span></Button>
</OverlayTrigger>
))}
                            </div>
                            <div style={{marginTop:"8%"}}>
                                <p style={{fontSize:"14px"}}><BsCircle style={{backgroundColor:"yellow",borderRadius:"50%",borderColor:"yellow",fontSize:"8px",marginBottom:"4px"}}/>  Non-cancelable</p>
                            </div> 
                        </div>

                        <div className='col-lg-6 col-3'>
                            <div>
                            {['top'].map((placement) => (
<OverlayTrigger
  key={placement}
  placement={placement}
  overlay={
    <Tooltip style={{backgroundColor:"white"}} id={`tooltip-${placement}`}>
      <div className='row'>
        <div className='col-6'>
            <p style={{fontSize:"8px"}}>Rs.190.00</p>
            <p style={{fontSize:"8px"}}>DIAMOND</p>
        </div>

        <div className='col-6'>
            <p style={{fontSize:"8px"}}>Rs. 60.00</p>
            <p style={{fontSize:"8px"}}>PEARL</p>
        </div>
      </div>
    </Tooltip>
  }
>
  <Button className='btn' variant="secondary" style={{backgroundColor:"white",borderColor:"orangr"}}><span style={{color:"orange",backgroundColor:"white"}}>5:oo AM</span></Button>
</OverlayTrigger>
))}
                            </div>
                        </div>
                    </div>
                       
                </div>

            </div>

        </div>




        <div className='col-lg-4 col-12' >

        </div>
<hr style={{width:"98%",marginLeft:"1%"}}></hr>
    </div>
    
</div>



























<div className='' style={{backgroundColor:"white",width:"98%",marginLeft:"1%"}}>
    <div className='row'>
        <div className='col-lg-8 col-12'>
            <div className='row' style={{padding:"2%"}}>
                <div className='col-lg-5 '  >
                
                    <h6><BsHeart id='heart' style={{color:"pink"}}/>  AGS Cinemas OMR: Navlur</h6>
                    <div className='row'>
                        <div className='col-lg-4 col-12'>
                            <p id='mticket' style={{fontSize:"14px",color:"green"}}><CiMobile4/>  M-Ticket</p>
                        </div>

                        <div className='col-lg-6 col-12'>
                            <p id='food' style={{fontSize:"14px",color:"rgb(224, 210, 3)"}}><MdOutlineFastfood/>  Food & Beverage</p>
                        </div>

                    </div>
                </div>

                <div className='col-lg-1'>
                    <div>
                    
                    <p id='info' style={{fontSize:"14px",color:"rgb(128, 123, 124)"}}><AiOutlineInfoCircle/>  Info</p>
                    
                    </div>
                </div>

                <div className='col-lg-4'>
                    <div className='row'>
                        <div className='col-6'>
                            <div>
                            {['top'].map((placement) => (
<OverlayTrigger
  key={placement}
  placement={placement}
  overlay={
    <Tooltip style={{backgroundColor:"white"}} id={`tooltip-${placement}`}>
      <div className='row'>
        <div className='col-6'>
            <p style={{fontSize:"8px"}}>Rs.190.00</p>
            <p style={{fontSize:"8px"}}>DIAMOND</p>
        </div>

        <div className='col-6'>
            <p style={{fontSize:"8px"}}>Rs. 60.00</p>
            <p style={{fontSize:"8px"}}>PEARL</p>
        </div>
      </div>
    </Tooltip>
  }
>
  <Button className='btn' variant="secondary" style={{backgroundColor:"white",borderColor:"green"}}><span style={{color:"green",backgroundColor:"white"}}>1:30 PM</span></Button>
</OverlayTrigger>
))}
                            </div>
                            <div style={{marginTop:"8%"}}>
                                <p style={{fontSize:"14px"}}><BsCircle style={{backgroundColor:"yellow",borderRadius:"50%",borderColor:"yellow",fontSize:"8px",marginBottom:"4px"}}/>  Non-cancelable</p>
                            </div> 
                        </div>

                        <div className='col-lg-6 col-3'>
                            <div>
                            {['top'].map((placement) => (
<OverlayTrigger
  key={placement}
  placement={placement}
  overlay={
    <Tooltip style={{backgroundColor:"white"}} id={`tooltip-${placement}`}>
      <div className='row'>
        <div className='col-6'>
            <p style={{fontSize:"8px"}}>Rs.190.00</p>
            <p style={{fontSize:"8px"}}>DIAMOND</p>
        </div>

        <div className='col-6'>
            <p style={{fontSize:"8px"}}>Rs. 60.00</p>
            <p style={{fontSize:"8px"}}>PEARL</p>
        </div>
      </div>
    </Tooltip>
  }
>
  <Button className='btn' variant="secondary" style={{backgroundColor:"white",borderColor:"orangr"}}><span style={{color:"orange",backgroundColor:"white"}}>5:oo AM</span></Button>
</OverlayTrigger>
))}
                            </div>
                        </div>
                    </div>
                       
                </div>

            </div>

        </div>




        <div className='col-lg-4 col-12' >

        </div>
<hr style={{width:"98%",marginLeft:"1%"}}></hr>
    </div>
    
</div>



























<div className='' style={{backgroundColor:"white",width:"98%",marginLeft:"1%"}}>
    <div className='row'>
        <div className='col-lg-8 col-12'>
            <div className='row' style={{padding:"2%"}}>
                <div className='col-lg-5 '  >
                
                    <h6><BsHeart id='heart' style={{color:"pink"}}/>  AGS Cinemas OMR: Navlur</h6>
                    <div className='row'>
                        <div className='col-lg-4 col-12'>
                            <p id='mticket' style={{fontSize:"14px",color:"green"}}><CiMobile4/>  M-Ticket</p>
                        </div>

                        <div className='col-lg-6 col-12'>
                            <p id='food' style={{fontSize:"14px",color:"rgb(224, 210, 3)"}}><MdOutlineFastfood/>  Food & Beverage</p>
                        </div>

                    </div>
                </div>

                <div className='col-lg-1'>
                    <div>
                    
                    <p id='info' style={{fontSize:"14px",color:"rgb(128, 123, 124)"}}><AiOutlineInfoCircle/>  Info</p>
                    
                    </div>
                </div>

                <div className='col-lg-4'>
                    <div className='row'>
                        <div className='col-6'>
                            <div>
                            {['top'].map((placement) => (
<OverlayTrigger
  key={placement}
  placement={placement}
  overlay={
    <Tooltip style={{backgroundColor:"white"}} id={`tooltip-${placement}`}>
      <div className='row'>
        <div className='col-6'>
            <p style={{fontSize:"8px"}}>Rs.190.00</p>
            <p style={{fontSize:"8px"}}>DIAMOND</p>
        </div>

        <div className='col-6'>
            <p style={{fontSize:"8px"}}>Rs. 60.00</p>
            <p style={{fontSize:"8px"}}>PEARL</p>
        </div>
      </div>
    </Tooltip>
  }
>
  <Button className='btn' variant="secondary" style={{backgroundColor:"white",borderColor:"green"}}><span style={{color:"green",backgroundColor:"white"}}>1:30 PM</span></Button>
</OverlayTrigger>
))}
                            </div>
                            <div style={{marginTop:"8%"}}>
                                <p style={{fontSize:"14px"}}><BsCircle style={{backgroundColor:"yellow",borderRadius:"50%",borderColor:"yellow",fontSize:"8px",marginBottom:"4px"}}/>  Non-cancelable</p>
                            </div> 
                        </div>

                        <div className='col-lg-6 col-3'>
                            <div>
                            {['top'].map((placement) => (
<OverlayTrigger
  key={placement}
  placement={placement}
  overlay={
    <Tooltip style={{backgroundColor:"white"}} id={`tooltip-${placement}`}>
      <div className='row'>
        <div className='col-6'>
            <p style={{fontSize:"8px"}}>Rs.190.00</p>
            <p style={{fontSize:"8px"}}>DIAMOND</p>
        </div>

        <div className='col-6'>
            <p style={{fontSize:"8px"}}>Rs. 60.00</p>
            <p style={{fontSize:"8px"}}>PEARL</p>
        </div>
      </div>
    </Tooltip>
  }
>
  <Button className='btn' variant="secondary" style={{backgroundColor:"white",borderColor:"orangr"}}><span style={{color:"orange",backgroundColor:"white"}}>5:oo AM</span></Button>
</OverlayTrigger>
))}
                            </div>
                        </div>
                    </div>
                       
                </div>

            </div>

        </div>




        <div className='col-lg-4 col-12' >

        </div>
<hr style={{width:"98%",marginLeft:"1%"}}></hr>
    </div>
    
</div>



























<div className='' style={{backgroundColor:"white",width:"98%",marginLeft:"1%"}}>
    <div className='row'>
        <div className='col-lg-8 col-12'>
            <div className='row' style={{padding:"2%"}}>
                <div className='col-lg-5 '  >
                
                    <h6><BsHeart id='heart' style={{color:"pink"}}/>  AGS Cinemas OMR: Navlur</h6>
                    <div className='row'>
                        <div className='col-lg-4 col-12'>
                            <p id='mticket' style={{fontSize:"14px",color:"green"}}><CiMobile4/>  M-Ticket</p>
                        </div>

                        <div className='col-lg-6 col-12'>
                            <p id='food' style={{fontSize:"14px",color:"rgb(224, 210, 3)"}}><MdOutlineFastfood/>  Food & Beverage</p>
                        </div>

                    </div>
                </div>

                <div className='col-lg-1'>
                    <div>
                    
                    <p id='info' style={{fontSize:"14px",color:"rgb(128, 123, 124)"}}><AiOutlineInfoCircle/>  Info</p>
                    
                    </div>
                </div>

                <div className='col-lg-4'>
                    <div className='row'>
                        <div className='col-6'>
                            <div>
                            {['top'].map((placement) => (
<OverlayTrigger
  key={placement}
  placement={placement}
  overlay={
    <Tooltip style={{backgroundColor:"white"}} id={`tooltip-${placement}`}>
      <div className='row'>
        <div className='col-6'>
            <p style={{fontSize:"8px"}}>Rs.190.00</p>
            <p style={{fontSize:"8px"}}>DIAMOND</p>
        </div>

        <div className='col-6'>
            <p style={{fontSize:"8px"}}>Rs. 60.00</p>
            <p style={{fontSize:"8px"}}>PEARL</p>
        </div>
      </div>
    </Tooltip>
  }
>
  <Button className='btn' variant="secondary" style={{backgroundColor:"white",borderColor:"green"}}><span style={{color:"green",backgroundColor:"white"}}>1:30 PM</span></Button>
</OverlayTrigger>
))}
                            </div>
                            <div style={{marginTop:"8%"}}>
                                <p style={{fontSize:"14px"}}><BsCircle style={{backgroundColor:"yellow",borderRadius:"50%",borderColor:"yellow",fontSize:"8px",marginBottom:"4px"}}/>  Non-cancelable</p>
                            </div> 
                        </div>

                        <div className='col-lg-6 col-3'>
                            <div>
                            {['top'].map((placement) => (
<OverlayTrigger
  key={placement}
  placement={placement}
  overlay={
    <Tooltip style={{backgroundColor:"white"}} id={`tooltip-${placement}`}>
      <div className='row'>
        <div className='col-6'>
            <p style={{fontSize:"8px"}}>Rs.190.00</p>
            <p style={{fontSize:"8px"}}>DIAMOND</p>
        </div>

        <div className='col-6'>
            <p style={{fontSize:"8px"}}>Rs. 60.00</p>
            <p style={{fontSize:"8px"}}>PEARL</p>
        </div>
      </div>
    </Tooltip>
  }
>
  <Button className='btn' variant="secondary" style={{backgroundColor:"white",borderColor:"orangr"}}><span style={{color:"orange",backgroundColor:"white"}}>5:oo AM</span></Button>
</OverlayTrigger>
))}
                            </div>
                        </div>
                    </div>
                       
                </div>

            </div>

        </div>




        <div className='col-lg-4 col-12' >

        </div>
<hr style={{width:"98%",marginLeft:"1%"}}></hr>
    </div>
    
</div>













































       


        






































       



       
    </section>
    </>
  )
}

export default Availtherater