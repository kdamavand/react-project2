import React from "react";

export const HomeView = () => {
  return (
    <div className="main flex-container">
      <div className="flex-item cards">
        <article>
          <img
            className="article-img"
            src="http://placekitten.com/305/206"
            alt=" "
          />
          <button className="btn">Buy</button>
        </article>
        <article>
          <img
            className="article-img"
            src="http://placekitten.com/305/201"
            alt=" "
          />
          <button className="btn">Buy</button>
        </article>
      </div>
    </div>
  );
};
