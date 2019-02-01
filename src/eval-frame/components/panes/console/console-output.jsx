import React from "react";
import styled from "react-emotion";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import BaseIcon from "./base-icon";
import ConsoleContainer from "./console-container";
import ConsoleGutter from "./console-gutter";
import ConsoleBody from "./console-body";
import levels from "./log-levels";

const ArrowBack = BaseIcon(ArrowBackIcon);

const OutputContainer = styled(ConsoleContainer)`
  margin-top: 0px;
  margin-bottom: 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const OutputBody = styled(ConsoleBody)`
  min-height: 0px;
  display: block;
  overflow: auto;
  word-break: break-all;
  padding: 8px;
  padding-left: 0px;
  padding-right: 0px;
`;

const Carat = styled("span")`
  font-weight: 100;
  color: darkgray;
`;

export default class ConsoleOutput extends React.Component {
  render() {
    const backgroundColor = levels[this.props.level]
      ? levels[this.props.level].backgroundColor
      : "white";
    const textColor = levels[this.props.level]
      ? levels[this.props.level].textColor
      : "black";
    return (
      <OutputContainer backgroundColor={backgroundColor} textColor={textColor}>
        <ConsoleGutter side="left">
          <Carat>
            <ArrowBack />
          </Carat>
        </ConsoleGutter>
        <OutputBody>{this.props.children}</OutputBody>
        <ConsoleGutter side="right">&nbsp;</ConsoleGutter>
      </OutputContainer>
    );
  }
}
