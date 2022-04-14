import React from "react";
import google from '../../../images/social/file-google-logo-svg-wikimedia-commons-23.png'
import facebook from '../../../images/social/Facebook-Logo-PNG.png'
import github from '../../../images/social/github.png'
import {useSignInWithGoogle} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import {useNavigate} from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;
  if (error) {
    
    errorElement = <div>
      <p className="text-danger">Error: {error.message}</p>
    </div>
    
  }

  if (user) {
    navigate('/home')
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div className="d-flex ">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-white d-block mx-auto "
        >
          <img style={{ width: "80px" }} src={google} alt="" />
        </button>
        <button className="btn btn-white d-block ">
          <img style={{ width: "80px" }} src={facebook} alt="" />
        </button>
        <button className="btn btn-white d-block mx-auto">
          <img style={{ width: "80px" }} src={github} alt="" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
