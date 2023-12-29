
import SearchFilterAll from '../component/SearchFilter/SearchFilterAll';

import ConsumerProfile from "../component/ConsumerProfile";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ConsumerAccount = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);




  return (
    <>
        <SearchFilterAll />
  <ConsumerProfile />

     
    </>
  );
};

export default ConsumerAccount;
