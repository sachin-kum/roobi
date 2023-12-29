import React from "react";
import axios from "axios";
import "./Blog.css";
import { Col, Row } from "react-bootstrap";
import { BlogData, BlogData1, BlogData2 } from "./BlogData";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SearchFilterAll from "../../component/SearchFilter/SearchFilterAll";
import SearchStyleFilter from "../../component/SearchFilter/SearchStyleFilter";
import { BiPlusMedical } from "react-icons/bi";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    let blogData;
    axios
      .get(`http://192.168.0.3:2917/blog`)
      .then((res) => {
        // console.log(res.data);
        blogData = res.data;
        console.log(blogData);
        setBlog(blogData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //   function bloglist() {
  //     axios
  //       .get(`http://192.168.1.173:2917/blog`)
  //       .then((res) => {
  //         console.log(res.data);

  //         //   setNew(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  //   useEffect(() => {
  //     bloglist();
  //   }, []);

  return (
    <>
      <SearchFilterAll />
      <div className="Blog-Page">
        <div className="blog-head-img">
          <div className="blog-head-text">
            <h1>See what we've been up to recently</h1>
          </div>
        </div>

        <SearchStyleFilter />
        <div className="Blog-PageInner">
          <div className="card-container">
            <div className="wedding-data row">
              {/* {BlogData.map(
                ({
                  id,
                  image,
                  title,
                  line,
                  text,
                  btn,
                  titleColor,
                  btnColor,
                  borderColor,
                }) => {
                  return (
                    <>
                      <div className=" col-4 inspireImage-col" key={id}>
                        <div className="inspireImage">
                          <button
                            className="blogThreePlus"
                            style={{ backgroundColor: titleColor }}
                          >
                            <BiPlusMedical />
                          </button>
                          <img src={image} alt="" />
                        </div>
                        <div className="inspire-data">
                          <h2 style={{ color: titleColor }}>{title}</h2>
                          <p>{text}</p>
                          <button
                            style={{
                              color: btnColor,
                              border: `3px solid ${borderColor}`,
                            }}
                            className="img-btn"
                          >
                            {btn}
                          </button>
                        </div>
                      </div>
                    </>
                  );
                }
              )} */}
              {blog.map((val, index) => {
                let img = val.image.slice(7);
                if (index <= 2) {
                  return (
                    <>
                      <div className=" col-4 inspireImage-col">
                        <div className="inspireImage">
                          <button className="blogThreePlus">
                            <BiPlusMedical />
                          </button>
                          <img
                            src={`http://192.168.0.3:2917/${img}`}
                            alt=""
                          />
                        </div>
                        <div className="inspire-data">
                          <h2>{val.title}</h2>
                          <p>{val.content}</p>

                          <NavLink to={`/blog-artical/${val.id}`}>
                            <button className="img-btn"> Discover More </button>
                          </NavLink>
                        </div>
                      </div>
                    </>
                  );
                }
              })}
            </div>
          </div>
          <div className="card-container">
            <div className="wedding-data1 row">
              {/* {BlogData1.map(
                ({
                  id,
                  image,
                  title,
                  line,
                  text,
                  btn,
                  titleColor,
                  btnColor,
                  borderColor,
                }) => {
                  return (
                    <>
                      <div className=" col-3 inspireImage-3" key={id}>
                        <div className="inspireImage">
                          <img src={image} alt="" />
                          <button
                            className="blogPlus"
                            style={{ backgroundColor: titleColor }}
                          >
                            <BiPlusMedical />
                          </button>
                        </div>
                        <div className="inspire-data">
                          <h2 style={{ color: titleColor }}>{title}</h2>
                          <p>{text}</p>
                          <button
                            style={{
                              color: btnColor,
                              border: `3px solid ${borderColor}`,
                            }}
                            className="img-btn"
                          >
                            {btn}
                          </button>
                        </div>
                      </div>
                    </>
                  );
                }
              )} */}
              {blog.map((val, index) => {
                let img = val.image.slice(7);
                if (index >= 3 && index <= 6) {
                  return (
                    <>
                      <div className=" col-3 inspireImage-3">
                        <div className="inspireImage">
                          <img
                            src={`http://192.168.0.3:2917/${img}`}
                            alt=""
                          />
                          <button className="blogPlus">
                            <BiPlusMedical />
                          </button>
                        </div>
                        <div className="inspire-data">
                          <h2>{val.title}</h2>
                          <p>{val.content}</p>
                          <NavLink to={`/blog-artical/${val.id}`}>
                            <button className="img-btn"> Discover More </button>
                          </NavLink>
                        </div>
                      </div>
                    </>
                  );
                }
              })}
            </div>
          </div>
          <div className="blog-grass">
            {blog.map((val, index) => {
              let img = val.image.slice(7);
              console.log(img);
              if (index == 7) {
                return (
                  <div className="blog-row row m-0">
                    <div className="grass-img col-6">
                      <img src={`http://192.168.0.3:2917/${img}`} alt="" />
                      <button className="blogThreePlus">
                        <BiPlusMedical />
                      </button>
                    </div>
                    <div className="col-6">
                      <div className="blog-grass-text">
                        <h2>{val.title}</h2>
                        <p>{val.content}</p>
                        <div className="discover1-btn">
                          <NavLink to="/blog-artical">
                            <button className="img-btn"> Discover More </button>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="card-container">
            <div className="wedding-data row">
              {blog.map((val, index) => {
                let img = val.image.slice(7);
                if (index >= 8)
                  return (
                    <>
                      <div className=" col-4 inspireImage-col">
                        <div className="inspireImage">
                          <img
                            src={`http://192.168.0.3:2917/${img}`}
                            alt=""
                          />
                          <button>
                            <BiPlusMedical />
                          </button>
                        </div>
                        <div className="inspire-data">
                          <h2>{val.title}</h2>
                          <p>{val.content}</p>
                          <NavLink to="/blog-artical">
                            <button className="img-btn"> Discover More </button>
                          </NavLink>
                        </div>
                      </div>
                    </>
                  );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog;
