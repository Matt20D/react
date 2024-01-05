const winningIndexes =
    [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

const MathUtils = {

    // Sum an array
    sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

    // create an array of numbers between min and max (edges included)
    range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

    // pick a random number between min and max (edges included)
    random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

    // Given an array of numbers and a max...
    // Pick a random sum (< max) from the set of all available sums in arr
    randomSumIn: (arr, max) => {
        const sets = [[]];
        const sums = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0, len = sets.length; j < len; j++) {
                const candidateSet = sets[j].concat(arr[i]);
                const candidateSum = MathUtils.sum(candidateSet);
                if (candidateSum <= max) {
                    sets.push(candidateSet);
                    sums.push(candidateSum);
                }
            }
        }
        return sums[MathUtils.random(0, sums.length - 1)];
    },

    isTicTacToeOver: (gameBoard, id) => {

        for (let i = 0; i < winningIndexes.length; i++) {
            let actualIndexes = winningIndexes[i];
            let foundWinner = true;

            for (let j = 0; j < actualIndexes.length; j++) {
                if (id !== gameBoard[actualIndexes[j]]) {
                    foundWinner = false;
                    break;
                }
            }

            if (foundWinner) {
                return { hasWon: true, winningIndexes: actualIndexes };
            }
        }

        return { hasWon: false, winningIndexes: [] };
    },

    randomStartingUser: Math.random() > 0.5 ? true : false,

    computerRandomGridChoice: (array) => array[Math.floor(Math.random() * array.length)],

    compareWordWithGameBoard: (wordArray, gameBoard) => {

        return wordArray.length === gameBoard.length && wordArray.every((val, idx) => { return val === gameBoard[idx] });

    }
};

export default MathUtils;