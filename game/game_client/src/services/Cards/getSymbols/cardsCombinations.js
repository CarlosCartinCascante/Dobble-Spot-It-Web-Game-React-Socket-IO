export default function generate() {
	let i, j, k
	let n = 3                 //order of plane, must be a prime number
	//let numOfSymbols = n + 1  //order of plane + 1
	let cards = [] //the deck of cards
	let card = []; //the current card we are building
	//to start, we build the first card
	for (i = 1; i <= n + 1; i++) {
		card.push(i)
	}
	cards.push(card)
	//then we build the next n number of cards
	for (j = 1; j <= n; j++) {
		card = []
		card.push(1)

		for (k = 1; k <= n; k++) {
			card.push(n * j + (k + 1))
		}
		cards.push(card)
	}
	//finally we build the next n² number of cards
	for (i = 1; i <= n; i++) {
		for (j = 1; j <= n; j++) {
			card = []
			card.push(i + 1)

			for (k = 1; k <= n; k++) {
				card.push(n + 2 + n * (k - 1) + (((i - 1) * (k - 1) + j - 1) % n))
			}
			cards.push(card)
		}
	}

	shuffle(cards);

	return cards;
}

function shuffle(array) {
	let currentIndex = array.length, randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex !== 0) {

		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
	}

	return array;
}
