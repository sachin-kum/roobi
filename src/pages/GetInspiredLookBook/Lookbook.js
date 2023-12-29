import React from "react";
import { Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./Lookbook.css";
import { lookbookData, lookgalleryData } from "./LookbookData";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import EmptyCardSlider from "../../component/EmptyCardSlider";
import { franchEmptyData } from "../../data";
import { BsPlusLg } from "react-icons/bs";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Lookbook = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="LookBook-Page">
        <div className="pagetwo ">
          <span className="caouselPlus">
            {" "}
            <BsPlusLg color="white" />
          </span>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="static/page2img1.png"
                alt="First slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="static/page2img1.png"
                alt="Second slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="static/page2img1.png"
                alt="Third slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="green-container d-flex justify-content-around ">
            <div className="lookbookText-Container">
              <h1>Wedding title</h1>
              <h6>Where | When | How many people | Theme</h6>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur doloremque dolore enim ipsa quia iure beatae
                voluptates, et vero alias repellat in molestias culpa nihil,
                nobis fugit, unde aperiam sunt autem molestiae est dolorum.
                Voluptate!
              </p>
              <div className="lookbook-share">
                <p>
                  {" "}
                  Share |{" "}
                  <span>
                    {" "}
                    <BsPlusLg color=" #027656" />{" "}
                  </span>{" "}
                  Save{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="LookBook-Main">
            <EmptyCardSlider
              venues={franchEmptyData}
              name="VENDORS"
              color="#00B0D7"
            />
            <div className="LookBook-section">
              <div className="experience container">
                <h1>Question about the venue experience?</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                  laboriosam modi facilis velit perspiciatis inventore delectus
                  ducimus omnis ab aliquid unde numquam totam vitae officia,
                  perferendis, adipisci odio vel quidem necessitatibus non
                  maxime aperiam corrupti! Accusantium quibusdam repellendus
                  pariatur fuga numquam, ex possimus porro error voluptas sed
                  eum! Quod ipsum fugiat, voluptates quas dolores nulla quos
                  iste quasi architecto doloremque delectus! Repudiandae
                  repellat labore soluta id maiores. Rem atque error, fugit
                  maxime omnis eveniet quaerat cumque recusandae, magnam esse
                  tempora quo autem est sapiente aut odit commodi.
                  <p>
                    Expedita ullam perferendis, nam ab in quos enim. Sapiente
                    eum recusandae, quia ab laborum dolores quis? Dolorem
                    repellat deleniti nesciunt? Exercitationem omnis magni nam
                    libero vel praesentium, voluptates dolorem maiores modi
                    repellat aut eaque rem delectus sunt velit inventore minus
                    ab voluptas laudantium. Modi consectetur in praesentium,
                    sapiente excepturi beatae sint totam dolorum facilis
                    molestiae, sequi doloremque! Magnam labore praesentium
                    corrupti sapiente nihil.
                  </p>
                </p>
              </div>
              <div className="birthday-cake container ">
                <img src="static/lookbookIm.png" alt="img" />
                <span className="plus-Button">
                  {" "}
                  <BsPlusLg color=" white" />{" "}
                </span>
              </div>
              <div className="photo-experience container">
                <h1>Question about the photographer experience?</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Exercitationem iusto, culpa a asperiores iste eaque assumenda
                  nesciunt, facere itaque nam eveniet molestiae voluptatum ad
                  reprehenderit quaerat minima accusamus, nisi porro ipsam!
                  Minima perferendis magni doloremque delectus commodi fuga sint
                  accusantium, a nostrum porro, debitis eum similique deleniti
                  dolorum quod optio, vel ex ullam quibusdam voluptate alias
                  consequatur praesentium? Tempore nam provident ad nisi est
                  officia labore iusto autem fugit voluptatibus enim odit atque
                  suscipit incidunt saepe libero sequi aspernatur vero
                  reiciendis possimus eligendi, placeat exercitationem sed
                  dolor. Explicabo beatae praesentium omnis vel reprehenderit
                  error sit doloremque aperiam! Repellendus, incidunt
                  consequuntur.
                </p>
              </div>
              <div className="image-grid">
                <Row>
                  {lookgalleryData.map(({ id, imgae }) => {
                    return (
                      <Col sm={3} className="grid-col" key={id}>
                        <span>
                          <BsPlusLg color="white" />
                        </span>
                        <img src={imgae} alt="img" />
                      </Col>
                    );
                  })}
                </Row>
              </div>
              <div className="caterer-experience container">
                <h2>Question about the caterer?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Exercitationem iusto, culpa a asperiores iste eaque assumenda
                  nesciunt, facere itaque nam eveniet molestiae voluptatum ad
                  reprehenderit quaerat minima accusamus, nisi porro ipsam!
                  Minima perferendis magni doloremque delectus commodi fuga sint
                  accusantium, a nostrum porro, debitis eum similique deleniti
                  dolorum quod optio, vel ex ullam quibusdam voluptate alias
                  consequatur praesentium? Tempore nam provident ad nisi est
                  officia labore iusto autem fugit voluptatibus enim odit atque
                  suscipit incidunt saepe libero sequi aspernatur vero
                  reiciendis possimus eligendi, placeat exercitationem sed
                  dolor. Explicabo beatae praesentium omnis vel reprehenderit
                  error sit doloremque aperiam! Repellendus, incidunt
                  consequuntur.
                </p>
              </div>
              <div className="container-fluid">
                <div className="best-times row">
                  <div className="best-times-img col-8">
                    <img src="static/page2img11.png" alt="img" />
                    <span className="plus-Button">
                      {" "}
                      <BsPlusLg color=" white" />{" "}
                    </span>
                  </div>
                  <div className="best-times-text col-4">
                    <p>
                      'We had the best time on our day, and we couldn't have
                      planned it without
                    </p>
                    <h1>
                      <b>with Roobi'</b>
                    </h1>
                    <div className="couple-name">
                      <p>COUPLE NAME</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stylist container">
                <h2>Question about the stylist?</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit recusandae, asperiores adipisci soluta fuga nihil
                  omnis voluptates porro, mollitia iste dignissimos dolores
                  quibusdam quia aspernatur, vero nostrum dolore reprehenderit
                  magni? Harum aut placeat vel magni culpa odit nostrum eveniet
                  numquam, quae tempora. Quo laboriosam officia, facere nam,
                  eaque, nisi unde excepturi ex numquam inventore expedita
                  explicabo accusantium possimus sit beatae! quisquam magnam
                  ducimus reprehenderit minus vero eaque tempora error aliquid
                  assumenda. Eaque, repudiandae!
                </p>
              </div>
              <div className="share-this-container">
                <div className="share-this">
                  <br />
                  <Row>
                    <h5>Share This Wedding</h5>
                  </Row>
                  <Row className="py-2">
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
                <p>See another wedding</p>
              </div>
              <div className="card-container">
                <div className="wedding-data row">
                  {lookbookData.map(
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
                          <div className=" col-4 lookbookCard" key={id}>
                            <div className="inspireImage">
                              <img src={image} alt="" />
                              <span
                                className="plus-Button2"
                                style={{ backgroundColor: titleColor }}
                              >
                                {" "}
                                <BsPlusLg color=" white" />{" "}
                              </span>
                            </div>
                            <div className="inspire-data">
                              <h2 style={{ color: titleColor }}>{title}</h2>
                              <div className="when-where">
                                <p>{line}</p>
                              </div>
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
        </div>
      </div>
    </>
  );
};

export default Lookbook;
