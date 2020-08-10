import React, { Component } from "react";
import { Row, Col } from "react-grid-system";
import { SearchBar } from 'react-native-elements';



export default class Header extends Component {

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

