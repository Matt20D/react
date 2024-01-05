function Button(props) {
    const handleClick = () => props.onClickFunction(props.incrementValue);

    // onClick needs to have a function ref not invocation. Thus, move it out to a const function on line 2
    return (
        <button onClick={handleClick}>
            +{props.incrementValue}
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
    const incrementCounter = (val) => setCounter(counter + val)

    // lets pass some props.
    // they can hold function references, as well as data
    return (
        <div>
            <Button onClickFunction={incrementCounter} incrementValue={1} />
            <Button onClickFunction={incrementCounter} incrementValue={5} />
            <Button onClickFunction={incrementCounter} incrementValue={10} />
            <Button onClickFunction={incrementCounter} incrementValue={100} />
            <Display message={counter} /> 
        </div>
    );
}

// render can only take one element b/c it gets translated over to function calls.
ReactDOM.render(
    <AppComponent />,
    document.getElementById('mountNode'),
);