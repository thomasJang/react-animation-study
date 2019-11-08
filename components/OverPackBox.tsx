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

const OverPackBox: React.FC<IProps> = ({ title, children, style }) => {
  return (
    <OverPack>
      <Style style={style}>
        <div role="container">
          <h1>{title}</h1>

          <TweenOne
            key="0"
            animation={{ opacity: 1 }}
            style={{ opacity: 0, marginBottom: 10 }}
          >
            <p>
              It's no secret that creating single-page JavaScript applications
              can be pretty challenging these days. Fortunately, there are
              multiple frameworks and libraries to choose from. Even still,
              there's a high learning curve before you can build a proper
              application. That's because you need to learn about client-side
              routing, page layout, APIs, and so on. Furthermore, you may want
              to server-side render certain pages and statically prerender
              others (balancing SEO and speed). So, we need something simple but
              customizable. Think about how webapps are created with PHP. You
              create some files, write PHP code, then simply deploy it. We don't
              have to worry about routing much, and the app is rendered on the
              server by default.
            </p>
          </TweenOne>
        </div>
      </Style>
    </OverPack>
  );
};

export default OverPackBox;