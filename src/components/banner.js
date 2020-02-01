import React, { Component } from "react";
import Slider from "react-slick";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { graphql } from "gatsby"
import Image from "./image"

var settings = {
  dots: true,
  speed: 500,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Banner = (data) => {

    return (
      <div className="slider-section">
        <Slider {...settings}>
            <div className="item">
              <div className="site-Banner">
              <Image />
              {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
                <div className="Banner-details">
                  <div>
                    <span className="sub-title">Shop</span>
                    <h1>New collection</h1>
                    <Link to="/store">Shop Now</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="site-Banner">
              <Image />
              {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
                <div className="Banner-details">
                  <div>
                    <span className="sub-title">Shop</span>
                    <h1>New collection</h1>
                    <Link to="/store">Shop Now</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="site-Banner">
              <Image />
              {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
                <div className="Banner-details">
                  <div>
                    <span className="sub-title">Shop</span>
                    <h1>New collection</h1>
                    <Link to="/store">Shop Now</Link>
                  </div>
                </div>
              </div>
            </div>
        </Slider>
      </div>
    );
}

export default Banner;

export const query = graphql`
  query {
    file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`