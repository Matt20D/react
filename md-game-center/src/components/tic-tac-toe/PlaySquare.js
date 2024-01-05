const PlaySquare = props => (
    <button
        className="number"
        style={{ backgroundColor: colors[props.status] }}
        onClick={() => props.onClick(props.squareId, props.status, props.isUserTurn)}
    >
    </button>
);

// Color Theme
const colors = {
    available: 'deepskyblue',
    usedByUser: 'lightgreen',
    usedByComputer: 'lightcoral',
};

export default PlaySquare;