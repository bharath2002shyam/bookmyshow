import React from 'react'

const Tinnerone = () => {
  return (
    <>
    <section>
        <div>
            <div className='tinner' style={{backgroundColor:"purple"}}>
                <h1 className='tinner-h1' style={{color:"white",marginLeft:"20px"}}>Jailer- Tamil</h1>
                <div className='tinner-list'>
                    <ul>
                        <div className='row'>
                            <div className='col-8'>
                                <div className='row'>
                                    <div className='col-4'>
                                    <li className='btn' style={{fontSize:"10px",borderRadius:"15px",borderColor:"rgba(236, 230, 230, 0.897)"}}><span style={{color:"rgba(236, 230, 230, 0.897)",fontWeight:"bold"}}>Action</span></li>
                                    </div>

                                    <div className='col-4'>
                                    <li className='btn' style={{fontSize:"10px",borderRadius:"15px",borderColor:"rgba(236, 230, 230, 0.897)",marginLeft:"8px"}}><span style={{color:"rgba(236, 230, 230, 0.897)",fontWeight:"bold"}}>Drama</span></li>
                                    </div>

                                    <div className='col-4'>
                                    <li className='btn' style={{fontSize:"10px",borderRadius:"15px",borderColor:"rgba(236, 230, 230, 0.897)",marginLeft:"14px"}}><span style={{color:"rgba(236, 230, 230, 0.897)",fontWeight:"bold"}}>Thirler</span></li>
                                    </div>
                                    
                                </div>
                            </div>  
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Tinnerone