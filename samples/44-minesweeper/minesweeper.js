'strict';

var BOARD_W = 10;
var BOARD_H = 10;
var mines_count = 10;

window.addEventListener('load', function () {
	const windlg = document.getElementById("windlg");
	const restart_btn = document.getElementById("restart");
	const reset_btn = document.getElementById("reset");
	const board = document.getElementById("board");
	const board_array = new Array();
	const left_count_element = document.getElementById("left-count");
	board.left_cover_count = BOARD_W*BOARD_H-mines_count;
	board.xget = function xget(y, x) {
		if (x >= BOARD_W || x < 0 || y >= BOARD_H || y < 0)
			return undefined;
		return board_array[y*BOARD_W+x];
	};

	board.mines_count = function mines_count(y, x) {
		let s = 0;
		for (let i = y-1; i <= y+1; ++i) {
			for (let j = x-1; j <= x+1; ++j) {
				let c = this.xget(i, j);
				if (c) {
					s += c.hasOwnProperty('has_mine') && c.has_mine ? 1 : 0;
				}
			}
		}
		return s;
	};

	board.uncover = function uncover(y, x) {
		let c = this.xget(y ,x);
		// Already uncovered
		if (!c.classList.contains("cover"))
			return;
		board.left_cover_count -= 1;
		update_covert_count();
		c.classList.remove("cover");
		if (c.hasOwnProperty('has_mine') && c.has_mine) {
			// TODO: LOSER !! :D
			c.classList.add("red");
			c.innerHTML = "*";
		} else {
			const count = board.mines_count(c.y, c.x);
			if (count > 0) {
				c.innerHTML = new String(count);
			} else {
				// Uncover neibors in recursive mode.
				if (c.y > 0) this.uncover(c.y-1,c.x);
				if (c.x > 0) this.uncover(c.y,c.x-1);
				if (c.y < BOARD_H-1) this.uncover(c.y+1,c.x);
				if (c.x < BOARD_W-1) this.uncover(c.y,c.x+1);

				if (c.y > 0 && c.x > 0) this.uncover(c.y-1,c.x-1);
				if (c.y > 0 && c.x < BOARD_W-1) this.uncover(c.y-1,c.x+1);
				if (c.y < BOARD_H-1 && c.x > 0) this.uncover(c.y+1,c.x-1);
				if (c.y < BOARD_H-1 && c.x < BOARD_W-1) this.uncover(c.y+1,c.x+1);
			}
		}
	}

	function update_covert_count() {
		left_count_element.innerHTML = new String(board.left_cover_count);
	}

	function reset() {
		current_color = 'red';
		board.left_cover_count = BOARD_W*BOARD_H-mines_count;
		update_covert_count();

		board.style.gridTemplateColumns  = `repeat(${BOARD_W},20px)`;
		board.style.gridTemplateRows = `repeat(${BOARD_H},20px)`;

		/* Remove all child nodes */
		while (board.firstChild) {
			board.removeChild(board.lastChild);
		}

		for (let i = 0; i < BOARD_H; i++) {
			for (let j = 0; j < BOARD_W; j++) {
				let c = document.createElement('div');
				c.classList.add("cell");
				c.classList.add("cover");
				c.x = j;
				c.y = i;
				board.appendChild(c);
				board_array.push(c);
			}
		}

		// Gen board mines
		let set = board_array.slice(); // Clone the array
		mines_count = mines_count > set.length ? set.length : mines_count;
		for(let i = 0; i < mines_count; ++i) {
			const n = Math.floor(Math.random() * set.length);
			const c = set[n];
			c.has_mine = true;
			//c.classList.add("red");
			set.splice(n, 1); // Remove one element
		}

		// Hide win dialog box
		windlg.style.display = 'none';

		// Display board and reset button
		reset_btn.style.display = 'block';
		board.style.display = 'grid';

		for (const e of board_array) {
			e.addEventListener('click', function(ev) {
				board.uncover(e.y, e.x);
			});
		}
	}

	document.getElementById("reset").addEventListener('click', reset);
	document.getElementById("restart").addEventListener('click', reset);
	reset();
});

