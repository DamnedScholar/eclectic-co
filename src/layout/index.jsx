import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./foundation.min.css";
import "./index.less";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    const fontsURL = `https://fonts.googleapis.com/css?family=EB+Garamond|Sanchez|Shadows+Into+Light&display=swap`
    const faURL = `https://kit.fontawesome.com/979ad25e6f.js`

    return (
      <div className="layout-container">
        <div className="bg unsplash" />
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
          <link href={fontsURL} rel="stylesheet" />
          <script src={faURL} crossorigin="anonymous"></script>
        </Helmet>
        {children}
      </div>
    );
  }
}
