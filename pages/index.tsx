import React, { useEffect, useReducer } from "react";
import "styles/global";
import { ISettings } from "common/interfaces";
import { settingsReducer } from "store";
import ParallaxBox from "components/ParallaxBox";
import OverPackBox from "components/OverPackBox";
import ParallaxTimelineBox from "components/ParallaxTimelineBox";
import VisualBox from "components/VisualBox";
import ParallaxTimelineBox2 from "components/ParallaxTimelineBox2";

const initialSettings: ISettings = {
  width: 300,
  height: 400
};
const Home: React.FC = props => {
  const [settings, dispatchSettings] = useReducer(
    settingsReducer,
    initialSettings
  );

  useEffect(() => {
    //
  }, []);

  return (
    <div>
      <VisualBox />
      <ParallaxBox
        title="SECTION 1"
        style={{
          minHeight: 600,
          background: "#f0f0f0"
        }}
      />
      <OverPackBox
        title="SECTION 2"
        style={{
          minHeight: 600,
          background: "#fff"
        }}
      />
      <ParallaxTimelineBox
        title="SECTION 3"
        style={{
          minHeight: 600,
          background: "#ccc"
        }}
      />
      <ParallaxTimelineBox2
        title="SECTION 4"
        style={{
          minHeight: 600,
          background: "#fff"
        }}
      />
      <ParallaxTimelineBox
        title="SECTION 5"
        style={{
          minHeight: 600,
          background: "#ccc"
        }}
      />
      <div style={{ height: 500 }} />
    </div>
  );
};

export default Home;
