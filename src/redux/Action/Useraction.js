import axios from "axios";
import { useSelector } from "react-redux";
import {
  USERSINUP_FAILED,
  USERSINUP_REQUEST,
  USERSINUP_RESPONSE,
  USERLOGIN_FAILED,
  USERLOGIN_RESPONSE,
  USERLOGIN_REQUEST,
  vandoracount_FAILED,
  vandoracount_REQUEST,
  vandoracount_RESPONSE,
  CLEAR_ERROR,
  LOADUSERDATA_FAILED,
  LOADUSERDATA_RESPONSE,
  USERUPDATE_REQUEST,
  USERUPDATE_RESPONSE,
  USERUPDATE_FAILED,
  CATEGORY_REQUEST,
  CATEGORY_RESPONSE,
  CATEGORY_FAILED,
  THEMELIST_REQUEST,
  THEMELIST_RESPONSE,
  THEMELIST_FAILED,
} from "../constant/Userconstant";

import { baseApi } from "../../baseApi";

export const user_loginaction = (logindetails) => async (dispatch) => {
  try {
    dispatch({
      type: USERLOGIN_REQUEST,
    });

    const details = {
      headers: {
        "Access-Control-Allow-Origin": baseApi,
        "content-type": "application/json",
      },
      withCredentials: true,
      credentials: "same-origin",
    };
    const data = await axios.post(`${baseApi}/login`, logindetails, details);
    console.log(data.data.success);

    dispatch({
      type: USERLOGIN_RESPONSE,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    if (err.response.data.success == false) {
      console.log("errro");
      alert(err.response.data.msg);
    }
    dispatch({
      type: USERLOGIN_FAILED,
      error: err,
    });
  }
};

export const user_sinupaction = (signUpDetails) => async (dispatch) => {
  console.log(signUpDetails);
  try {
    dispatch({
      type: USERSINUP_REQUEST,
    });
    const details = {
      headers: {
        "Access-Control-Allow-Origin": baseApi,
        "content-type": "multipart/form-data",
        // accept: "multipart/form-data",
      },
      withCredentials: true,
      credentials: "same-origin",
    };
    const data = await axios.post(
      `${baseApi}/registration`,
      signUpDetails,
      details
    );
    console.log(data);
    dispatch({
      type: USERSINUP_RESPONSE,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    // if(err.response.data.success==false){
    //     console.log("errro");
    //     alert(err.response.data.msg)
    // }
    dispatch({
      type: USERSINUP_FAILED,
      error: err,
    });
  }
};

export const vandor_sinupaction = (vandordetails) => async (dispatch) => {
  console.log(vandordetails);
  try {
    dispatch({
      type: vandoracount_REQUEST,
    });
    const details = {
      headers: {
        "Access-Control-Allow-Origin": baseApi,
        "content-type": "multipart/form-data",
      },
      withCredentials: true,
      credentials: "same-origin",
    };
    const data = await axios.post(
      `${baseApi}/store_business`,
      vandordetails,
      details
    );
    dispatch({
      type: vandoracount_RESPONSE,
      payload: data,
    });
  } catch (err) {
    console.log(err);

    dispatch({
      type: vandoracount_FAILED,
      error: err,
    });
  }
};

export const loaduserdata_action = (token) => async (dispatch) => {
  try {
    dispatch({ type: "LOADUSERDATA_REQUEST" });
    const details = {
      headers: { "Access-Control-Allow-Origin": baseApi },
      withCredentials: true,
      credentials: "include",
    };
    const data = await axios.get(
      `${baseApi}/singeluser?token=${token}`,
      details
    );
    console.log(data);
    dispatch({
      type: "LOADUSERDATA_RESPONSE",
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOADUSERDATA_FAILED,
      error: error,
    });
  }
};

// export const userUpdate_action=()=>async(dispatch)=>{
// try{
//     dispatch({
//       type:USERUPDATE_REQUEST
//     })
//     // const data=await axios.put(`${baseApi}/`)
//     dispatch({
//         type:USERUPDATE_RESPONSE,
//         payload:data
//     })
// }
// catch(error){
//     console.log(error);

// }
// }
export const categoryload_action = () => async (dispatch) => {
  console.log("sfsajhjh");
  try {
    dispatch({
      type: CATEGORY_REQUEST,
    });
    const { data } = await axios.get(`${baseApi}/categoresList`);
    // const data = await axios.get(`http://192.168.0.3:2917/categories`);
    console.log(data);

    dispatch({
      type: CATEGORY_RESPONSE,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_FAILED,
    });
    console.log(error);
  }
};

export const themelist_action = () => async (dispatch) => {
  console.log("sfsajhjh");
  try {
    dispatch({
      type: THEMELIST_REQUEST,
    });
    const { data } = await axios.get(`${baseApi}/themelist`);
    console.log(data);

    dispatch({
      type: THEMELIST_RESPONSE,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: THEMELIST_FAILED,
    });
    console.log(error);
  }
};
