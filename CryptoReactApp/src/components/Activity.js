import React from "react";
import { connect } from "react-redux";

import { fetchActivity } from "../actions";

const formatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Activity = (props) => {
  console.log(props);
  return (
    <div className="main">
      <h1 className="m-title">Stock Market Tracker</h1>
      <p>Major index tracking with real-time prices, volumes, and more. </p>
      <span className="btn bouncy" id="button" onClick={props.fetchActivity}>
        Check Current Prices
      </span>
      <div className="m-container">
        <table id="table">
          <thead>
            <tr className="hdr">
              <td>Name</td>
              <td colSpan="2">Price</td>
            </tr>
          </thead>
          {props.activity.activity.map((index) => (
            <tbody key={index.id}>
              <tr>
                <td>
                  {/* <img
                    alt="thumbnail"
                    src={index.symbol}
                    className="posterImage"
                  /> */}
                  <div className="text">
                    {index.name} | {index.symbol}
                  </div>
                </td>
                <td>
                  <div className="price">${formatter.format(index.price)}</div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activity: state,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchActivity })(Activity);
