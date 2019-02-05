import React, { Component } from "react";

import { Header, Segment, Image, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

import SeriesImage from "../assets/images/series.png";
import MoviesImage from "../assets/images/movies.png";



class Home extends Component {

  render() {
    return (
      <div>
        <Segment className="demo-title-container">
          <Container>
            <Header className="demo-title">Popular Titles</Header>
          </Container>
        </Segment>
        <Container>
          <div className="home-container">
            <Link
              to={{
                pathname: "/series"
              }}>
              <Image src={SeriesImage} />
              <p>Popular Series</p>

            </Link>
            <Link
              to={{
                pathname: "/movies"
              }}>
              <Image src={MoviesImage} />
              <p>Popular Movies</p>
            </Link>
          </div>
        </Container>
      </div>
    );
  }
}


export default Home;
