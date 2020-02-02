import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Banner from "../components/banner"
import LatestBlogs from "../components/latestBlog"
// import Countdown from "../components/countdown"
import StarRatingComponent from 'react-star-rating-component';

class IndexPost extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    const { data } = this.props;

    return (
      <React.Fragment>
        <div className="row product-main">
          {/* {data.data.allContentfulProduct.edges.map(items => ( */}
            <div className="Catalogue__item col-sm-12 col-md-6 col-lg-4" >
              <div className="details_List">
                {/* {items.node.image === null ? <div className="no-image">No Image</div> : <Img sizes={items.node.image.fluid} />} */}
                <Image />

                <div className="details_inner">

                  <h2>
                    {/* <Link to={`/${items.node.slug}`}>{items.node.name}</Link> */}
                    Name
                  </h2>
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value="4"
                  />
                  {/* <p>{items.node.details.childMarkdownRemark.excerpt}</p> */}
                  <p>New header</p>
                  <div className="row">
                    <div className="col-sm-4 align-self-center">
                      {/* <span className="price">${items.node.price}</span> */}
                      <span classNAme="price">#5,000</span>
                    </div>
                    <div className="col-sm-8 text-right align-self-center">
                      {/* <a
                        href="#"
                        className="Product snipcart-add-item"
                        data-item-id={items.node.slug}
                        data-item-price={items.node.price}
                        data-item-image={items.node.image === null ? "" : items.node.image.fluid.src}
                        data-item-name={items.node.name}
                        data-item-url={`/`}
                      > */}
                        <i className="fas fa-shopping-bag" />Add to Cart
                    {/* </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* // ))} */}
        </div>
      </React.Fragment>
    );
  }
}

const IndexPage = (data) => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <LatestBlogs />
    <div className="container">
      <div className="text-center"><h2 className="with-underline">Latest Items</h2></div>
      <IndexPost ></IndexPost>
    </div>
  </Layout>
)

export default IndexPage

