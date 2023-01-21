import "./styles";
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { tinyassert } from "@hiogawa/utils"

function main() {
  const el = document.querySelector("#root");
  tinyassert(el)
  const root = createRoot(el);
  root.render(React.createElement(App));
}

main();
