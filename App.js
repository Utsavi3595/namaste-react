// here Create Element eventually creates an Object with type H1 with attributes like id and xyz and childrens like the text we want to put in and then that object is passed in to render() function


/*
<div id="parent">
    <div id="child">
        <h1>I am an h1 tag </h1>
        <h2>I am an h2 tag </h2>
    </div>
    <div id="child2">
        <h1>I am an h1 tag </h1>
        <h2>I am an h2 tag </h2>
    </div>
</div>
*/
// const headingReact = React.createElement("h1", {
//     id: "heading", xyz: "ABC"}, "Hello World using React !");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(headingReact);


const parent = React.createElement("div", {id:"parent"}, 
   [ React.createElement("div", {id: "child"}, 
    [React.createElement("h1", {}, "I am an h1 tag"), 
    React.createElement("h2", {}, "I am an h2 tag")]),

    React.createElement("div", {id: "child2"}, 
        [React.createElement("h1", {}, "I am an h1 tag"), 
        React.createElement("h2", {}, "I am an h2 tag")])]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);