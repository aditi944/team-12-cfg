import React from 'react'

function ContactUs() {
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h3>Contact Us</h3>
            </div>
            <div className="com-md-8 my-auto">
              <h6 className="float-end">Home / Contact Us</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="conatiner">
          <div className="card shadow">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                   <h6>Contact Form</h6>
                   <hr />
                   <div className="form-group">
                     <label className="mb-1">Full Name</label>
                     <input type="text" className="form-control" placeholder="Enter Full Name" />
                   </div>
                   <div className="form-group">
                     <label className="mb-1">Phone Number</label>
                     <input type="text" className="form-control" placeholder="Enter Full Name" />
                   </div>
                   <div className="form-group">
                     <label className="mb-1">Email Address</label>
                     <input type="text" className="form-control" placeholder="Enter Full Name" />
                   </div>
                   <div className="form-group">
                     <label className="mb-1">Message</label>
                     <textarea rows="3" className="form-control" placeholder="Type Your Message"></textarea>
                   </div>
                   <div className="form-group py-3">
                     <button type="button" className="btn btn-primary shadow w-100" >Send Message</textarea>
                   </div>
                </div>
                <div className="col-md-6" >
                  <h4 className="main-heading">Address Information</h4>
                  <div className="underline"></div>
                  <p>
                     #ABC, Banglore Karnatka - 51xxxx, INDIA
                  </p>
                  <p>
                     Phone: +91 94xxxxxxxx
                  </p>
                  <p>
                     Email: abcd@gmail.com
                  </p>
                </div>
              </div>
           
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs