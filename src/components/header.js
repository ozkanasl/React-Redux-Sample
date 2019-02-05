/* eslint-disable react/no-multi-comp */
import { Button, Container, Header, Icon, Menu, Responsive, Segment, Sidebar } from "semantic-ui-react";
import "../assets/css/style.css";
import React, { Component } from "react";
import PropTypes from "prop-types";


class NavBarMobile extends Component {
   state = {}
   handleSidebarHide = () => this.setState({ sidebarOpened: false })
   handleToggle = () => this.setState({ sidebarOpened: true })
   render() {
     // eslint-disable-next-line react/prop-types
     const { children } = this.props;
     const { sidebarOpened } = this.state;
     return (
       <div>
         <Sidebar
           as={Menu}
           animation="push"
           style={{ padding: "1em 0em" }}
           onHide={this.handleSidebarHide}
           vertical
           visible={sidebarOpened}>
           <Menu.Item as="a">Login</Menu.Item>
           <Menu.Item as="a">Button</Menu.Item>
         </Sidebar>
         <Sidebar.Pushable>
           <Segment
             inverted
             textAlign="center"
             vertical
             className="mobile-navbar">
             <Container>
               <Menu
                 inverted
                 pointing
                 secondary
                 size="small">
                 <Menu.Item onClick={this.handleToggle}>
                   <Icon name="sidebar" />
                 </Menu.Item>
                 <Menu.Item position="right">
                   <Header as="h1" className="navbar-header">React Redux Sample</Header>
                 </Menu.Item>
               </Menu>
             </Container>
           </Segment>
         </Sidebar.Pushable>
       </div>
     );
   }
}
// eslint-disable-next-line react/no-multi-comp
const NavBarDesktop = () => (
  <Menu
    inverted
    className="nav-header-menu">
    <Container>
      <Header
        as="h1"
        className="navbar-header">React Redux Sample</Header>
      <Menu.Menu position="right">
        <Button className="btn-login">Log In</Button>
        <Button className="btn-free-tutorial">Button</Button>
      </Menu.Menu>
    </Container>
  </Menu>
);
// eslint-disable-next-line react/prop-types
const NavBarChildren = ({ children }) => (
  <Container>{children}</Container>
);
// eslint-disable-next-line react/no-multi-comp
class NavigationBar extends Component {
 state = {
   visible: false
 };
 handlePusher = () => {
   const { visible } = this.state;
   if (visible) {
     this.setState({ visible: false });
   }
 }
 handleToggle = () => this.setState({ visible: !this.state.visible });
 render() {
   const { children } = this.props;
   const { visible } = this.state;
   return (
     <div>
       <Responsive {...Responsive.onlyMobile}>
         <NavBarMobile
           onPusherClick={this.handlePusher}
           onToggle={this.handleToggle}
           visible={visible}>
           <NavBarChildren>{children}</NavBarChildren>
         </NavBarMobile>
       </Responsive>
       <Responsive minWidth={Responsive.onlyTablet.minWidth}>
         <NavBarDesktop />
         <NavBarChildren>{children}</NavBarChildren>
       </Responsive>
     </div>
   );
 }
}
// eslint-disable-next-line react/no-multi-comp
const NavbarHeader = () => (
  <NavigationBar />
);
NavbarHeader.propTypes = {
  children: PropTypes.node
};

export default NavbarHeader;
