import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import axios from "axios";
import { Slider, Row, Col } from "antd";

import "./Home.css";
import baseURL from "../utils/endpoints";
const { Header, Content, Footer } = Layout;

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 500,
      period: 6,
      data: null
    };
  }
  _onAmountChange = (event, value) => {
    axios
      .get(
        `${baseURL}/interest?amount=${this.state.value}&numMonths=${
          this.state.period
        }`
      )
      .then(response => {
        console.log(response.data);
        this.setState({ data: response.data });
      })
      .catch(e => {
        console.log(e);
      });
  };

  _onMonthChange = (event, value) => {
    axios
      .get(
        `${baseURL}/interest?amount=${this.state.value}&numMonths=${
          this.state.period
        }`
      )
      .then(response => {
        console.log(response.data);
        this.setState({ data: response.data });
      })
      .catch(e => {
        console.log(e);
      });
    this.setState({
      period: event
    });
    console.log(event);
  };

  render() {
    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">Loan Calculator</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Loan Calculator</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: "#fff", padding: 34, minHeight: 720 }}>
              <Row>
                <Col span={8}>
                  <label> Loan</label>
                  <Slider
                    min={500}
                    max={5000}
                    onChange={this._onAmountChange}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <label>Duration</label>
                  <Slider min={6} max={24} onChange={this._onMonthChange} />
                </Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Piyush Mehta ©2019</Footer>
        </Layout>
      </div>
    );
  }
}
