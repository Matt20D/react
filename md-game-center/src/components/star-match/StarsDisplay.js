import MathUtils from '../commons/MathUtils.js';

const StarsDisplay = props => (
    <>
        {MathUtils.range(1, props.count).map(starId =>
            <div key={starId} className="star" />
        )}
    </>
);

export default StarsDisplay;