function Button(props) {
    
    return (
        <button onClick={props.onClickFunction}>
            +1
        </button>
    );
}

function Display(props) {
    return (
        <div>
            {props.message}
        </div>
    )
}

// we are doing some parameter isolation here now! Seperating out these responsibility.

// parent components can pass down behvaior and props down to child components
function AppComponent() {

    const [counter, setCounter] = useState(42); // use state is a hook, it hooks a small component into a state.
    const incrementCounter = () => setCounter(counter + 1)

    // lets pass some props.
    // they can hold function references, as well as data
    return (
        <div>
            <Button onClickFunction={incrementCounter} />
            <Display message={counter} /> 
        </div>
    );
}

// render can only take one element b/c it gets translated over to function calls.
ReactDOM.render(
    <AppComponent />,
    document.getElementById('mountNode'),
);