import {useState} from "react";
import SelectOption from "../component/SelectOption";

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ConsumerProfile from '../component/ConsumerProfile'
import WeddingGoals from '../component/WeddingGoals'
import ConsumerAccountManagement  from '../component/ConsumerAccountManagement '
import PrivecyData from '../component/PrivecyData'
import SearchFilterAll from "../component/SearchFilter/SearchFilterAll";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ConsumerViewAccount() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
    const [keyConsumer, setKeyConsumer] = useState('WeddingGoals');
  return (
    <>
  <SearchFilterAll />
      <div className=' py-3'>
      <div className="listing-nav">
    <div className="listingConsumer ">
    <Tabs
      id="controlled-tab-example"
      activeKey={keyConsumer} 
      onSelect={(k) => setKeyConsumer(k)}
      className="mb-3"
    >
     <Tab eventKey="ConsumerProfile" title="Your Profile "> 
      <ConsumerProfile /> 
      </Tab>
     
      <Tab eventKey="ConsumerAccountManagement  " title=" Account Management ">
        <ConsumerAccountManagement />
      </Tab>
      <Tab eventKey="WeddingGoals" title="Wedding Goals  ">
       <WeddingGoals /> 
      </Tab>
      <Tab eventKey="  PrivacyData " title="  Privacy & Data ">
        <PrivecyData />
      </Tab>
    </Tabs>
    </div>
  </div>
  </div>

    </>
  )
}

export default ConsumerViewAccount