import React from "react";
import allItem from "../Image/1.png";
import "../styles/items.css";
function Item() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <div>
              <img src={allItem} alt="" />
              <p>Lorem2003</p>
            </div>
          </div>
          <div className="col-sm-2">
            <div>
              <img src={allItem} alt="" />
              <p>Lorem2003</p>
            </div>
          </div>
          <div className="col-sm-2">
            <div>
              <img src={allItem} alt="" />
              <p>Lorem2003</p>
            </div>
          </div>
          <div className="col-sm-2">
            <div>
              <img src={allItem} alt="" />
              <p>Lorem2003</p>
            </div>
          </div>
          <div className="col-sm-2">
            <div>
              <img src={allItem} alt="" />
              <p>Lorem2003</p>
            </div>
          </div>

          {/* <div className="itemsIcon  col-sm-2 col-md-7 col-lg-12 col-xl-12 col-xxl-12 ">
                                <div>
                                <img src={allItem} alt="" />
                                <p>Lorem2003</p>
                                
                                </div>
                                <div>
                                <img src={allItem} alt="" />
                                <p>Lorem2003</p>
                                
                                </div>
                                <div>
                                <img src={allItem} alt="" />
                                <p>Lorem2003</p>
                                
                                </div><div>
                                <img src={allItem} alt="" />
                                <p>Lorem2003</p>
                                
                                </div>
                                <div>
                                <img src={allItem} alt="" />
                                <p>Lorem2003</p>
                                
                                </div>

                                
                              

                            </div> */}
        </div>
      </div>
    </div>
  );
}

export default Item;
