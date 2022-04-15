import React from "react";
import google from "../../../images/social/file-google-logo-svg-wikimedia-commons-23.png";
import facebook from "../../../images/social/Facebook-Logo-PNG.png";
import github from "../../../images/social/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElement;

  if (loading || loading1) {
    return <Loading></Loading>
  }

  if (error || error1) {
    errorElement = 
        <p className="text-danger">Error: {error?.message} {error1?.message}</p>
  }

  if (user || user1) {
    navigate("/home");
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
        <button onClick={()=> signInWithGithub()} className="btn btn-white d-block mx-auto">
          <img style={{ width: "80px" }} src={github} alt="" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
