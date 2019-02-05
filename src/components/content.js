import React, { Component } from "react";
import PropTypes from "prop-types";

import NavbarHeader from "./header";
import Footer from "./footer";

class Content extends Component {
  render() {
    return (
      <div>
        <NavbarHeader />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
Content.propTypes = {
  children: PropTypes.node
};


export default Content;
