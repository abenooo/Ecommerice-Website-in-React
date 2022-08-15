import React from "react";
import logo from "../../components/assets/images/logo.svg";
const Search = () => {
 
    window.addEventListener("scroll", function(){
      const search = this.document.querySelector(".search")
      search.classList.toggle("active", this.window.scrollY > 100)
    })
  
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <img src={logo} alt="" />
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter..." />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
            <i className="fa fa-user icon-circle"></i> 
            <div className="cart">
              <a href="/cart">
                <i className="fa fa-shopping-bag icon-circle"> </i>
                <span>0</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
