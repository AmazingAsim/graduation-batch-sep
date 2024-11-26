import React from 'react'
import { useState } from 'react'
export default function Home() {
  const [imgsrc,setImgsrc] = useState('https://storage.googleapis.com/jpn-new-wp/uploads/2021/08/f4526278-image_tokyo.jpg');

  function  changeSlide(e) {
    setImgsrc(e.target.src);
  }
  return (
    <div>
      <header className='text-center p-5 bg-primary text-white'>
         <h1>Welcome to Asim's Tours and Travels company</h1>
         <p>travel the world with eaze</p>
      </header>
      <h2 className='text-center p-2 bg-dark text-white'>Japan</h2>
      <img src={imgsrc} alt="" id='slide' />

      <div className="flexbox">
         <img onClick={changeSlide}  src="https://www.celebritycruises.com/blog/content/uploads/2021/03/what-is-japan-known-for-mt-fuji-hero-1920x890.jpg" alt="" />
         <img onClick={changeSlide}  src="https://static-oku.diqit.io/cdn-cgi/image/quality=95,format=webp,width=,height=auto/https://static-oku.diqit.io/uploads/oku/destination-translate-gallery/nikkosummer.jpg" alt="" />
         <img onClick={changeSlide}  src="https://www.celebritycruises.com/blog/content/uploads/2021/03/what-is-japan-known-for-mt-fuji-hero-1920x890.jpg" alt="" />
         <img onClick={changeSlide}  src="https://static-oku.diqit.io/cdn-cgi/image/quality=95,format=webp,width=,height=auto/https://static-oku.diqit.io/uploads/oku/destination-translate-gallery/nikkosummer.jpg" alt="" />
         <img onClick={changeSlide}  src="https://www.celebritycruises.com/blog/content/uploads/2021/03/what-is-japan-known-for-mt-fuji-hero-1920x890.jpg" alt="" />
         <img onClick={changeSlide}  src="https://static-oku.diqit.io/cdn-cgi/image/quality=95,format=webp,width=,height=auto/https://static-oku.diqit.io/uploads/oku/destination-translate-gallery/nikkosummer.jpg" alt="" />
         <img onClick={changeSlide}  src="https://www.celebritycruises.com/blog/content/uploads/2021/03/what-is-japan-known-for-mt-fuji-hero-1920x890.jpg" alt="" />
         <img onClick={changeSlide}  src="https://static-oku.diqit.io/cdn-cgi/image/quality=95,format=webp,width=,height=auto/https://static-oku.diqit.io/uploads/oku/destination-translate-gallery/nikkosummer.jpg" alt="" />
         <img onClick={changeSlide}  src="https://www.celebritycruises.com/blog/content/uploads/2021/03/what-is-japan-known-for-mt-fuji-hero-1920x890.jpg" alt="" />
         <img onClick={changeSlide}  src="https://static-oku.diqit.io/cdn-cgi/image/quality=95,format=webp,width=,height=auto/https://static-oku.diqit.io/uploads/oku/destination-translate-gallery/nikkosummer.jpg" alt="" />
         <img onClick={changeSlide}  src="https://www.celebritycruises.com/blog/content/uploads/2021/03/what-is-japan-known-for-mt-fuji-hero-1920x890.jpg" alt="" />
         <img onClick={changeSlide}  src="https://static-oku.diqit.io/cdn-cgi/image/quality=95,format=webp,width=,height=auto/https://static-oku.diqit.io/uploads/oku/destination-translate-gallery/nikkosummer.jpg" alt="" />
         <img onClick={changeSlide}  src="https://www.celebritycruises.com/blog/content/uploads/2021/03/what-is-japan-known-for-mt-fuji-hero-1920x890.jpg" alt="" />
         <img onClick={changeSlide}  src="https://static-oku.diqit.io/cdn-cgi/image/quality=95,format=webp,width=,height=auto/https://static-oku.diqit.io/uploads/oku/destination-translate-gallery/nikkosummer.jpg" alt="" />
         <img onClick={changeSlide}  src="https://www.celebritycruises.com/blog/content/uploads/2021/03/what-is-japan-known-for-mt-fuji-hero-1920x890.jpg" alt="" />
         <img onClick={changeSlide}  src="https://static-oku.diqit.io/cdn-cgi/image/quality=95,format=webp,width=,height=auto/https://static-oku.diqit.io/uploads/oku/destination-translate-gallery/nikkosummer.jpg" alt="" />
      </div>
    </div>
  )
}
