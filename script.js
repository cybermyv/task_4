(function () {
	"use strict";

	const CHESS_DIMMENSION = 10;
	const EDGING_BOARD = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
	const chessBoard = document.querySelector('.chessBoard');

	function clearChessBord() {
		const allMove = document.querySelectorAll('.move');
		const horse = document.querySelector('.horse');

		if (horse) horse.classList.remove('horse');

		if (allMove) {
			allMove.forEach(el => {
				el.classList.remove('move');
			});
		}

	}

	function setMove(x, y) {
		x = Number(x);
		y = Number(y);

		if (x - 1 > 0) {
			if (y - 2 > 0) { chessBoard.rows[x - 1].cells[y - 2].classList.add('move'); }

			if (y + 2 < 9) { chessBoard.rows[x - 1].cells[y + 2].classList.add('move'); }
		}

		if (x + 1 < 9) {
			if (y - 2 > 0) { chessBoard.rows[x + 1].cells[y - 2].classList.add('move'); }

			if (y + 2 < 9) { chessBoard.rows[x + 1].cells[y + 2].classList.add('move'); }
		}

		if (x - 2 > 0) {
			if (y - 1 > 0) { chessBoard.rows[x - 2].cells[y - 1].classList.add('move'); }

			if (y + 1 < 9) { chessBoard.rows[x - 2].cells[y + 1].classList.add('move'); }
		}

		if (x + 2 < 9) {
			if (y - 1 > 0) { chessBoard.rows[x + 2].cells[y - 1].classList.add('move'); }

			if (y + 1 < 9) { chessBoard.rows[x + 2].cells[y + 1].classList.add('move'); }
		}
	}

	for (let i = 0; i < CHESS_DIMMENSION; i++) {
		const row = chessBoard.insertRow(i);

		for (let j = 0; j < CHESS_DIMMENSION; j++) {
			const cell = row.insertCell(j);

			i === 0 || i === CHESS_DIMMENSION - 1 ? cell.classList.add('edging') : cell.setAttribute('data-cell-x', i);

			j === 0 || j === CHESS_DIMMENSION - 1 ? cell.classList.add('edging') : cell.setAttribute('data-cell-y', j);
		}
	}

	for (let i = CHESS_DIMMENSION - 2; i > 0; i--) {
		chessBoard.rows[CHESS_DIMMENSION - 1 - i].cells[0].innerHTML = i;

		if (i % 2) {
			for (let j = 1; j < CHESS_DIMMENSION - 1; j++) {
				j % 2 ? chessBoard.rows[CHESS_DIMMENSION - 1 - i].cells[j].classList.add('cellBlack') : '';
			}
		} else {
			for (let j = 1; j < CHESS_DIMMENSION - 1; j++) {
				j % 2 ? '' : chessBoard.rows[CHESS_DIMMENSION - 1 - i].cells[j].classList.add('cellBlack');
			}
		}
	}

	for (let i = 1; i < CHESS_DIMMENSION - 1; i++) { chessBoard.rows[CHESS_DIMMENSION - 1].cells[i].innerHTML = EDGING_BOARD[i - 1]; }

	chessBoard.addEventListener('click', event => {
		const td = event.target.closest('td');

		if (td.hasAttribute('data-cell-x') && td.hasAttribute('data-cell-y')) {
			const cellX = td.getAttribute('data-cell-x');
			const cellY = td.getAttribute('data-cell-y');

			clearChessBord();
			setMove(cellX, cellY);

			td.classList.add('horse');
		}
	});
})();
