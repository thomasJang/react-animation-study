import React from "react";
import { styled, SMixinFlexColumn } from "styled";

interface IProps {
  title?: string;
  style?: React.CSSProperties;
}
const Style = styled.div`
  ${SMixinFlexColumn("center", "center")};
`;
const Container = styled.div`
  ${SMixinFlexColumn("center", "center")};
  max-width: 600px;
`;

const ContentBox: React.FC<IProps> = ({ title, children, style }) => {
  return (
    <Style style={style}>
      <Container>
        <h1>{title}</h1>
        <p>
          It's no secret that creating single-page JavaScript applications can
          be pretty challenging these days. Fortunately, there are multiple
          frameworks and libraries to choose from. Even still, there's a high
          learning curve before you can build a proper application. That's
          because you need to learn about client-side routing, page layout,
          APIs, and so on. Furthermore, you may want to server-side render
          certain pages and statically prerender others (balancing SEO and
          speed). So, we need something simple but customizable. Think about how
          webapps are created with PHP. You create some files, write PHP code,
          then simply deploy it. We don't have to worry about routing much, and
          the app is rendered on the server by default.
        </p>
      </Container>
    </Style>
  );
};

export default ContentBox;
