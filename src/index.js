import React from "react";
import ReactDOM from "react-dom/client";
import MyPageContext from "./components/MyPageContext";
// import { App } from "./context/ThemeContext";
// import { Section } from "./components/Section";
// import { Navbar } from "./components/Nav";
// // import { Button } from "./components/HandleElement";
// // import { Input } from "./components/InputHandle";
// // import { Card } from "./components/Card";
// import { Button } from "./components/Fetch";
// import { Counter } from "./components/Count";
// import { Div } from "./components/Ref";
// import { Form } from "./components/Validate";
import "./style.css";
// import { Counter } from "./components/CountReducer";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <Navbar></Navbar>
    <Section bg="#4D88D9" title="React" id="react"></Section>
    <Section bg="blue" title="Components" id="components"></Section>
    <Section bg="#282c34" title="Elements" id="elements"></Section>
    <Section bg="#61d7d3" title="Props" id="props"></Section>
    <Section bg="red" title="State" id="state"></Section>
    <Section bg="black" title="Prop Types" id="prop_types"></Section>
    <Section bg={"purple"} title="Prop Types" id="prop_types"></Section>
    <Button></Button>
    <Input></Input>
    <Button></Button> */}
    {/* <Counter></Counter> */}
    {/* <Div></Div> */}
    {/* <Form></Form> */}
    {/* <Counter /> */}
    {/* <App /> */}
    <MyPageContext></MyPageContext>
  </>
);
