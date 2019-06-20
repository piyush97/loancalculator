import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "./Home.css";
import { Slider, InputNumber, Row, Col } from "antd";
const { Header, Content, Footer } = Layout;

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAmoutValue: 1
    };
  }
  _onAmountChange = value => {
    this.setState({
      inputAmountValue: value
    });
  };
  _onMonthChange = value => {
    this.setState({
      inputAmountValue: value
    });
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
