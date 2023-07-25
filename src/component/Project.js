import React, { useEffect } from "react";
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
    setTimeout(() => {
      const script1 = document.createElement("script");
      script1.src = "./plugin/portfolio-carousel.js";
      script1.defer = "defer";
      script1.async = true;
      document.head.appendChild(script1);
    }, 100);
  }, []);
  return (
    <div className="container">
      <div className="sliders-container">
        <div className="project-h2">
          <h2>CONTENT</h2>
          <h2>CREATION:</h2>
          <h2>PROJECT </h2>
        </div>
        <ul className="pagination">
          <li className="pagination__item">
            <a className="pagination__button"></a>
          </li>
          <li className="pagination__item">
            <a className="pagination__button"></a>
          </li>
          <li className="pagination__item">
            <a className="pagination__button"></a>
          </li>
          <li className="pagination__item">
            <a className="pagination__button"></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
