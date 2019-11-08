import React, { useState } from "react";
import { styled, SMixinFlexColumn } from "styled";
import { Button } from "antd";
import TweenOne from "rc-tween-one";
import BezierPlugin from "rc-tween-one/lib/plugin/BezierPlugin";
import PathPlugin from "rc-tween-one/lib/plugin/PathPlugin";
TweenOne.plugins.push(BezierPlugin);
TweenOne.plugins.push(PathPlugin);
import QueueAnim from "rc-queue-anim";

interface IProps {}
const Style = styled.div`
  ${SMixinFlexColumn("center", "center")};
  height: 100vh;
  background: #333;
  [role="container"] {
    position: relative;
    width: 600px;
  }
  color: #fff;
  text-align: center;

  h1 {
    color: #fff;
    text-align: center;
  }

  .box1 {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }

  .circle {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #ff1890;
  }
`;

const path = `M3.5,175V19c0,0,1-8.75,8.25-11.5S26.5,8,26.5,8l54,53.25
c0,0,7,8.25,14.5,0.75s51.5-52.25,51.5-52.25s9.75-7,18-2s7.75,11.5,7.75,11.5
v104c0,0-0.5,15.75-15.25,15.75s-15.75-15-15.75-15V68.5c0,0-0.125-9.125-6-3.25
s-36.25,36-36.25,36s-11.625,11.875-24-0.5S40.25,65.5,40.25,65.5
s-5.75-5.25-5.75,2s0,107.25,0,107.25s-0.75,13.5-14.5,13.5S3.5,175,3.5,175z`;
const animation = {
  repeat: -1,
  yoyo: false,
  duration: 3000
};
const VisualBox: React.FC<IProps> = ({ children }) => {
  const [display, setDisplay] = React.useState(true);

  return (
    <Style>
      <QueueAnim delay={300}>
        <h1 key={1} style={{ height: 30 }}>
          React Animation
        </h1>
        <div
          key={2}
          className="box1"
          style={{ margin: "20px auto", textAlign: "center" }}
        >
          <TweenOne
            animation={{ ...animation, path, duration: 6000 }}
            className={"circle"}
            style={{
              margin: 0,
              width: 20,
              height: 20,
              transform: "translate(-10px, -10px)"
            }}
          />
          <svg width="200" height="200">
            <path d={path} fill="none" stroke="rgba(255, 255, 255, 0.5)" />
          </svg>
        </div>
        <div
          key={3}
          className="buttons"
          style={{ margin: "20px auto", textAlign: "center" }}
        >
          <Button type="primary">Download</Button>
        </div>
        <div key={4}>The Complete Data Analytics IDE for Data Scientists</div>
        <div key={5}>Easy Data Work with QueryPie</div>
      </QueueAnim>
    </Style>
  );
};

export default VisualBox;
