import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Header, Segment, Loader, Image, Card, Container, CardContent, Message } from "semantic-ui-react";
import _ from "lodash";

import * as homeActions from "../redux/Home.actions";



class Movies extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.getProgramsStart();
  }

  render() {

    const { ProgramsLoading, programs, fetching } = this.props.state;
    console.log(this.props.state, "this.props.state");
    if (ProgramsLoading) {
      return <div><Loader style={{ display: "block" }} content="Movies loading" /></div>;
    }
    if (!fetching) {
      return <Message color="red">ERROR! PLEASE CHECK APİ</Message>;
    }
    const sortedMovies = programs && _.sortBy(programs.MoviesFilteredData, "title");

    return (
      <div>
        <Segment className="demo-title-container">
          <Container>
            <Header className="demo-title">Popular Movies</Header>
          </Container>
        </Segment>
        <Container style={{  "marginTop": "2em"  }}>
          <Card.Group>
            {programs && _.map(sortedMovies.slice(0, 21), (movies, index) =>
              <Card key={index}>
                <Image className="card-image" src={movies.images["Poster Art"].url} />
                <CardContent>
                  <Card.Meta>
                    <span className="date">{movies.releaseYear}</span>
                  </Card.Meta>
                  <Card.Description>
                    {movies.title}
                  </Card.Description>
                </CardContent>
              </Card>
            )}
          </Card.Group>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: {
      ...state.home
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(homeActions, dispatch)
  };
};

Movies.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
