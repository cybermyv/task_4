(function() {
	'use strict';

	const chessDimension = 10;
	const edgingBoardSymbol = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' ];
	const chessBoard = document.querySelector('.chessBoard');

	for (let i = 0; i < chessDimension; i++) {
		const row = chessBoard.insertRow(i);

		for (let j = 0; j < chessDimension; j++) {
			const cell = row.insertCell(j);

			i === 0 || i === chessDimension - 1 ? cell.classList.add('edging') : cell.setAttribute('data-cell-x', i);
			j === 0 || j === chessDimension - 1 ? cell.classList.add('edging') : cell.setAttribute('data-cell-y', j);
		}
	}

	for (let i = chessDimension - 2; i > 0; i--) {
		chessBoard.rows[chessDimension - 1 - i].cells[0].innerHTML = i;

		if (i % 2) {
			for (let j = 1; j < chessDimension - 1; j++) {
				j % 2 ? chessBoard.rows[chessDimension - 1 - i].cells[j].classList.add('cellBlack') : '';
			}
		} else {
			for (let j = 1; j < chessDimension - 1; j++) {
				j % 2 ? '' : chessBoard.rows[chessDimension - 1 - i].cells[j].classList.add('cellBlack');
			}
		}
	}

	for (let i = 1; i < chessDimension - 1; i++) {
		chessBoard.rows[chessDimension - 1].cells[i].innerHTML = edgingBoardSymbol[i - 1];
	}

	chessBoard.addEventListener('click', (event) => {
		const td = event.target.closest('td');
		console.log(td);
	});
})();
