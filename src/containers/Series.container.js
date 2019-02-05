import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Header, Segment, Loader, Image, Card, Container, CardContent } from "semantic-ui-react";
import _ from "lodash";

import * as homeActions from "../redux/Home.actions";



class Series extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.getProgramsStart();
  }

  render() {

    const { ProgramsLoading, programs } = this.props.state;
    console.log(programs);
    if (ProgramsLoading) {
      return <div><Loader style={{ display: "block" }} content="Series loading" /></div>;
    }
    const sortedSeries = programs && _.sortBy(programs.SeriesFilteredData, "title");
    return (
      <div>
        <Segment className="demo-title-container">
          <Container>
            <Header className="demo-title">Popular Series</Header>
          </Container>
        </Segment>
        <Container style={{  "marginTop": "2em"  }}>
          <Card.Group>
            {programs && _.map(sortedSeries.slice(0, 21), (series, index) =>
              <Card key={index}>
                <Image className="card-image" src={series.images["Poster Art"].url} />
                <CardContent>
                  <Card.Meta>
                    <span className="date">{series.releaseYear}</span>
                  </Card.Meta>
                  <Card.Description>
                    {series.title}
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

Series.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Series);
