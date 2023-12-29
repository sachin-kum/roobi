import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./DeleteAccount.css";
import { DeleteAccountData } from "./DeleteAccountData";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const DeleteAccount = () => {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

  const[deleteAccount,setDeleteAccount]=useState(true);
  const[confirm,setConfirm]=useState(false);
  const[Completed,setComplete]=useState(false);
 

  const DeleteAccount =()=>{
    setDeleteAccount(false) 
    setConfirm(true)
  }
  const ConfirmDelete=()=>{
    setConfirm(false)
    setComplete(true)
  }
  const BackAccount=()=>{
    setDeleteAccount(true) 
    setConfirm(false)
  }
    
  return (
    <div >
      <div className="container">
       {deleteAccount && <div className="delete-content">
          <h2>Deleting your account - step 1 of 3</h2>

          <h5>What prompted you to delete your account?</h5>
          <form>
          {DeleteAccountData.map(({ id, title ,name,idName}) => {
            return(                
               <div className=" row select-delete-row " key={id}>
                    <div className="select-delete d-flex">
                    <input type='radio' id={idName} name={name} /> 
                    <p>{title}</p>
                    </div>
                </div>          
                )       
          })}

          <div className="account-next-btn pt-3">
            <button type="button" onClick={DeleteAccount}>CONTIUNE</button>
          </div>
          </form>
        </div>}


       {confirm && <div className="deleteAccount-step2 ">
          <div className="delete-content">
            <h2>Confirm you want to delete the account? - step 2 of 3</h2>

            <h5>xxxxxxxxxxx@gmail.com</h5>
            <ul>
              <li className="Delete-list">The profile, saves and listings associated with this account will disappear.</li>
              <li className="Delete-list">You will no longer be able to access the account info.</li>
            </ul>
        <div className="back-next-btn">
        <h4 onClick={BackAccount}>BACK</h4>
         <button type="button" onClick={ConfirmDelete}>DELETE ACCOUNT</button>
        </div>
          </div>
        
        </div>}
     {Completed &&   <div className="deleteAccount-step3">
        <div className="delete-content contact-support">
        <h2>Completed - step 3 of 3</h2>
        <h5>Your account has been closed</h5>
        <p>Your account has been closed.Thank you for planning with Roobi and we wish you success in the future. Your account will be moved into our routine data deletion cycle</p>

        <h5>Changed your mind? </h5>
        <p>We'd love you to stick around, if you'd like to give us another go, please get in touch with our support team to will be happy to help you</p>
<NavLink to='/contact' >
<button>CONTACT SUPPORT</button>
</NavLink>
      
        </div>
        </div>}
      </div>

  
    </div>
  );
};

export default DeleteAccount;
