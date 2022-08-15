import React from "react";

function Head() {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label htmlFor="">+251 910 979060</label>
            <i className="fa fa-envelope"></i>
            <label htmlFor="">abenezerkifle@gmai.com</label>
          </div>

          <div className="right row RText">
            <label>Theme FAQ's</label>
            <label>Need Helps</label>
            <span>🏳️</span>
            <label htmlFor="">EN</label>
            <span>🏳️</span>
            <label htmlFor="">USA</label>
            <span>🏳️</span>
            <label htmlFor="">ETH</label>
          </div>
        </div>
      </section>
    </>
  );
}

export default Head;
