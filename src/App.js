import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./Assets/css/About.css";
import "./Assets/css/BecomeVandorPage.css";
import "./Assets/css/ConsumerAccount.css";
import "./Assets/css/explore.css";
import "./Assets/css/exploreSearch.css";
import "./Assets/css/FlancoPizaa.css";
import "./Assets/css/index.css";
import "./Assets/css/MediaQ.css";
import "./Assets/css/VabdorListingPage.css";
import "./Assets/css/VandorViewAccount.css";
import "./Assets/css/ConsumerBoard.css";

import Navbar from "./component/Navbar";
import Homepage from "./pages/Homepage";
import Explore from "./pages/Explore";
import ExploreSearch from "./pages/ExploreSearch";
import SearchPage from "./pages/SearchPage";
import BecomeVendorPage from "./pages/BecomeVendorPage";
import VandorListingPage from "./pages/VandorListingPage";
import FlancoPizza from "./pages/FlancoPizza";
import VandorViewAccount from "./pages/VandorViewAccount";
import ConsumerAccount from "./pages/ConsumerAccount ";
import ConsumerViewAccount from "./pages/ConsumerViewAccount";
import SeeAllCategory from "./pages/SeeAllCategory";
import LearnMore from "./pages/LearnMore";
import DeleteAccount from "./pages/DeleteAccount/DeleteAccount";
import GetInspire from "./pages/GetInspired/GetInspire";
import Privacy from "./pages/Privecy/Privacy";
import FAQs from "./pages/FAQs/FAQs";
import Contact from "./pages/Contact/Contact";
import Lookbook from "./pages/GetInspiredLookBook/Lookbook";
import Blog from "./pages/Blog/Blog";
import BlogArtical from "./pages/BlogArtical/BlogArtical";
import Footer from "./component/Footer";
import ConsumerBoard from "./pages/ConsumerBoard";
import VandorSavedProfile from "./pages/VandorSavedProfile";
import { createContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "./context/Reducer";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryload_action,
  loaduserdata_action,
} from "./redux/Action/Useraction";
import { Cookies } from "react-cookie";
export const GlobalContext = createContext();
function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const dispath = useDispatch();
  const cookies = new Cookies();
  console.log(cookies.get("token"));
  let token = cookies.get("token");
  useEffect(() => {
    dispath(loaduserdata_action(token));
    dispath(categoryload_action());
  }, []);
  return (
    <>
      {/* basename={"/"} */}
      {/* <GlobalContext.Provider value={{ state, dispatch }}> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/ExploreSearch" element={<ExploreSearch />} />
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route path="/BecomeVendorPage" element={<BecomeVendorPage />} />
          <Route path="/vandor-listing-page" element={<VandorListingPage />} />
          <Route path="/FlancoPizza" element={<FlancoPizza />} />
          <Route path="/VandorViewAccount" element={<VandorViewAccount />} />
          <Route path="/ConsumerAccount" element={<ConsumerAccount />} />
          <Route
            path="/ConsumerViewAccount"
            element={<ConsumerViewAccount />}
          />
          <Route path="/SeeAllCategory" element={<SeeAllCategory />} />
          <Route path="/LearnMore" element={<LearnMore />} />
          <Route path="/getInspired" element={<GetInspire />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/lookBook" element={<Lookbook />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="blog-artical/:id" element={<BlogArtical />} />
          <Route path="/deleteAccount" element={<DeleteAccount />} />
          <Route path="/consumerBoard" element={<ConsumerBoard />} />
          <Route path="/vandorSavedProfile" element={<VandorSavedProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* </GlobalContext.Provider> */}
    </>
  );
}

export default App;
