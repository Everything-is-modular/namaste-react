// const heading = React.createElement('h1', {id: 'heading-1'}, 'Rendering React')
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)

// Nested Structure in React
const parent = React.createElement(
  "div",
  { id: "parent-tag" },
  React.createElement("div", { id: "child-tag" }, [
    // Siblings
    React.createElement("h1", { id: "1st-h1" }, "This is h1 tag"),
    React.createElement("h1", { id: "2nd-h1" }, "This is 2nd h1 tag"),
  ])
);

const header = ReactDOM.createRoot(document.getElementById("header"));
const bottomBar = ReactDOM.createRoot(document.getElementById("bottomBar"));
header.render(parent);
bottomBar.render(parent);
