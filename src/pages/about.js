import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"



class About extends Component {
    render() {
        return ( <Layout >
            <SEO title="About" keywords={[`gatsby`, `application`, `react`]} /> 
            <div className = "site-About" >
            <div className="container">
            <div className="row">
            </div>
        </div> 
        </div> 
        </Layout>
        )
    }
}
export default About