function logRandom() {
    console.log(Math.random());
}

// function ButtonDoubler() {
// 	const [counter, setCounter] = useState(5);
// 	return <button onClick={() => setCounter(counter*2)}>{counter}</button>;
// }

function Button() { // Component name must begin with a Upper Camel

    // a, b = useState()
    // [counter, setCounter] = useState() 

    const [counter, setCounter] = useState(0); // use state is a hook, it hooks a small component into a state.
    
    const handleClick = () => setCounter(counter + 1)

    return (
        <button onClick={handleClick}>
            {counter}
        </button>
    );
}

function Display() {
    return (
        <div>
            ...
        </div>
    )
}

function AppComponent() {
    return (
        <div>
            <Button />
            <Display />
        </div>
    );
}

// render can only take one element b/c it gets translated over to function calls.
ReactDOM.render(
    // [<Button />, <Display />], // normally do that if there is a group of elements that we want to display dynamically
    
    // <div>
    //     <Button />
    //     <Display />
    // </div>,

    // <>
    //     <Button />
    //     <Display />
    // </>,

    // <React.Fragment>
    //     <Button />
    //     <Display />
    // </React.Fragment>,

    <AppComponent />,
    document.getElementById('mountNode'),
);