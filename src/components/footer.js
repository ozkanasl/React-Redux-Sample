import React from "react";

import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Responsive, Segment, Sidebar, Visibility } from "semantic-ui-react";


import FacebookSvg from "../assets/images/facebook.svg";
import TwitterSvg from "../assets/images/twitter.svg";
import InstagramSvg from "../assets/images/instagram.svg";
import AppStoreSvg from "../assets/images/app-store.svg";
import PlayStoreSvg from "../assets/images/play-store.svg";
import WindowsStoreSvg from "../assets/images/windows.svg";



export default function footer() {
  return (
    <div>
      <Segment
        inverted
        vertical
        style={{
          padding: "5em 0em",
          marginTop: "20em",
          bottom: "0",
          width: "100%"
        }}>
        <Container>
          <Grid
            divided>
            <Grid.Row>
              <Grid.Column width={16}>
                <List horizontal className="footer-list">
                  <List.Item as="a">Home</List.Item>
                  <List.Item as="a">Terms and Conditions</List.Item>
                  <List.Item as="a">Privacy Policy</List.Item>
                  <List.Item as="a">Collection Statement</List.Item>
                  <List.Item as="a">Help</List.Item>
                  <List.Item as="a">Manage Account</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={16} style={{  padding: "2em 1em"  }}>
                <Header
                  as="p"
                  style={{
                    color: "#9c9c9c",
                    fontSize: "1rem"  }}>
                  Copyright © 2019 DEMO REACT REDUX
                </Header>
              </Grid.Column>
              <Grid.Column width={16}>
                <Grid>
                  <Grid.Column
                    className="footer-leftside-images"
                    floated="left"
                    computer={8}
                    mobile={16}>
                    <Image
                      src={FacebookSvg}
                      as="a"
                      href="facebook.com"
                      width="18px" />
                    <Image
                      src={TwitterSvg}
                      as="a"
                      href="twitter.com"
                      size="mini" />
                    <Image
                      src={InstagramSvg}
                      as="a"
                      href="instagram.com"
                      size="mini" />
                  </Grid.Column>
                  <Grid.Column
                    className="footer-rightside-images"
                    floated="right"
                    computer={8}
                    mobile={16}>
                    <Image
                      src={AppStoreSvg}
                      as="a"
                      href="facebook.com"
                      size="small" />
                    <Image
                      src={PlayStoreSvg}
                      as="a"
                      href="twitter.com"
                      size="small" />
                    <Image
                      src={WindowsStoreSvg}
                      as="a"
                      href="instagram.com"
                      width="108px" />
                  </Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}
