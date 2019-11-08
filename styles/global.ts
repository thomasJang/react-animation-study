import { createGlobalStyle } from "styled-components";

import "./antd-theme.less";

export const GlobalStyles = createGlobalStyle`
  .clearfix:before, .clearfix:after {
    content: " ";
    display: table;
  }
  .clearfix:after {
    clear: both;
  }

  html, body{
    height: 100%;  
  }

  [role="container"] {
    max-width: 600px;
  }
`;
