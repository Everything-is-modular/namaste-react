// const heading = React.createElement('h1', {id: 'heading-1'}, 'Rendering React')
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)
import React from "react";
import ReactDOM from "react-dom/client";

// Nested Structure in React
// const parent = React.createElement(
//   "div",
//   { id: "parent-tag" },
//   React.createElement("div", { id: "child-tag" }, [
//     // Siblings
//     React.createElement("h1", { id: "1st-h1" }, "This is h1 tag"),
//     React.createElement("h1", { id: "2nd-h1" }, "This is 2nd h1 tag"),
//   ])
// );

// const header = ReactDOM.createRoot(document.getElementById("header"));
// const bottomBar = ReactDOM.createRoot(document.getElementById("bottomBar"));
// header.render(parent);
// bottomBar.render(parent);


//React Element
const heading = (
  <h1 className="heading-element">
    This is a react element
  </h1>
)

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)

//React Functional Component
const HeadingComponent = () => (
  <h1 className="heading-element">
    This is a react Functional component
  </h1>
)

const HeadingComponentV2 = () => {
  return (
    <h1 className="heading-element">
    This is a react Functional component v2
    </h1>
  )
}

const MixComponent = () => {
  return (
    <div className="container">
    Container
    {heading}
    {/* {HeadingComponent()} */}
    {/* <HeadingComponent /> */}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<HeadingComponent />)
root.render(<MixComponent />)
