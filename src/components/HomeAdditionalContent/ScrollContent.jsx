import React from "react";
import "./ScrollContent.css";

import card1 from "./../data/cards";
import { trendingShows } from "./../data/cards";
import { useNavigate } from "react-router-dom";

const ScrollContent = () => {
  const navigateTo = useNavigate();

  return (
    <div className="scroll-container">
      <div className="scroll-top">
        <h3>Latest Full Episodes</h3>
        <div className="scroll-top-cards">
          {card1?.map((item) => (
            <div
              className="scroll-top-single-card"
              key={item?.id}
              onClick={() => navigateTo(`./${item.id}`)}
            >
              <div className="scroll-top-img">
                <img
                  src="https://thumbnails.cbsig.net/_x/w400/CBS_Production_Entertainment_VMS/2023/01/10/2160153667571/PPCBS_LINGO_110_2765424_1920x1080.jpg"
                  alt="card"
                />
              </div>
              <div className="scroll-top-season">
                <h3>
                  {item.season} <span> {item.date}</span>
                </h3>
              </div>
              <div className="scroll-top-title">
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="scroll-middle">
          <h3>Trending Shows</h3>
          <div className="scroll-top-cards">
            {trendingShows?.map((item) => (
              <div
                className="scroll-top-single-card"
                key={item?.id}
                onClick={() => navigateTo(`./${item.id}`)}
              >
                <div className="scroll-top-img">
                  <img src={item.image} alt="card" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollContent;
