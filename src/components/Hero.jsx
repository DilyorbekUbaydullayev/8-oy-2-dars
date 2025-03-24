"use client";
import { Instagram, Send, Twitter, Youtube } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Hero = () => {
 const [show,setShow] = useState(() => {
    return JSON.parse(localStorage.getItem("showStatus")) || false;
  });
  const [firstTime, setFirstTime] = useState(() => {
    return JSON.parse(localStorage.getItem("fistEnterTime")) || null;
  });
 
  

  const checkTime = () => {
    if(show){
      
    }
    let diffence = (Date.now() - firstTime) / (3600 * 24 * 1000);
    if (diffence >= 1) {
      localStorage.removeItem("fistEnterTime");
    }
  };
  const getTime = () => {
    if (!firstTime) {
      let date = Date.now();
      localStorage.setItem("fistEnterTime", JSON.stringify(date));
	  
    }
  };
  const notify = () => {
    toast.success(
      <div>
        <h1 className="text-center">Biz Ijtimoiy tarmoqlarda</h1>
        <div className="flex justify-center gap-4 py-2">
        <div className="flex flex-col gap-2 items-center">
          <span><Instagram/></span>
          <p>Instagramm</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span><Send/></span>
          <p>Telegram</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span><Youtube/></span>
          <p>Youtube</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span><Twitter/></span>
          <p>Twitter</p>
        </div>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      }
    );
    setShow(true)
    const timer = setTimeout(() => localStorage.setItem('showStatus',JSON.stringify(false)), 10000);
    
    return () => clearTimeout(timer);
	
  };

useEffect(()=>{
  if(show){
    setFirstTime(false)
    localStorage.setItem('showStatus',JSON.stringify(true))
  }
},[show])
  useEffect(() => {
    checkTime();
    getTime();
	const timer = setTimeout(() => show||!firstTime?notify():'', show?0:10000);
    return () => clearTimeout(timer);
    
  }, []);
  return (
    <div>
      <ToastContainer toastStyle={{ width: "450px" }} />
    </div>
  );
};

export default Hero;
