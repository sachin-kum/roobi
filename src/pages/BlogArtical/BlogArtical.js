import React, { useState } from "react";
import "./Blogfour.css";
import { Row, Col } from "react-bootstrap";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BlogArticleData,blogArticalGallery } from "./BlogArticleData";
import {BsPlusLg} from  'react-icons/bs'
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const BlogArtical = () => {
  const { pathname } = useLocation();
  const[gallery,setgallery]=useState({})
  const {id}=useParams()
  const [data, setdata] = useState([])
  useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    useEffect(() => {
      axios.get(`http://192.168.0.3:2917/blog_singleList/${id}`).then((res)=>{
       console.log(res.data.data)
        setdata(res.data.data)
      }).catch(err=>console.log(err))
    }, [id])
    // if(data.length){
    //   let gal=data[0].gallery.split(",")
    //   // setgallery(gal)
    // }
  // let  gallerys=data[0].gallery.split(",")
  //   console.log(gallerys);
  //   gallerys.map((it)=>{
  //     console.log(it.slice(7));
  //   })
    console.log("state",data);
  return (
    <>
   {/* <div className="Blog-Artical">
      <div className="city-img">
        <img src="static/page4img1.png" alt="" />
        <span className="caouselPlus"> <BsPlusLg color="white" /></span>
      </div>
      <div className="brown-container">
        <div className="blog-title">
          <h1>Blog title</h1>
          <br />
          <p>Blog title Fri 28 Oct 2022 | by Liz Rae & Co </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            maiores, ipsam nam aliquid, eos quis magni pariatur doloremque illum
            voluptatibus fuga quasi voluptatum excepturi eum ut rerum
            exercitationem laborum dolorum amet in cumque quod cupiditate odio
            neque. Cumque officiis nisi dolorum quas atque. Eum vero mollitia
            corrupti, nam veniam commodi.
          </p>
          <p  className="blogArtical-share">    Share     |    <span> <BsPlusLg color="#525045"/> </span>     Save </p>  
        </div>
      </div>
<div className="BlogArtical-Container ">
      <div className=' container'>
      <div className="Liz-Rae row">
<div className='col-4 liz-column'>
  <div className='liz-card'>
    <div className='liz-empty'></div>
    <div className='liz-content-body'>
      <h5>Liz Rae & Co </h5>
      <p>Chicago </p>
      <p>$$</p>
    </div>
  </div>
</div>
<div className='col-8  liz-section-conent'>
  <h2>About Liz Rae & Co</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis, lorem ac venenatis commodo, sapien dui maximus nisi, et commodo erat urna id ipsum. Phasellus pellentesque iaculis neque. Pellentesque sit amet lacus sit amet justo consequat vulputate ac vitae risus.</p>
  <button>VISIT PROFILE</button>
</div>
</div>
      </div>
      <div className="container ">
      <hr />
      </div>
      <div className="experience container">
        <h2>Sub heading</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
          laboriosam modi facilis velit perspiciatis inventore delectus ducimus
          omnis ab aliquid unde numquam totam vitae officia, perferendis,
          adipisci odio vel quidem necessitatibus non maxime aperiam corrupti!
          Accusantium quibusdam repellendus pariatur fuga numquam, ex possimus
          porro error voluptas sed eum! Quod ipsum fugiat, voluptates quas
          dolores nulla quos iste quasi architecto doloremque delectus!
          Repudiandae repellat labore soluta id maiores. Rem atque error, fugit
          maxime omnis eveniet quaerat cumque recusandae, magnam esse tempora
          quo autem est sapiente aut odit commodi.
          <p>
            Expedita ullam perferendis, nam ab in quos enim. Sapiente eum
            recusandae, quia ab laborum dolores quis? Dolorem repellat deleniti
            nesciunt? Exercitationem omnis magni nam libero vel praesentium,
            voluptates dolorem maiores modi repellat aut eaque rem delectus sunt
            velit inventore minus ab voluptas laudantium. Modi consectetur in
            praesentium, sapiente excepturi beatae sint totam dolorum facilis
            molestiae, sequi doloremque! Magnam labore praesentium corrupti
            sapiente nihil.
          </p>
        </p>
      </div>
      <div className="evening">
        <Row className="m-0">
          <Col>
            <div className="evening-img">
              <img src="static/page4img2.png" alt="" />
              <span className="plus-Button3" > <BsPlusLg color=" white"/> </span>
            </div>
          </Col>
          <Col>
            <div className="evening-text">
              <p>
                'Evening weddings have a such a special atmosphere that you
                can't recreate at any other time of the day'
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div className="experience container">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
          laboriosam modi facilis velit perspiciatis inventore delectus ducimus
          omnis ab aliquid unde numquam totam vitae officia, perferendis,
          adipisci odio vel quidem necessitatibus non maxime aperiam corrupti!
          Accusantium quibusdam repellendus pariatur fuga numquam, ex possimus
          porro error voluptas sed eum! Quod ipsum fugiat, voluptates quas
          dolores nulla quos iste quasi architecto doloremque delectus!
          Repudiandae repellat labore soluta id maiores. Rem atque error, fugit
          maxime omnis eveniet quaerat cumque recusandae, magnam esse tempora
          quo autem est sapiente aut odit commodi.
        </p>
      </div>
      <div className="image-grid">
        <Row>
    

        {blogArticalGallery.map(({id,imgae})=>{
          return(
            <Col sm={3} className="grid-col" key={id}>
            <span><BsPlusLg color="white"/></span>
            <img src={imgae} alt="img" />
            </Col> 
          )
        })}
        </Row>
      </div>
      <div className="share-this-container">
        <div className="share-this">
          <Row>
            <h5>Share This Article</h5>
          </Row>
          <Row>
            <Col>
              <p>
                <AiOutlineInstagram /> Instagram
              </p>
            </Col>
            <Col>
              <p>
                <BsFacebook /> Facebook
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <div className="see-another">
        <p>Read another article</p>
      </div>
      <div className="card-container">
        <div className="wedding-data row">
          {BlogArticleData.map(
            ({
              id,
              image,
              title,
              text,
              line,
              borderColor,
              titleColor,
              btn,
              btnColor,
            }) => {
              return (
                <>
                  <div className="each-column col-4" key={id}>
                    <div className="inspireImage">
                      <img src={image} alt="" />
                      <span className="plus-Button2" style={{backgroundColor:titleColor }}> <BsPlusLg color=" white"/> </span>
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
          )}
        </div>
      </div>
      </div>
      </div> */}
      <div className="Blog-Artical">
      
      {data.map((it)=>{
        let a=it.image.slice(7)
        console.log(a);
        return(
          <>
            <div className="city-img">
        <img src={`http://localhost:2917/${a}`} alt="" />
        <span className="caouselPlus"> <BsPlusLg color="white" /></span>
      </div>
      <div className="brown-container">
        <div className="blog-title">
          <h1>{it.title}</h1>
          <br />
          <p>Blog title Fri 28 Oct 2022 | by Liz Rae & Co </p>
          <p>
            {it.content}
          </p>
          <p  className="blogArtical-share">    Share     |    <span> <BsPlusLg color="#525045"/> </span>     Save </p>  
        </div>
      </div>
      </>)
      })}
<div className="BlogArtical-Container ">
      <div className=' container'>
      <div className="Liz-Rae row">
<div className='col-4 liz-column'>
  <div className='liz-card'>
    <div className='liz-empty'></div>
    <div className='liz-content-body'>
      <h5>Liz Rae & Co </h5>
      <p>Chicago </p>
      <p>$$</p>
    </div>
  </div>
</div>
<div className='col-8  liz-section-conent'>
  <h2>About Liz Rae & Co</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis, lorem ac venenatis commodo, sapien dui maximus nisi, et commodo erat urna id ipsum. Phasellus pellentesque iaculis neque. Pellentesque sit amet lacus sit amet justo consequat vulputate ac vitae risus.</p>
  <button>VISIT PROFILE</button>
</div>
</div>
      </div>
      <div className="container ">
      <hr />
      </div>
      <div className="experience container">
        <h2>Sub heading</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
          laboriosam modi facilis velit perspiciatis inventore delectus ducimus
          omnis ab aliquid unde numquam totam vitae officia, perferendis,
          adipisci odio vel quidem necessitatibus non maxime aperiam corrupti!
          Accusantium quibusdam repellendus pariatur fuga numquam, ex possimus
          porro error voluptas sed eum! Quod ipsum fugiat, voluptates quas
          dolores nulla quos iste quasi architecto doloremque delectus!
          Repudiandae repellat labore soluta id maiores. Rem atque error, fugit
          maxime omnis eveniet quaerat cumque recusandae, magnam esse tempora
          quo autem est sapiente aut odit commodi.
          <p>
            Expedita ullam perferendis, nam ab in quos enim. Sapiente eum
            recusandae, quia ab laborum dolores quis? Dolorem repellat deleniti
            nesciunt? Exercitationem omnis magni nam libero vel praesentium,
            voluptates dolorem maiores modi repellat aut eaque rem delectus sunt
            velit inventore minus ab voluptas laudantium. Modi consectetur in
            praesentium, sapiente excepturi beatae sint totam dolorum facilis
            molestiae, sequi doloremque! Magnam labore praesentium corrupti
            sapiente nihil.
          </p>
        </p>
      </div>
      <div className="evening">
        <Row className="m-0">
          {data.map((it)=>{
            let img=it.image.slice(7)
            return(
          <>
          <Col>
            <div className="evening-img">
              <img src={`http://localhost:2917/${img}`} alt="" />
              <span className="plus-Button3" > <BsPlusLg color=" white"/> </span>
            </div>
          </Col>
          <Col>
            <div className="evening-text">
              <p>
              {it.caption}
              </p>
            </div>
          </Col>
          </>  )
          })}
          
        </Row>
      </div>
      <div className="experience container">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
          laboriosam modi facilis velit perspiciatis inventore delectus ducimus
          omnis ab aliquid unde numquam totam vitae officia, perferendis,
          adipisci odio vel quidem necessitatibus non maxime aperiam corrupti!
          Accusantium quibusdam repellendus pariatur fuga numquam, ex possimus
          porro error voluptas sed eum! Quod ipsum fugiat, voluptates quas
          dolores nulla quos iste quasi architecto doloremque delectus!
          Repudiandae repellat labore soluta id maiores. Rem atque error, fugit
          maxime omnis eveniet quaerat cumque recusandae, magnam esse tempora
          quo autem est sapiente aut odit commodi.
        </p>
      </div>
      <div className="image-grid">
        <Row>
    

        {/* {blogArticalGallery.map(({id,imgae})=>{
          return(
            <Col sm={3} className="grid-col" key={id}>
            <span><BsPlusLg color="white"/></span>
            <img src={imgae} alt="img" />
            </Col> 
          )
        })} */}
        {data.length>0?(data[0].gallery.split(",").map((it)=>{
          console.log("gallery",it.slice(7));
          let img=it.slice(7)
          return(
            <Col className="grid-col">
            <span><BsPlusLg color="white"/></span>
            <img src={`http://localhost:2917/${img}`} alt="img" />
            </Col> 

          )
        })):("")}
        </Row>
      </div>
      <div className="share-this-container">
        <div className="share-this">
          <Row>
            <h5>Share This Article</h5>
          </Row>
          <Row>
            <Col>
              <p>
                <AiOutlineInstagram /> Instagram
              </p>
            </Col>
            <Col>
              <p>
                <BsFacebook /> Facebook
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <div className="see-another">
        <p>Read another article</p>
      </div>
      <div className="card-container">
        <div className="wedding-data row">
          {BlogArticleData.map(
            ({
              id,
              image,
              title,
              text,
              line,
              borderColor,
              titleColor,
              btn,
              btnColor,
            }) => {
              return (
                <>
                  <div className="each-column col-4" key={id}>
                    <div className="inspireImage">
                      <img src={image} alt="" />
                      <span className="plus-Button2" style={{backgroundColor:titleColor }}> <BsPlusLg color=" white"/> </span>
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
          )}
        </div>
      </div>
      </div>
      </div>

    </>
  );
};
export default BlogArtical;
