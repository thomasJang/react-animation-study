import React, { useEffect, useReducer } from "react";
import "styles/global";
import { ISettings } from "common/interfaces";
import { settingsReducer } from "store";
import ContentBox from "components/ContentBox";

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
      <ContentBox
        title="SECTION 1"
        style={{
          height: 600,
          background: "#ccc"
        }}
      />
      <ContentBox
        title="SECTION 2"
        style={{
          height: 600,
          background: "#fff"
        }}
      />
      <ContentBox
        title="SECTION 3"
        style={{
          height: 600,
          background: "#ccc"
        }}
      />
      <ContentBox
        title="SECTION 4"
        style={{
          height: 600,
          background: "#fff"
        }}
      />
    </div>
  );
};

export default Home;
