import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
// import Card from 'react-material-card'
import { Card, ImageHeader, CardBody, CardFooter } from 'react-simple-card';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import gql from 'graphql-tag';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Label
} from 'recharts';

class Cards extends Component {
  render() {
    return (
      <Grid container spacing={24}>
        {this.getCards()}
      </Grid>
    );
  }

  getCards() {
    return this.props.resources.map(resource => {
      return (
        <Grid
          item
          xs
          onClick={() => {
            window.open(resource.link, '_blank');
          }}
        >
          <Card
            style={{
              top: 25,
              right: 30,
              left: 20,
              bottom: 25,
              height: 300,
              width: 200,
              borderRadius: 4,
              borderWidth: 0.5,
              borderColor: '#00000'
            }}
          >
            <ImageHeader imageSrc="https://jmperezperez.com/assets/images/posts/svg-placeholders/pexels-photo-618463-square-10.svg" />
            <CardBody
              style={{
                borderRadius: 4,
                borderWidth: 0.5,
                borderColor: '#00000',
                fontSize: '12'
              }}
            >
              {resource.name}
            </CardBody>
          </Card>
        </Grid>
      );
    });
  }
}

class Resources extends Component {
  constructor() {
    super();
    this.state = {
      resources: [],
      resourcesToShow: [],
      resourceNames: []
    };
  }
  render() {
    return (
      <div
        id="container"
        style={{
          height: 0
        }}
      >
        <div
          style={{
            padding: 20
          }}
        >
          <SearchBar
            dataSource={this.state.resourceNames}
            onChange={a => {
              debounce(this.filterResources(a), 10);
            }}
            onRequestSearch={a => {
              this.filterResources(a);
            }}
            style={{
              margin: '0 auto',
              maxWidth: 800
            }}
          />
          <Cards resources={this.state.resourcesToShow} />
        </div>
      </div>
    );
  }

  filterResources(a) {
    let newResources = this.state.resources.filter(resource => {
      return (
        resource.name.toLowerCase().includes(a.toLowerCase()) ||
        resource.tag.toLowerCase().includes(a.toLowerCase())
      );
    });
    this.setState({
      resourcesToShow: newResources
    });
  }

  componentDidMount() {
    axios
      .post('https://f-connect.herokuapp.com/graphql', {
        query: `
        query {
          resources {
            name
            link
            tag
            schoolName
          }
        }
      `
      })
      .then(res => {
        this.setState({
          resources: res.data.data.resources,
          resourcesToShow: res.data.data.resources,
          resourceNames: res.data.data.resources.reduce((acc, resource) => {
            acc.push(resource.name + resource.tag);
            return acc;
          }, [])
        });
        console.log(this.state);
      })
      .catch(err => {
        console.log('Error', err);
      });
  }
}

// http://davidwalsh.name/javascript-debounce-function
const debounce = (func, wait, immediate) => {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export default Resources;
