import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

class BlogsPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NoOfPost: 6
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    var lastScrollY = window.pageYOffset + 1100;

    if (lastScrollY > window.outerHeight) {
      var count = this.state.NoOfPost + 3;
      this.setState({
        NoOfPost: count
      });
    }
  };

  render() {

    const { data } = this.props;
    const { NoOfPost } = this.state;

    return (
      <React.Fragment>
        <ul className="blog-list" onScroll={this.onScrollEvent}>
          {/* {data.data.allContentfulBlogs.edges.slice(0, NoOfPost).map(items => ( */}
            <li>
              <div className="post-item template-square columned">
                <div className="post-thumbnail">
                    <Image />
                  {/* <Img sizes={items.node.featureImage.fluid} /> */}
                  <div className="post-date">
                    <i className="fas fa-calendar-alt"></i>
                    {/* {items.node.publicData} */}
                  </div>
                </div>
                <div className="post-details">
                  {/* <h2 className="post-title"><Link to={`/${items.node.slug}`}>{items.node.title}</Link></h2> */}
                  <h2 className="post-title">Latest</h2>
                  <div className="author">
                    {/* <Img sizes={items.node.author.photo.fluid} /> */}
                    <Image />
                    <strong className="name">Festus Akuma</strong>
                  </div>
                  <p>Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>

                </div>
              </div>
            </li>
          {/* ))} */}
        </ul>
      </React.Fragment>
    );
  }
}

const Blogs = data => (

  <Layout>
    <SEO title="Blogs" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container blog-page">
      <BlogsPost></BlogsPost>
    </div>
  </Layout>
)

export default Blogs