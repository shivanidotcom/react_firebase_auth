import React from 'react';

const HowtoUse = () => {
    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="row row-cols-2">
                    <div className="col col-about">
                    {/** left side of the how to use part */}
                    <img className="img-fluid" src="./images/hero3.jpg"/>


                    </div>
                    {/** right side of the how to use part */}
                    <div className="col col-about">
                          <h4>--AVAILABLE @ GOOGLE AND IOS APP STORE ONLY</h4>
                          <h2>How to use the App?</h2>
                          <div className="sign-in">
                              <h3><strong>1.</strong> Sign In</h3>
                              <p className="mr-5">
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio officiis tempora recusandae voluptate quam, nisi odio officiis tempora recusandae
     
                              </p>
                          </div>
                          <div className="sign-in">
                              <h3><strong>2.</strong> Add your bank Account</h3>
                              <p className="mr-5">
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio officiis tempora recusandae voluptate quam, nisi odio officiis tempora recusandae
     
                              </p>
                          </div>
                          <div className="sign-in">
                              <h3><strong>3.</strong>Send payment request</h3>
                              <p className="mr-5">
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio officiis tempora recusandae voluptate quam, nisi odio officiis tempora recusandae
     
                              </p>
                          </div>
                          <button class="btn btn-style" type="submit">Learn More</button>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default HowtoUse;