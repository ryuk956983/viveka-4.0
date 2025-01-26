import React, { useState } from "react";


const Gallery = () => {

    const [galleryState, setgalleryState] = useState(0);

    setTimeout(() => {
        if(galleryState==18){
            setgalleryState(0);
        }
        else{
            setgalleryState(galleryState+1);
        }
        
    }, 3000);

  let GalleryImg = [
    "../src/images/gallery/1.869a809e67436d8507f2.jpg",
    "../src/images/gallery/2.cc7c75aada957787230a.jpg",
    "../src/images/gallery/3.2aa9126e8d3b706dc856.jpg",
    "../src/images/gallery/4.0431a5cff6cfc886115c.jpg",
    "../src/images/gallery/5.baa313ca54655db128e4.jpg",
    "../src/images/gallery/7.51fb4539beef97816de6.jpg",
    "../src/images/gallery/8.d6548e05b0bc29a6d643.jpg",
    "../src/images/gallery/9.703011b21c5e304c5170.jpg",
    "../src/images/gallery/10.6373a1110d9a3c7832d0.jpg",
    "../src/images/gallery/11.bcb5604c739fb6909ee5.jpg",
    "../src/images/gallery/12.f1f6921c43ac1e2f25a8.jpg",
    "../src/images/gallery/14.9d0044bdebfa8e8ab508.jpg",
    "../src/images/gallery/15.0e768f287ce41f36b34c.jpg",
    "../src/images/gallery/16.f1f6921c43ac1e2f25a8.jpg",
    "../src/images/gallery/17.b75a597aad2dd147ee75.jpg",
    "../src/images/gallery/18.5c18d7424cea909a102c.jpg",
    "../src/images/gallery/19.19761fc5916f4d0e0c3f.jpg",
    "../src/images/gallery/20.0d01021ff80ef5ea4da5.jpg",
    "../src/images/gallery/21.c21bcdee2cbc34194124.jpg"
  ];

  return (
    <main className="flex flex-col items-center bg-viveka-back-light rounded-xl relative max-md:h-fit text-white h-screen max-md:w-screen">
      <h1 className="text-6xl  font-bold my-10 border-r-3 px-4 border-r-viveka-theme">Gallery</h1>

      <div className="h-[60%] max-md:h-auto max-md:w-fit flex justify-center mt-14 p-8">
        <img className="h-full" src={GalleryImg[galleryState]} alt="" />
      </div>

      <div className=" w-full flex justify-between px-38 absolute top-[50%] max-md:hidden">
        <div className="border-l-10 cursor-pointer hover:border-viveka-theme  border-b-10 h-10 w-10 rotate-45" onClick={()=>{galleryState==0?setgalleryState(18):setgalleryState(galleryState-1)}}></div>
        <div className="border-l-10  cursor-pointer hover:border-viveka-theme border-b-10 h-10 w-10 rotate-225" onClick={()=>{galleryState==18?setgalleryState(0):setgalleryState(galleryState+1)}}></div>
      </div>
    </main>
  );
};

export default Gallery;
