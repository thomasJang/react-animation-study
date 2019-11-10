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
    position: relative;
    ${SMixinFlexColumn("center", "center")};
  }

  #img-bali {
    width: 200px;
    height: 200px;
    background-size: contain;
  }
`;

const ParallaxBox: React.FC<IProps> = ({ title, children, style }) => {
  return (
    <Style style={style}>
      <div role="container" style={{ paddingRight: 250 }}>
        <TweenOne
          key="0"
          animation={{ opacity: 1 }}
          style={{ opacity: 0, marginBottom: 10 }}
        >
          <h1>Developer Circles Bali from Facebook</h1>
        </TweenOne>

        <p>
          Bali is a province of Indonesia and the westernmost of the Lesser
          Sunda Islands. Located east of Java and west of Lombok, the province
          includes the island of Bali and a few smaller neighbouring islands,
          notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan. The provincial
          capital, Denpasar, is the most populous city in the Lesser Sunda
          Islands and the second largest, after Makassar, in Eastern Indonesia.
          Bali is the only Hindu-majority province in Indonesia, with 83.5% of
          the population adhering to Balinese Hinduism.[2] Bali is Indonesia's
          main tourist destination, which has seen a significant rise in
          tourists since the 1980s.[6] Tourism-related business makes up 80% of
          its economy.[7]
        </p>

        <Parallax
          animation={{ x: 0 }}
          style={{
            transform: "translateX(100px)",
            margin: "10px auto",
            position: "absolute",
            right: 0,
            top: 50
          }}
        >
          <div id="img-bali" />
        </Parallax>
      </div>
    </Style>
  );
};

export default ParallaxBox;
