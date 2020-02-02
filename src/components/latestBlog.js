import React, { Component } from "react";
import Img from "gatsby-image"
import { Link } from "gatsby"
import Image from "./image"

const LatestBlogs = (props) => {

    const { data } = props;

    return (
        <div className="container">
            <div className="text-center"><h2 className="with-underline">Latest Blogs</h2></div>
            <ul className="latest-blog">
                {/* {data.edges.map(items => ( */}
                    <li>
                        <div className="inner">
                            {/* <Link to={items.node.slug}></Link> */}
                            {/* <Img sizes={items.node.featureImage.fluid} /> */}
                            <Image />
                            <h2>New Title</h2>
                        </div>
                    </li>
                {/* // ))} */}
            </ul>
        </div>
    );
}

export default LatestBlogs;