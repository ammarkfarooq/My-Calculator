import React from "react";
import CalculatorTitle from "../components/calculatorTitle";
import OutputScreen from "../components/outputScreen";
import { View, StyleSheet } from "react-native";
import Button from "../components/button";
import { Container, Row, Col } from "../components/grid";
import ButtonTax from "../components/buttonTax";
import ButtonBack from "../components/buttonBack";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: "",
      operand1: "",
      operand2: "",
      operator: "",
      sum: "",
      operatorCount: 0,
      backCount: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <View style={styles1.outerView}>
        <CalculatorTitle value="My Calculator" />
        <OutputScreen
          answer={this.state.answer}
          question={this.state.question}
        />
        <Container>
          {/* First Row */}
          <Row>
            <Col>
              <Button handleClick={this.handleClick} label={7} />
            </Col>
            <Col>
              <Button handleClick={this.handleClick} label={8} />
            </Col>
            <Col>
              <Button handleClick={this.handleClick} label={9} />
            </Col>
            <Col>
              <Button handleClick={this.handleClick} label={"*"} />
            </Col>
          </Row>
          {/* Second Row */}
          <Row>
            <Col>
              <Button handleClick={this.handleClick} label={4} />
            </Col>
            <Col>
              <Button handleClick={this.handleClick} label={5} />
            </Col>
            <Col>
              <Button handleClick={this.handleClick} label={6} />
            </Col>
            <Col>
              <Button handleClick={this.handleClick} label={"/"} />
            </Col>
          </Row>
          {/* Third Row */}
          <Row>
            <Col>
              <Button handleClick={this.handleClick} label={1} />
            </Col>
            <Col>
              <Button handleClick={this.handleClick} label={2} />
            </Col>
            <Col>
              <Button handleClick={this.handleClick} label={3} />
            </Col>
            <Col>
              <Button handleClick={this.handleClick} label={"+"} />
            </Col>
          </Row>
          {/* Fourth Row */}
          <Row>
            <Col>
              <Button handleClick={this.handleClick} label={0} />
            </Col>
            <Col>
              <Button handleClick={this.handleClick} label={"C"} />
            </Col>
            <Col>
              <Button handleClick={this.handleClick} label={"="} />
            </Col>
            <Col>
              <Button handleClick={this.handleClick} label={"-"} />
            </Col>
          </Row>
          {/* Fifth Row */}
          <Row style={styles1.tax}>
            <Col style={styles1.tax}>
              <ButtonTax handleClick={this.handleClick} label={"Tax"} />
            </Col>
            <Col style={styles1.tax}>
              <ButtonBack handleClick={this.handleClick} label={"Back"} />
            </Col>
          </Row>
        </Container>
      </View>
    );
  }

  handleClick(value) {
    var value1 = value.toString();
    switch (value1) {
      case "=": {
        if (this.state.operator != "tax") {
          this.state.operatorCount = 0;
          if (this.state.question !== "") {
            var ans = "";
            try {
              let var1 = 0;

              if (this.state.operator == "+") {
                var1 = this.state.question.indexOf("+");
                this.state.operand1=this.state.question.slice(0,var1)
                operand2 = this.state.question.slice(var1 + 1);
                if (operand2 != "") {
                  var integer1 = parseInt(this.state.operand1, 10);
                  var integer2 = parseInt(operand2, 10);
                  this.state.sum = integer1 + integer2;
                  this.state.operator = "";
                } else {
                  var integer1 = parseInt(this.state.operand1, 10);
                  this.state.sum = integer1 + integer1;
                  this.state.operator = "";
                }
              }

              if (this.state.operator == "-") {
                var1 = this.state.question.indexOf("-");
                this.state.operand1=this.state.question.slice(0,var1)
                operand2 = this.state.question.slice(var1 + 1);
                if (operand2 != "") {
                  var integer1 = parseInt(this.state.operand1, 10);
                  var integer2 = parseInt(operand2, 10);
                  this.state.sum = integer1 - integer2;
                  this.state.operator = "";
                } else {
                  var integer1 = parseInt(this.state.operand1, 10);
                  this.state.sum = integer1 - integer1;
                  this.state.operator = "";
                }
              }

              if (this.state.operator == "*") {
                var1 = this.state.question.indexOf("*");
                this.state.operand1=this.state.question.slice(0,var1)
                operand2 = this.state.question.slice(var1 + 1);
                if (operand2 != "") {
                  var integer1 = parseInt(this.state.operand1, 10);
                  var integer2 = parseInt(operand2, 10);
                  this.state.sum = integer1 * integer2;
                  this.state.operator = "";
                } else {
                  var integer1 = parseInt(this.state.operand1, 10);
                  this.state.sum = integer1 * integer1;
                  this.state.operator = "";
                }
              }

              if (this.state.operator == "/") {
                var1 = this.state.question.indexOf("/");
                this.state.operand1=this.state.question.slice(0,var1)
                operand2 = this.state.question.slice(var1 + 1);
                if (operand2 != "") {
                  var integer1 = parseInt(this.state.operand1, 10);
                  var integer2 = parseInt(operand2, 10);
                  this.state.sum = integer1 / integer2;
                  this.state.operator = "";
                } else {
                  var integer1 = parseInt(this.state.operand1, 10);
                  this.state.sum = integer1 / integer1;
                  this.state.operator = "";
                }
              }
              ans = this.state.sum;
            } catch (err) {
              this.setState({ answer: "Math Error" });
            }
            if (ans === undefined) {
              this.setState({ answer: "Math Error" });
            } else {
              var ans1 = ans.toString();
              if (ans1 != "NaN") {
                this.setState({ answer: ans1, question: "" });
              } else {
                this.setState({ answer: "Math Error", question: "" });
              }
            }
          }
        }
        break;
      }

      case "C": {
        this.setState({ question: "", answer: "" });
        this.state.operand1 = "";
        this.state.operand2 = "";
        this.state.operatorCount = 0;
        this.state.operator = "";
        break;
      }

      case "+": {
        let var3 = this.state.question.charAt(this.state.question.length - 1);
        if (
          var3 != "+" &&
          var3 != "-" &&
          var3 != "*" &&
          var3 != "/" &&
          this.state.question != "" &&
          this.state.operator != "tax"
        ) {
          if (this.state.operatorCount == 0) {
            this.setState({ operand1: this.state.question });
            this.setState({ question: (this.state.question += value1) });
            this.state.operator = "+";
            this.state.operatorCount = 1;
          } else {
            if (this.state.operatorCount > 0) {
              if (this.state.operator == "-") {
                let var2 = this.state.question.indexOf("-");
                operand2 = this.state.question.slice(var2 + 1);
                this.state.operand1=this.state.question.slice(0,var2)
                integer1 = parseInt(this.state.operand1, 10);
                integer2 = parseInt(operand2, 10);
                this.state.sum = integer1 - integer2;
                ans = this.state.sum;
                var ans1 = ans.toString();
                this.setState({ answer: ans1 });
                this.setState({ question: "" });
                ans2 = ans1 + "+";
                this.setState({ question: ans2 });
                this.state.operand1 = ans;
              } else {
                if (this.state.operator == "+") {
                  let var2 = this.state.question.indexOf("+");
                  operand2 = this.state.question.slice(var2 + 1);
                  this.state.operand1=this.state.question.slice(0,var2)
                  integer1 = parseInt(this.state.operand1, 10);
                  integer2 = parseInt(operand2, 10);
                  this.state.sum = integer1 + integer2;
                  ans = this.state.sum;
                  var ans1 = ans.toString();
                  this.setState({ answer: ans1 });
                  this.setState({ question: "" });
                  ans2 = ans1 + "+";
                  this.setState({ question: ans2 });
                  this.state.operand1 = ans;
                } else {
                  if (this.state.operator == "*") {
                    let var2 = this.state.question.indexOf("*");
                    operand2 = this.state.question.slice(var2 + 1);
                    this.state.operand1=this.state.question.slice(0,var2)
                    integer1 = parseInt(this.state.operand1, 10);
                    integer2 = parseInt(operand2, 10);
                    this.state.sum = integer1 * integer2;
                    ans = this.state.sum;
                    var ans1 = ans.toString();
                    this.setState({ answer: ans1 });
                    this.setState({ question: "" });
                    ans2 = ans1 + "+";
                    this.setState({ question: ans2 });
                    this.state.operand1 = ans;
                  } else {
                    if (this.state.operator == "/") {
                      let var2 = this.state.question.indexOf("/");
                      operand2 = this.state.question.slice(var2 + 1);
                      this.state.operand1=this.state.question.slice(0,var2)
                      integer1 = parseInt(this.state.operand1, 10);
                      integer2 = parseInt(operand2, 10);
                      this.state.sum = integer1 / integer2;
                      ans = this.state.sum;
                      var ans1 = ans.toString();
                      this.setState({ answer: ans1 });
                      this.setState({ question: "" });
                      ans2 = ans1 + "+";
                      this.setState({ question: ans2 });

                      this.state.operand1 = ans;
                    } else {
                      if (this.state.operator == "back") {
                        this.state.operator = "+";
                        this.setState({
                          question: (this.state.question += value1)
                        });
                        let var2 = this.state.question.indexOf("+");
                        operand2 = this.state.question.slice(var2 + 1);
                        integer1 = parseInt(this.state.operand1, 10);
                        integer2 = parseInt(operand2, 10);
                      }
                    }
                  }
                }
              }
            } else {
              alert("Stop");
            }
          }
          this.state.operator = "+";
        }
        break;
      }

      case "-": {
        let var3 = this.state.question.charAt(this.state.question.length - 1);
        if (
          var3 != "+" &&
          var3 != "-" &&
          var3 != "*" &&
          var3 != "/" &&
          this.state.question != "" &&
          this.state.operator != "tax"
        ) {
          if (this.state.operatorCount == 0) {
            this.setState({ operand1: this.state.question });
            this.setState({ question: (this.state.question += value1) });
            this.state.operator = "-";
            this.state.operatorCount = 1;
          } else {
            if (this.state.operatorCount > 0) {
              if (this.state.operator == "+") {
                let var2 = this.state.question.indexOf("+");
                operand2 = this.state.question.slice(var2 + 1);
                this.state.operand1=this.state.question.slice(0,var2)
                integer1 = parseInt(this.state.operand1, 10);
                integer2 = parseInt(operand2, 10);
                this.state.sum = integer1 + integer2;
                ans = this.state.sum;
                var ans1 = ans.toString();
                this.setState({ answer: ans1 });
                this.setState({ question: "" });
                ans2 = ans1 + "-";
                this.setState({ question: ans2 });
                this.state.operand1 = ans;
              } else {
                if (this.state.operator == "-") {
                  let var2 = this.state.question.indexOf("-");
                  operand2 = this.state.question.slice(var2 + 1);
                  integer1 = parseInt(this.state.operand1, 10);
                  integer2 = parseInt(operand2, 10);

                  if (integer1 < integer2) {
                    let var2 = this.state.question.lastIndexOf("-");
                    operand2 = this.state.question.slice(var2 + 1);
                    operand2 = "-" + operand2;
                    this.state.operand1=this.state.question.slice(0,var2)
                    integer1 = parseInt(this.state.operand1, 10);
                    integer2 = parseInt(operand2, 10);
                    this.state.sum = integer1 + integer2;
                    ans = this.state.sum;
                    var ans1 = ans.toString();
                    this.setState({ answer: ans1 });
                    this.setState({ question: "" });
                    ans2 = ans1 + "-";
                    this.setState({ question: ans2 });
                    this.state.operand1 = ans;
                  } else {
                    this.state.sum = integer1 - integer2;
                    ans = this.state.sum;
                    var ans1 = ans.toString();
                    this.setState({ answer: ans1 });
                    this.setState({ question: "" });
                    ans2 = ans1 + "-";
                    this.setState({ question: ans2 });
                    this.state.operand1 = ans;
                  }
                } else {
                  if (this.state.operator == "*") {
                    let var2 = this.state.question.indexOf("*");
                    operand2 = this.state.question.slice(var2 + 1);
                    this.state.operand1=this.state.question.slice(0,var2)
                    integer1 = parseInt(this.state.operand1, 10);
                    integer2 = parseInt(operand2, 10);
                    this.state.sum = integer1 * integer2;
                    ans = this.state.sum;
                    var ans1 = ans.toString();
                    this.setState({ answer: ans1 });
                    this.setState({ question: "" });
                    ans2 = ans1 + "-";
                    this.setState({ question: ans2 });
                    this.state.operand1 = ans;
                  } else {
                    if (this.state.operator == "/") {
                      let var2 = this.state.question.indexOf("/");
                      operand2 = this.state.question.slice(var2 + 1);
                      this.state.operand1=this.state.question.slice(0,var2)
                      integer1 = parseInt(this.state.operand1, 10);
                      integer2 = parseInt(operand2, 10);
                      this.state.sum = integer1 / integer2;
                      ans = this.state.sum;
                      var ans1 = ans.toString();
                      this.setState({ answer: ans1 });
                      this.setState({ question: "" });
                      ans2 = ans1 + "-";
                      this.setState({ question: ans2 });
                      this.state.operand1 = ans;
                    } else {
                      if (this.state.operator == "back") {
                        this.state.operator = "-";
                        this.setState({
                          question: (this.state.question += value1)
                        });
                        let var2 = this.state.question.indexOf("-");
                        operand2 = this.state.question.slice(var2 + 1);
                        integer1 = parseInt(this.state.operand1, 10);
                        integer2 = parseInt(operand2, 10);
                      }
                    }
                  }
                }
              }
            } else {
              alert("Stop");
            }
          }
          this.state.operator = "-";
        }
        break;
      }

      case "*": {
        let var3 = this.state.question.charAt(this.state.question.length - 1);
        if (
          var3 != "+" &&
          var3 != "-" &&
          var3 != "*" &&
          var3 != "/" &&
          this.state.question != "" &&
          this.state.operator != "tax"
        ) {
          if (this.state.operatorCount == 0) {
            this.setState({ operand1: this.state.question });
            this.setState({ question: (this.state.question += value1) });
            this.state.operator = "*";
            this.state.operatorCount = 1;
          } else {
            if (this.state.operatorCount > 0) {
              if (this.state.operator == "+") {
                let var2 = this.state.question.indexOf("+");
                operand2 = this.state.question.slice(var2 + 1);
                this.state.operand1=this.state.question.slice(0,var2)
                integer1 = parseInt(this.state.operand1, 10);
                integer2 = parseInt(operand2, 10);
                this.state.sum = integer1 + integer2;
                ans = this.state.sum;
                var ans1 = ans.toString();
                this.setState({ answer: ans1 });
                this.setState({ question: "" });
                ans2 = ans1 + "*";
                this.setState({ question: ans2 });
                this.state.operand1 = ans;
              } else {
                if (this.state.operator == "-") {
                  let var2 = this.state.question.indexOf("-");
                  operand2 = this.state.question.slice(var2 + 1);
                  this.state.operand1=this.state.question.slice(0,var2)
                  integer1 = parseInt(this.state.operand1, 10);
                  integer2 = parseInt(operand2, 10);
                  this.state.sum = integer1 - integer2;
                  ans = this.state.sum;
                  var ans1 = ans.toString();
                  this.setState({ answer: ans1 });
                  this.setState({ question: "" });
                  ans2 = ans1 + "*";
                  this.setState({ question: ans2 });
                  this.state.operand1 = ans;
                } else {
                  if (this.state.operator == "*") {
                    let var2 = this.state.question.indexOf("*");
                    operand2 = this.state.question.slice(var2 + 1);
                    this.state.operand1=this.state.question.slice(0,var2)
                    integer1 = parseInt(this.state.operand1, 10);
                    integer2 = parseInt(operand2, 10);
                    this.state.sum = integer1 * integer2;
                    ans = this.state.sum;
                    var ans1 = ans.toString();
                    this.setState({ answer: ans1 });
                    this.setState({ question: "" });
                    ans2 = ans1 + "*";
                    this.setState({ question: ans2 });
                    this.state.operand1 = ans;
                  } else {
                    if (this.state.operator == "/") {
                      let var2 = this.state.question.indexOf("/");
                      operand2 = this.state.question.slice(var2 + 1);
                      this.state.operand1=this.state.question.slice(0,var2)
                      integer1 = parseInt(this.state.operand1, 10);
                      integer2 = parseInt(operand2, 10);
                      this.state.sum = integer1 / integer2;
                      ans = this.state.sum;
                      var ans1 = ans.toString();
                      this.setState({ answer: ans1 });
                      this.setState({ question: "" });
                      ans2 = ans1 + "*";
                      this.setState({ question: ans2 });
                      this.state.operand1 = ans;
                    } else {
                      if (this.state.operator == "back") {
                        this.state.operator = "*";
                        this.setState({
                          question: (this.state.question += value1)
                        });
                        let var2 = this.state.question.indexOf("*");
                        operand2 = this.state.question.slice(var2 + 1);
                        integer1 = parseInt(this.state.operand1, 10);
                        integer2 = parseInt(operand2, 10);
                      }
                    }
                  }
                }
              }
            } else {
              alert("Stop");
            }
          }
          this.state.operator = "*";
        }
        break;
      }

      case "/": {
        let var3 = this.state.question.charAt(this.state.question.length - 1);
        if (
          var3 != "+" &&
          var3 != "-" &&
          var3 != "*" &&
          var3 != "/" &&
          this.state.question != "" &&
          this.state.operator != "tax"
        ) {
          if (this.state.operatorCount == 0) {
            this.setState({ operand1: this.state.question });
            this.setState({ question: (this.state.question += value1) });
            this.state.operator = "/";
            this.state.operatorCount = 1;
          } else {
            if (this.state.operatorCount > 0) {
              if (this.state.operator == "+") {
                let var2 = this.state.question.indexOf("+");
                operand2 = this.state.question.slice(var2 + 1);
                this.state.operand1=this.state.question.slice(0,var2)
                integer1 = parseInt(this.state.operand1, 10);
                integer2 = parseInt(operand2, 10);
                this.state.sum = integer1 + integer2;
                ans = this.state.sum;
                var ans1 = ans.toString();
                this.setState({ answer: ans1 });
                this.setState({ question: "" });
                ans2 = ans1 + "/";
                this.setState({ question: ans2 });
                this.state.operand1 = ans;
              } else {
                if (this.state.operator == "-") {
                  let var2 = this.state.question.indexOf("-");
                  operand2 = this.state.question.slice(var2 + 1);
                  this.state.operand1=this.state.question.slice(0,var2)
                  integer1 = parseInt(this.state.operand1, 10);
                  integer2 = parseInt(operand2, 10);
                  this.state.sum = integer1 - integer2;
                  ans = this.state.sum;
                  var ans1 = ans.toString();
                  this.setState({ answer: ans1 });
                  this.setState({ question: "" });
                  ans2 = ans1 + "/";
                  this.setState({ question: ans2 });
                  this.state.operand1 = ans;
                } else {
                  if (this.state.operator == "*") {
                    let var2 = this.state.question.indexOf("*");
                    operand2 = this.state.question.slice(var2 + 1);
                    this.state.operand1=this.state.question.slice(0,var2)
                    integer1 = parseInt(this.state.operand1, 10);
                    integer2 = parseInt(operand2, 10);
                    this.state.sum = integer1 * integer2;
                    ans = this.state.sum;
                    var ans1 = ans.toString();
                    this.setState({ answer: ans1 });
                    this.setState({ question: "" });
                    ans2 = ans1 + "/";
                    this.setState({ question: ans2 });
                    this.state.operand1 = ans;
                  } else {
                    if (this.state.operator == "/") {
                      let var2 = this.state.question.indexOf("/");
                      operand2 = this.state.question.slice(var2 + 1);
                      this.state.operand1=this.state.question.slice(0,var2)
                      integer1 = parseInt(this.state.operand1, 10);
                      integer2 = parseInt(operand2, 10);
                      this.state.sum = integer1 / integer2;
                      ans = this.state.sum;
                      var ans1 = ans.toString();
                      this.setState({ answer: ans1 });
                      this.setState({ question: "" });
                      ans2 = ans1 + "/";
                      this.setState({ question: ans2 });
                      this.state.operand1 = ans;
                    } else {
                      if (this.state.operator == "back") {
                        this.state.operator = "/";
                        this.setState({
                          question: (this.state.question += value1)
                        });
                        let var2 = this.state.question.indexOf("/");
                        operand2 = this.state.question.slice(var2 + 1);
                        integer1 = parseInt(this.state.operand1, 10);
                        integer2 = parseInt(operand2, 10);
                      }
                    }
                  }
                }
              }
            } else {
              alert("Stop");
            }
          }
          this.state.operator = "/";
        }
        break;
      }

      case "Tax": {
        if (
          this.state.question != "" &&
          this.state.operator != "+" &&
          this.state.operator != "-" &&
          this.state.operator != "*" &&
          this.state.operator != "/"
        ) {
          var tax = 0;
          var incomeMonthly = this.state.question;
          var exceedingAmount = 0;
          var incomeYearly = incomeMonthly * 12;
          if (incomeYearly < 600000) {
            this.setState({ tax: 0 });
          } else {
            if (incomeYearly >= 600000 && incomeYearly < 1200000) {
              exceedingAmount = incomeYearly - 600000;
              exceedingAmount = exceedingAmount / 12;
              tax = exceedingAmount * (5 / 100);
            } else {
              if (incomeYearly >= 1200000 && incomeYearly < 1800000) {
                exceedingAmount = incomeYearly - 1200000;
                exceedingAmount = exceedingAmount * (10 / 100);
                exceedingAmount = exceedingAmount + 30000;
                tax = exceedingAmount / 12;
              } else {
                if (incomeYearly >= 1800000 && incomeYearly < 2500000) {
                  exceedingAmount = incomeYearly - 1800000;
                  exceedingAmount = exceedingAmount * (15 / 100);
                  exceedingAmount = exceedingAmount + 90000;
                  tax = exceedingAmount / 12;
                } else {
                  if (incomeYearly >= 2500000 && incomeYearly < 3500000) {
                    exceedingAmount = incomeYearly - 2500000;
                    exceedingAmount = exceedingAmount * (17.5 / 100);
                    exceedingAmount = exceedingAmount + 195000;
                    tax = exceedingAmount / 12;
                  } else {
                    if (incomeYearly >= 3500000 && incomeYearly < 5000000) {
                      exceedingAmount = incomeYearly - 3500000;
                      exceedingAmount = exceedingAmount * (20 / 100);
                      exceedingAmount = exceedingAmount + 370000;
                      tax = exceedingAmount / 12;
                    } else {
                      if (incomeYearly >= 5000000 && incomeYearly < 8000000) {
                        exceedingAmount = incomeYearly - 5000000;
                        exceedingAmount = exceedingAmount * (22.5 / 100);
                        exceedingAmount = exceedingAmount + 670000;
                        tax = exceedingAmount / 12;
                      } else {
                        if (
                          incomeYearly >= 8000000 &&
                          incomeYearly < 12000000
                        ) {
                          exceedingAmount = incomeYearly - 8000000;
                          exceedingAmount = exceedingAmount * (25 / 100);
                          exceedingAmount = exceedingAmount + 1345000;
                          tax = exceedingAmount / 12;
                        } else {
                          if (
                            incomeYearly >= 12000000 &&
                            incomeYearly < 30000000
                          ) {
                            exceedingAmount = incomeYearly - 12000000;
                            exceedingAmount = exceedingAmount * (27.5 / 100);
                            exceedingAmount = exceedingAmount + 2345000;
                            tax = exceedingAmount / 12;
                          } else {
                            if (
                              incomeYearly >= 30000000 &&
                              incomeYearly < 50000000
                            ) {
                              exceedingAmount = incomeYearly - 30000000;
                              exceedingAmount = exceedingAmount * (30 / 100);
                              exceedingAmount = exceedingAmount + 7295000;
                              tax = exceedingAmount / 12;
                            } else {
                              if (
                                incomeYearly >= 50000000 &&
                                incomeYearly < 75000000
                              ) {
                                exceedingAmount = incomeMonthly - 50000000;
                                exceedingAmount =
                                  exceedingAmount * (32.5 / 100);
                                exceedingAmount = exceedingAmount + 13295000;
                                tax = exceedingAmount / 12;
                              } else {
                                if (incomeYearly >= 75000000) {
                                  exceedingAmount = incomeYearly - 75000000;
                                  exceedingAmount =
                                    exceedingAmount * (35 / 100);
                                  exceedingAmount = exceedingAmount + 21420000;
                                  tax = exceedingAmount / 12;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          var tax1 = tax.toFixed(0);
          tax1 = tax1.toString().split(".");
          tax1[0] = tax1[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          tax1 = tax1.join(".");
          this.state.operator = "tax";
          this.setState({ answer: "Tax will be Rs. " + tax1 });
        }
        break;
      }

      case "Back": {
        var backSpaced = this.state.question;
        backSpaced = backSpaced.substring(0, backSpaced.length - 1);
        this.setState({ question: backSpaced });
        this.state.operator = "back";
        this.state.backCount = 1;
        break;
      }
      default: {
        if (this.state.operator != "tax") {
          this.setState({ answer: "" });
          this.setState({ question: (this.state.question += value1) });
        }
        break;
      }
    }
  }
}

const styles1 = StyleSheet.create({
  outerView: {
    flex: 1,
    backgroundColor: "#added6"
  },
  tax: {
    alignItems: "center"
  },
  taxButton: {
    position: "absolute",
    right: 10
  }
});
