import React from "react";
import { OverPack, Parallax } from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import QueueAnim from "rc-queue-anim";
import { styled, SMixinFlexColumn } from "styled";

interface IProps {
  title?: string;
  style?: React.CSSProperties;
}
const Style = styled.div`
  ${SMixinFlexColumn("center", "center")};

  [role="container"] {
    ${SMixinFlexColumn("center", "center")};
  }
`;

const ParallaxTimelineBox: React.FC<IProps> = ({ title, children, style }) => {
  return (
    <Style style={style}>
      <Parallax
        animation={[
          { x: -100, opacity: 0, playScale: [0, 0.1] },
          { x: 0, opacity: 1, playScale: [0, 0.4] }
        ]}
        style={{
          transform: "translateX(-100px)",
          opacity: 0
        }}
      >
        <div role="container">
          <TweenOne
            key="0"
            animation={{ opacity: 1 }}
            style={{ opacity: 0, marginBottom: 10 }}
          >
            <h1>{title}</h1>
          </TweenOne>

          <p>
            It's no secret that creating single-page JavaScript applications can
            be pretty challenging these days. Fortunately, there are multiple
            frameworks and libraries to choose from. Even still, there's a high
            learning curve before you can build a proper application. That's
            because you need to learn about client-side routing, page layout,
            APIs, and so on. Furthermore, you may want to server-side render
            certain pages and statically prerender others (balancing SEO and
            speed). So, we need something simple but customizable. Think about
            how webapps are created with PHP. You create some files, write PHP
            code, then simply deploy it. We don't have to worry about routing
            much, and the app is rendered on the server by default.
          </p>
        </div>
      </Parallax>
    </Style>
  );
};

export default ParallaxTimelineBox;
