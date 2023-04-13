import React, { useContext, useEffect, useState } from "react";
import { AppC } from "../context/MyContect";
import "../styles/project.scss";
import "../styles/normalize.css";
import "../styles/portfolio-carousel.css";

function Project() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "./plugin/momentum-slider.js";
        script.defer = "defer";
        script.async = true;
        document.head.appendChild(script);
        
        setTimeout(()=>{
            const script1 = document.createElement("script");
            script1.src = "./plugin/portfolio-carousel.js";
            script1.defer = "defer";
            script1.async = true;
            document.head.appendChild(script1);
        },100)
    
    }, []);
//   const {dummy} = useContext(AppC);
//   const body = document.getElementsByTagName("body");
//   const a = document.getElementsByTagName("a");
//   const home = document.getElementsByclassNameName("home");
//   const header = document.getElementsByclassNameName("header");

//   useEffect(()=> {  
//     body[0].style = `background-color: #424242`;
//     a[0].style = `color: black`;
//     home[0].style = `color: white`;
//     header[0].style = `border-bottom: 1px solid #ffffffa4`;
//     return ()=> {
//       body[0].style = `background-color: #f6f6f6`;
//       a[0].style = `color: black`;
//       home[0].style = `color: black`;
//       header[0].style = `border: none`;
//     };
    //eslint-disable-next-line react-hooks/exhaustive-deps
//   },[]);
  return (
    <div className="container">
        
        <div className="sliders-container">
            <ul className="pagination">
                <li className="pagination__item"><a className="pagination__button"></a></li>
                <li className="pagination__item"><a className="pagination__button"></a></li>
                <li className="pagination__item"><a className="pagination__button"></a></li>
                <li className="pagination__item"><a className="pagination__button"></a></li>
            </ul>
        </div>
        
    </div>
  );
}

export default Project;