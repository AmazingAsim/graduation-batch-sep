import React from 'react'

export default function Contact() {
  return (
    <div>
      <section id="contact" className='w-50 mx-auto mt-5 bg-primary-subtle p-3'>
        <h2>Contact us</h2>
        <input type="text" className="form-control my-2 " placeholder='Enter your name' />
        <input type="text" className="form-control my-2 " placeholder='Enter your email' />
        <input type="text" className="form-control my-2 " placeholder='Enter your query' />

        <button className='btn btn-primary mt-3'
         onClick={() => {alert("Your query has been submitted,we will contact you soon")}}>Submit</button>
      </section>
    </div>
  )
}
