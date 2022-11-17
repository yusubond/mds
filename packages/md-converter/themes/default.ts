import { Theme } from "./types";

let baseColor = `#3f3f3f`;

export const defaultTheme: Theme = {
  common: {
    "text-align": `left`,
    "line-height": `1.75`,
  },
  heading: {
    // 一级标题样式
    h1: {
      "font-size": `1.2em`,
      "text-align": `center`,
      "font-weight": `bold`,
      display: `table`,
      margin: `2em auto 1em`,
      padding: `0 1em`,
      "border-bottom": `2px solid rgba(0, 152, 116, 0.9)`,
      color: baseColor,
    },
    // 二级标题样式
    h2: {
      "font-size": `1.2em`,
      "text-align": `left`,
      "font-weight": `bold`,
      // display: `table`,
      margin: `2em auto 1em`,
      padding: `0 0.2em`,
      //   background: `rgba(0, 152, 116, 0.9)`,
      color: baseColor,
    },
    // 三级标题样式
    h3: {
      "font-weight": `bold`,
      "font-size": `1.1em`,
      margin: `1.5em 8px 0.75em 0`,
      "line-height": `1.2`,
      "padding-left": `8px`,
      "border-left": `3px solid rgba(0, 152, 116, 0.9)`,
      color: baseColor,
    },
    // 四级标题样式
    h4: {
      "font-weight": `bold`,
      "font-size": `1em`,
      margin: `1em 8px 0.5em`,
      color: `rgba(66, 185, 131, 0.9)`,
    },
  },
  paragraph: {
    margin: `1em 8px`,
    "letter-spacing": `0.1em`,
    color: baseColor,
  },
  list: {
    ol: {
      "margin-left": `0`,
      "padding-left": `1em`,
      color: baseColor,
    },
    ul: {
      "margin-left": `0`,
      "padding-left": `1em`,
      "list-style": `disc`,
      color: baseColor,
    },
  },
  listItem: {
    margin: `0.2em 8px`,
    color: baseColor,
  },
  quote: {
    "font-style": `normal`,
    "border-left": `none`,
    padding: `1em 1em`,
    "border-radius": `8px`,
    color: `rgba(0,0,0,0.5)`,
    background: `#f7f7f7`,
    margin: `0`,
  },
  hr: {
    "border-style": `solid`,
    "border-width": `1px 0 0`,
    "border-color": `rgba(0,0,0,0.1)`,
    "-webkit-transform-origin": `0 0`,
    "-webkit-transform": `scale(1, 0.5)`,
    "transform-origin": `0 0`,
    transform: `scale(1, 0.5)`,
  },
  link: {
    color: `#576b95`,
  },
  // 字体加粗样式
  strong: {
    color: `rgba(15, 76, 129, 0.9)`,
    "font-weight": `bold`,
  },
  em: {
    "font-style": "italic",
  },
};
