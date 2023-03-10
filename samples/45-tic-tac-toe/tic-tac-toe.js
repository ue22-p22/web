'strict';
/* TODO */

function check_win(color) {
	/* durty check with pattern */
	let grid_data = "";
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			let c = document.getElementById(`cell-${i}-${j}`);
			grid_data = grid_data+ (c.classList.contains(color)?"1":"0");
		}
	}

	if (
		grid_data.match(/111....../) ||
		grid_data.match(/...111.../) ||
		grid_data.match(/......111/) ||
		grid_data.match(/1..1..1../) ||
		grid_data.match(/.1..1..1./) ||
		grid_data.match(/..1..1..1/) ||
		grid_data.match(/1...1...1/) ||
		grid_data.match(/..1.1.1../)) {
		return true;
	}
	return false;
}


window.addEventListener('load', function () {
	let current_color = 'red';
	const windlg = document.getElementById("windlg");
	const restart_btn = document.getElementById("restart");
	const reset_btn = document.getElementById("reset");
	const board = document.getElementById("board");

	function reset() {
		current_color = 'red';
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				let c = document.getElementById(`cell-${i}-${j}`);
				c.classList.remove("red");
				c.classList.remove("green");
			}
		}

		// Hide win dialog box
		windlg.style.display = 'none';
		
		// Display board and reset button
		reset_btn.style.display = 'block';
		board.style.display = 'grid';
	}

	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			let c = document.getElementById(`cell-${i}-${j}`);
			c.addEventListener('click', function() {
				if (c.classList.contains("red") || c.classList.contains("green"))
					return;
				c.classList.add(current_color);
				if (check_win(current_color)) {
					windlg.firstElementChild.innerHTML = `<span class="${current_color}">${current_color}</span> win!!!`;

					// Show dialog box
					windlg.style.display = "block";

					// Hide board game
					board.style.display = "none";
					reset_btn.style.display = "none";
					
				}
				current_color = current_color == 'red' ? 'green' : 'red';
			});
		}
	}

	document.getElementById("reset").addEventListener('click', reset);
	document.getElementById("restart").addEventListener('click', reset);
});

