import React, { Component } from "react";
import { Row, Col } from "react-grid-system";
import { View, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';



export default class Header extends Component {
  constuctor(props) {
    this.onClick = this.onClick.bind(this);
    this.state = {
      showSearchBar: false,
    };
  }
  onClick() {
    let { showSearchBar} = this.state;
    this.state({
      showSearchBar : !showSearchBar,
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
          <img src="./keep.png" alt="keep_icon"/>
          <h1>Keep</h1>
          </Col>

          <Col>

          </Col>
       </Row>
      </div>
    );
  }
}

