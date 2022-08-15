import React from "react";
import ReactDOM from "react-dom/client";
import { Section } from "./components/Section.js";
import { Navbar } from "./components/Nav.js";
import style from "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Navbar></Navbar>
    <Section bg="#4D88D9" title="React" id="react"></Section>
    <Section bg="blue" title="Components" id="components"></Section>
    <Section bg="#282c34" title="Elements" id="elements"></Section>
    <Section bg="#61d7d3" title="Props" id="props"></Section>
    <Section bg="red" title="State" id="state"></Section>
  </>
);
