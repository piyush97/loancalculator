import React, { Component } from "react";
import axios from "axios";
import {
  Divider,
  Slider,
  Row,
  Col,
  notification,
  Typography,
  Layout,
  Menu,
  Card,
  Breadcrumb
} from "antd";

import "./Home.css";
import baseURL from "../utils/API/endpoints";
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
  componentDidMount() {}
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
    this.openNotification();
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
    this.openNotification();
  };

  openNotification = () => {
    notification.open({
      message: "Success"
    });
  };

  render() {
    var dataJ = this.state.data;
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
                  <Divider>Loan</Divider>
                  <Slider
                    min={500}
                    max={5000}
                    onChange={this._onAmountChange}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <Divider>Duration</Divider>{" "}
                  <Slider min={6} max={24} onChange={this._onMonthChange} />
                </Col>
                {dataJ && (
                  <Col span={12}>
                    <center>
                      <Row>
                        <Card title="Interest Rate" style={{ width: 300 }}>
                          <p>{dataJ.interestRate}</p>
                        </Card>
                      </Row>
                      <Row>
                        <Card title="Monthly Payment" style={{ width: 300 }}>
                          <p>
                            Amount: {dataJ.monthlyPayment.amount}{" "}
                            {dataJ.monthlyPayment.currency}
                          </p>
                        </Card>
                      </Row>
                    </center>
                  </Col>
                )}
                {!dataJ && (
                  <Typography>
                    {" "}
                    Please Select Duration and Amount first
                  </Typography>
                )}
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Piyush Mehta ©2019</Footer>
        </Layout>
      </div>
    );
  }
}
