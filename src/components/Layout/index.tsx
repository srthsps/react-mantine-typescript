import React from "react";
import HeaderSearch from "./Header";
import NavbarSimple from "./Sidebar";
import FooterCentered from "./Footer";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./index.css";

interface layoutProps {}

const Layout: React.FC<layoutProps> = (props) => {
  console.log("auth layout is rendering");
  let links = [{ link: "hello", label: "world" }];
  return (
    <React.Fragment>
      <div id="layout-wrapper">
        <HeaderSearch links={links} />
        <div style={{display:"flex",flexDirection:"row"}}>
          <NavbarSimple />
          <div className="main-content">{props.children}</div>
        </div>
        <FooterCentered links={links} />
      </div>
    </React.Fragment>
  );
};

export default withRouter(connect()(Layout))
