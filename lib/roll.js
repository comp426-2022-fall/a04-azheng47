// function to randomly roll certain dice
function roll(sides, dice, rolls) {
        let sums = [];
	// for each round, roll all the dice and track the sum for that round
        for (let i = 0; i < rolls; i++) {
                let total = 0;
                for (let j = 0; j < dice; j++) {
                        let val = Math.floor(Math.random() * sides) + 1;
                        total += val;
                }
                sums[sums.length] = total;
        }
	// return the results as a string representing the json
        return JSON.stringify({"sides": sides, "dice": dice, "rolls": rolls, "results": sums});
}
// allow this function to be imported elsewhere
export {roll};
