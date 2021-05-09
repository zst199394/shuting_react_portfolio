import React from "react";

function Contact(){
  return(
    <main className="container my-5" id="contact">
    <section className="card">
      <div className="card-body">
        <h1 className="card-title text-primary">Contact</h1>
    
    <form>
      <label for="textInput">Name</label>
        <input type="text" className="form-control mb-2" placeholder="Enter name"/>
   
      <label for="textInput">Phone Number</label>
        <input type="text" className="form-control mb-2" placeholder="Enter phone"/>
    
        <label for="textInput">E-mail</label>
        <input type="text" className="form-control mb-2" placeholder="Enter E-mail"/>
      
      <label for="textInput">Message</label>
      <input type="text" className="form-control mb-2" placeholder="Enter Message"/>
    </form> 
      <button  className="btn btn-primary">
          <a className="text-white" href= "mailto:zst9394@outlook.com ">Submit</a>
      </button>
      </div> 
      
    </section>
   </main> 
 )
}

export default Contact;