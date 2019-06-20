import React from "react";

import { Slider, InputNumber, Row, Col } from "antd";

export default class Slide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 1
    };
  }
  onChange = value => {
    this.setState({
      inputValue: value
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={8}>
          <Slider
            min={this.props.min}
            max={this.props.max}
            onChange={this.onChange}
            value={typeof inputValue === "number" ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={this.props.min}
            max={this.props.max}
            style={{ marginLeft: 2 }}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}
