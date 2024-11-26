import React from 'react'

export default function About() {
  return (
    <div>
      <section id="about" className='p-5 text-center bg-primary text-white'>
        <h2>About us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae neque,
           laudantium dolor incidunt praesentium commodi hic veniam omnis voluptas
           quia quisquam aspernatur accusamus eos magni libero debitis aperiam, a est.
        </p>
      </section>
      <section>
         <div className="container mt-5">
           <div className="row">
             <div className="col-sm-4">
                <div className="card">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUrM04F5QtompW0Vc3ovS1H5MGpHc7FMMvDA&s" alt="" className='card-img-top' />
                   <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                   </div>
                </div>
             </div>
             <div className="col-sm-4">
                <div className="card">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUrM04F5QtompW0Vc3ovS1H5MGpHc7FMMvDA&s" alt="" className='card-img-top' />
                   <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                   </div>
                </div>
             </div>
             <div className="col-sm-4">
                <div className="card">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUrM04F5QtompW0Vc3ovS1H5MGpHc7FMMvDA&s" alt="" className='card-img-top' />
                   <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                   </div>
                </div>
             </div>
           </div>
         </div>
      </section>
    </div>
  )
}
