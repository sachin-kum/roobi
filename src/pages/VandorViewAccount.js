
import YourProfile from '../component/YourProfile'
import YourListing from '../component/YourListing'
import AccountManagement from '../component/AccountManagement'
import PrivecyData from '../component/PrivecyData'
import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function VandorViewAccount() {
  const [key, setKey] = useState('YourProfile');
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    
  return (
    <>
    <div>
<div className='account-vandor-top'></div>
<div className='container vandorAccount-Container'>
  <div >
    <div className="listing-nav ">
    <Tabs
      id="controlled-tab-example"
      activeKey={key} 
      onSelect={(k) => setKey(k)}
      className=""
    >
     <Tab eventKey="YourProfile" title="Your Profile "> 
      <YourProfile /> 
      </Tab>
      <Tab eventKey="YourListing" title="Your Listing  ">
       <YourListing /> 
      </Tab>
      <Tab eventKey=" AccountManagement " title=" Account Management ">
        <AccountManagement />
      </Tab>
      <Tab eventKey="  PrivacyData " title="  Privacy & Data "  border='0'  >
        <PrivecyData />
      </Tab>
    </Tabs>
   
    </div>
  </div>
</div>
</div>
    </>
)}

export default VandorViewAccount