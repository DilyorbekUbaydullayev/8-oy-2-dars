"use client";
import { Instagram, Send, Twitter, Youtube } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const firstEnterTime = JSON.parse(localStorage.getItem("firstEnterTime"));
    const lastModalStatus = JSON.parse(localStorage.getItem("showStatus"));
    const today = new Date().toDateString();

   
    const lastShownDate = localStorage.getItem("lastShownDate");
    if (lastShownDate === today) return;

    if (!firstEnterTime) {
    
      localStorage.setItem("firstEnterTime", JSON.stringify(Date.now()));
      setTimeout(() => setShow(true), 10000); 
    } else {
      let elapsedSeconds = (Date.now() - firstEnterTime) / 1000;

      if (lastModalStatus) {
       
        setShow(true);
      } else if (elapsedSeconds >= 10) {
       
        setTimeout(() => setShow(true), 0);
      } else {
        
        setTimeout(() => setShow(true), (10 - elapsedSeconds) * 1000);
      }
    }
  }, []);

  useEffect(() => {
    if (show) {
      localStorage.setItem("showStatus", JSON.stringify(true));

      toast.success(
        <div>
          <h1 className="text-center">Biz Ijtimoiy tarmoqlarda</h1>
          <div className="flex justify-center gap-4 py-2">
            <div className="flex flex-col gap-2 items-center">
              <span><Instagram /></span>
              <p>Instagram</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span><Send /></span>
              <p>Telegram</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span><Youtube /></span>
              <p>Youtube</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span><Twitter /></span>
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
          onClose: () => {
            localStorage.setItem("showStatus", JSON.stringify(false));
            localStorage.setItem("lastShownDate", new Date().toDateString());
          }
        }
      );

      setTimeout(() => {
        setShow(false);
      }, 10000);
    }
  }, [show]);

  return <ToastContainer toastStyle={{ width: "450px" }} />;
};

export default Hero;
