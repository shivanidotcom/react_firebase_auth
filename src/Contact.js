import React,{useState} from 'react';

const Contact = () => {
    const [userData,setUserData]=useState({
        email:"",
        password:"",
    });
    let name,value;
    const postUserData=(event)=>{
        name=event.target.name;
        value=event.target.value;
        setUserData({...userData,[name]:value});
    };
    //connect with firebase
    const submitData=async(event)=>{
        event.preventDefault();
        const{
            email,
            password,
        }=userData;
        if(email &&
            password){

            
        const res=fetch("https://reactfirebase-project-default-rtdb.firebaseio.com/userDataRecords.json",
        {  method:"POST",
          headers:{
              "Content-Type":"application/json",
          },
          body:JSON.stringify({
            email,
            password,
          })
        }
        );
        if(res){
            setUserData({
                email:"",
            password:"",
            })
            alert("Data Stored");
        }else{
            alert("plz fill the data");
        }
    }else{
        alert("plz fill the data");

    }

    };
    return (
        <div>
           <div className="container mt-5 mb-5" id="servicecontainer">
                <div className="row row-cols-2">
                    <div className="col col-service left-service" id="colservice">
                    {/** left side of the how to use part */}
                    <h4 id="serviceh4">--Message Us</h4>
                          <h2 id="serviceh2"><strong>Connect With Our</strong> <br/><strong>Sales Team.</strong></h2>
                          <div className="sign-in" id="contact">
                               <p className="mr-5" id="servicepara">
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio officiis tempora recusandae voluptate quam, nisi odio officiis tempora recusandae
     
                              </p>
                              <img className="img-fluid" src="./images/hero2.jpg"/>
                    
                          </div>
                                                  


                    </div>
                    {/** right side of the how to use part */}
                   <div className="col col-service" id="contactform">
                   <form method="POST">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" name="email" value={userData.email} onChange={postUserData} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" name="password" value={userData.password} onChange={postUserData} id="exampleInputPassword1"/>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                      
                        <button class="btn btn-style" id="servicebutton" type="submit" onClick={submitData}>Submit</button>
                         
                   </form>
                    </div>
                   
                </div>
            </div>           
        </div>
    );
};

export default Contact;