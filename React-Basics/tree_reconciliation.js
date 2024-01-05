const render = () => {

    // wouldn't be able to touch the text box
    document.getElementById('mountNode').innerHTML = `
      <div>
        Hello HTML
        <input />
        <pre>${(new Date).toLocaleTimeString()}</pre>
      </div>
    `;
  
    // virtual dom changes the content of the pre-element whereas allowing me keep the other data
    // this is a declarative languge, we want a pre elem which gets updated. React will handle the dom for me.
    // we focus on data and state. Just manage the update the state, and not worry about reflecting the changes.
    ReactDOM.render(
        React.createElement(
          'div',
          null,
          'Hello React',
          React.createElement('input', null),
          React.createElement('pre', null, (new Date).toLocaleTimeString())
        ),
        document.getElementById('mountNode2')
      );
  };
  
  // cannot type anything inside the html render version, b/c it simply discards the mount node every time
  
  // Howeveer, if you type it in the react text box we are allowed to do it.
  // React, only changes the timestamp, not the text box node. It doesn't toss the mountNode2, where we are 
  // smart-diffing it.
  
  setInterval(render, 1000);