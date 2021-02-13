import React from "react"

import Home from "../components/Home"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
