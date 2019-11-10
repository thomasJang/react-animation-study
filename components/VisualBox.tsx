import React, { useState } from "react";
import { styled, SMixinFlexColumn } from "styled";
import { Button } from "antd";
import TweenOne from "rc-tween-one";
import PathPlugin from "rc-tween-one/lib/plugin/PathPlugin";
import BezierPlugin from "rc-tween-one/lib/plugin/BezierPlugin";
TweenOne.plugins.push(PathPlugin);
TweenOne.plugins.push(BezierPlugin);
import QueueAnim from "rc-queue-anim";

interface IProps {}
const Style = styled.div`
  --color: #66c5d9;

  ${SMixinFlexColumn("center", "center")};
  height: 100vh;
  background: linear-gradient(-130deg, #3b579d, #181e35);
  [role="container"] {
    position: relative;
    width: 600px;
  }
  color: #fff;
  text-align: center;

  h1 {
    color: #fff;
    text-align: center;
    b {
      color: var(--color);
    }
  }

  .box1 {
    position: relative;
    width: 280px;
    height: 280px;
    margin: 0 auto;
  }

  .circle {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;
    border-radius: 50%;
    background: var(--color);
    /* background: linear-gradient(-45deg, #bee8f1, var(--color)); */
    width: 16px;
    height: 16px;
    transform: translate(-8px, -8px);
  }

  .circle-large {
    width: 20px;
    height: 20px;
    transform: translate(-10px, -10px);
  }
  .circle-small {
    width: 10px;
    height: 10px;
    transform: translate(-5px, -5px);
  }

  #img-circles {
    width: 280px;
    height: 280px;
  }
`;
const path1 =
  "M72.7,23.4C-0.1,96.1,207.2,281.6,263.6,200.6C301.8,122.9,137.9-21.1,72.7,23.4z";
const path2 =
  "M49.4,46c-72.8,72.7,134.5,258.2,190.9,177.2C278.5,145.5,114.6,1.5,49.4,46z";
const path3 =
  "M25.8,69C-47,141.7,160.3,327.2,216.7,246.2C254.9,168.5,91,24.5,25.8,69z";
const path4 =
  "M213.8,30.9C142.8-38.7-45.7,150,26.1,211.6c1.3,1.1,2.7,2,4.2,2.7C106.9,251,253.9,101.8,216.9,34.9 C216.1,33.4,215,32.1,213.8,30.9z";
const path5 =
  "M237.2,53.1c-71-69.6-259.5,119.1-187.7,180.7c1.3,1.1,2.7,2,4.2,2.7C130.3,273.2,277.2,124,240.3,57.1 C239.4,55.6,238.4,54.2,237.2,53.1z";
const path6 =
  "M260.7,76.4C189.8,6.8,1.2,195.6,73,257.2c1.3,1.1,2.7,2,4.2,2.7c76.6,36.7,223.6-112.5,186.6-179.4 C263,79,262,77.6,260.7,76.4z";

const animation = {
  repeat: -1,
  yoyo: false
};
const VisualBox: React.FC<IProps> = ({ children }) => {
  const [display, setDisplay] = React.useState(true);

  return (
    <Style>
      <QueueAnim delay={300}>
        <div key={1} className="box1" style={{ textAlign: "center" }}>
          <TweenOne
            animation={{
              ...animation,
              path: path1,
              duration: 6000
            }}
            className="circle circle-large"
          />
          <TweenOne
            animation={{
              ...animation,
              path: path2,
              ease: "linear",
              duration: 4000
            }}
            className="circle"
          />
          <TweenOne
            animation={{
              ...animation,
              path: path3,
              ease: "linear",
              duration: 2000
            }}
            className="circle circle-small"
          />
          <TweenOne
            animation={{
              ...animation,
              path: path4,
              ease: "linear",
              duration: 5000
            }}
            className="circle"
          />
          <TweenOne
            animation={{
              ...animation,
              path: path5,
              duration: 8000
            }}
            className="circle circle-large"
          />
          <TweenOne
            animation={{
              ...animation,
              path: path6,
              ease: "linear",
              duration: 2500
            }}
            className="circle circle-small"
          />
          <div id="img-circles"></div>
        </div>
        <div
          key={2}
          className="buttons"
          style={{ margin: "20px auto", textAlign: "center" }}
        >
          <Button
            type="primary"
            onClick={() => {
              window.open("https://www.facebook.com/groups/DevCBali/");
            }}
            icon="like"
          >
            Join Group
          </Button>
        </div>
        <h1 key={3} style={{ height: 30 }}>
          Developer Circles <b>Bali</b>
        </h1>
        <div key={4}>from Facebook</div>
      </QueueAnim>
    </Style>
  );
};

export default VisualBox;
