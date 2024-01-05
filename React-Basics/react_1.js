function Hello() {
	return <div>Hello React!</div>; // this line is JSX, and is not executable. This will be compiled to browser
              // compilable code. See below, for compilable call
              // React.createElement('div', null, 'Hello React')
}

ReactDOM.render(
  <Hello />, // component to render
             // React.createElement(Hello, null)
  document.getElementById('mountNode'), // dom element in the browser where we would like to show up
);

// *** The React 18 way:
// root.render(
//   <Hello />, 
// );