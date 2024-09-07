import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      {" "}
      <div className="home">
        <div className="left-home">
          <div className="left-container">
            <div className="left-header">
              <img
                src="https://wwwimage-tve.cbsstatic.com/thumbnails/photos/w419-q80/marquee/1048323/39/35/42/asset_marquee_422c03b9-e11a-438c-8e4c-7dc74739fa44.png"
                alt="home-left-logo"
              />
            </div>
            <div className="left-content">
              <h3>Catch up in the latest episodes</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatem illum sequi porro distinctio numquam delectus
                deleniti eos beatae repellat dolores! Pariatur aliquam nostrum
                ea velit. Alias inventore quas doloribus officia.
              </p>
            </div>
            <div className="left-button">
              <button>WATCH NOW</button>
            </div>
          </div>
        </div>
        <div className="right-home"></div>
      </div>
    </>
  );
};

export default HomePage;
