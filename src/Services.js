import React from 'react';


const Services = () => {
    return (
        <div>
           
           <div className="container mt-5 mb-5" id="servicecontainer">
                <div className="row row-cols-2">
                    <div className="col col-service left-service" id="colservice">
                    {/** left side of the how to use part */}
                    <h4 id="serviceh4">--SUPPORT IN ANY LANGUAGES</h4>
                          <h2 id="serviceh2">World class support is <br/>available 24/7</h2>
                          <div className="sign-in">
                              <h3><strong>1.</strong> Sign In</h3>
                              <p className="mr-5" id="servicepara">
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio officiis tempora recusandae voluptate quam, nisi odio officiis tempora recusandae
     
                              </p>
                          </div>
                          <div className="sign-in">
                              <h3><strong>2.</strong> Add your bank Account</h3>
                              <p className="mr-5" id="servicepara">
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio officiis tempora recusandae voluptate quam, nisi odio officiis tempora recusandae
     
                              </p>
                          </div>
                          <div className="sign-in">
                              <h3><strong>3.</strong>Send payment request</h3>
                              <p className="mr-5" id="servicepara">
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio officiis tempora recusandae voluptate quam, nisi odio officiis tempora recusandae
     
                              </p>
                          </div>
                          <button class="btn btn-style" id="servicebutton" type="submit">Learn More</button>
                                                 


                    </div>
                    {/** right side of the how to use part */}
                   <div className="col col-service">
                        <img className="img-fluid" src="./images/hero2.jpg"/>
                    
                    </div>
                   
                </div>
            </div> 
                     
        </div>
    );
};

export default Services;