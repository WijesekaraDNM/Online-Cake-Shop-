/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Facebook } from "../../icons/Facebook";
import "./style.css";

export const Frame = ({ property1, className }) => {
  return (
    <div className={`frame ${className}`}>
      <div className="frame-wrapper">
        <div className="div-wrapper">
          <div className="text-wrapper">First Name</div>
        </div>
      </div>
      <div className="div">
        <div className="div-wrapper">
          <div className="text-wrapper">Last Name</div>
        </div>
      </div>
      <div className="frame-wrapper-2">
        <div className="div-wrapper">
          <div className="text-wrapper">Password</div>
        </div>
      </div>
      <img className="rectangle" alt="Rectangle" src="/img/rectangle-14.png" />
      <div className="overlap-group">
        <div className="text-wrapper-2">Sign Up with Google</div>
        <img className="google" alt="Google" src="/img/google.png" />
      </div>
      <div className="overlap">
        <div className="text-wrapper-3">Sign up with Facebook</div>
        <Facebook className="facebook-instance" />
      </div>
      <p className="already-have-an">
        <span className="span">Already have an account? </span>
        <span className="text-wrapper-4">Login</span>
      </p>
      <div className="div-wrapper-2">
        <div className="text-wrapper-5">Create Account</div>
      </div>
      <div className="text-wrapper-6">Or</div>
      <div className="text-wrapper-7">Create Account</div>
    </div>
  );
};

Frame.propTypes = {
  property1: PropTypes.oneOf(["default"]),
};
