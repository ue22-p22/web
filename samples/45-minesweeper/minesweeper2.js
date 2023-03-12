"use strict"

window.addEventListener('load',
    () => {
        class Minesweeper {

            constructor(dom_id, cols, rows, pixels, nb_bombs) {
                this.dom_id = dom_id
                this.cols = cols
                this.rows = rows
                this.pixels = pixels
                this.nb_bombs = nb_bombs
            }

            init() {
                this.grid = document.getElementById(this.dom_id)
                this.grid.style.gridTemplateColumns = `repeat(${this.cols}, ${this.pixels}px)`
                document.getElementById('reset').addEventListener(
                    'click', () => this.reset())
                this.grid.addEventListener(
                    'click', (event) => this.click(event))
                document.getElementById('help').addEventListener(
                    'click', () => this.help())
                // click in the controls area to get some debug
                // and call refresh_status again
                document.getElementById('controls').addEventListener(
                    'click', () => this.refresh_status(true))
                this.reset()
            }

            reset() {
                // remove in case it is not the first game
                while (this.grid.firstChild)
                    this.grid.removeChild(this.grid.lastChild)
                const bombs = this.random_bombs()
                for (let i = 0; i < this.rows; i++)
                    for (let j = 0; j < this.cols; j++) {
                        const div = document.createElement('div')
                        div.classList.add('cell')
                        div.classList.add('hidden')
                        div.style.width = `${this.pixels}px`
                        div.style.height = `${this.pixels}px`
                        div.coords = { i: i, j: j, bomb: bombs.has(i * this.cols + j) }
                        // if (div.coords.bomb)
                        //     div.classList.add('bomb')
                        this.grid.append(div)
                    }
                this.alive = true
                this.refresh_status()
            }

            click(event) {
                // do not react between cells
                if (event.target.id == this.dom_id) return
                // do not play if game is over
                if (!this.alive)
                    return
                const div = event.target
                // the behaviour of modified-click
                if (event.altKey || event.metaKey) {
                    // behaviour depends on cell being unveiled or not
                    if (event.target.classList.contains('hidden')) {
                        this.set_unset_bomb(div)
                    } else {
                        this.clear_neighbors(div)
                    }
                    // the behaviour of plain click
                } else {
                    // if marked as bomb: we must leave a way
                    // to remove a bomb from an unveiled cell
                    // which is needed sometimes
                    if (div.classList.contains('suspect')) {
                        div.classList.remove('suspect')
                        return
                    }
                    // the usual behaviour is to expose the number
                    // of neightbor bombs
                    const { bomb } = div.coords
                    if (bomb) {
                        this.boom()
                        return
                    }
                    const nb_bombs = this.unveil(div)
                    if (nb_bombs == 0)
                        this.propagate(div)
                }
                this.refresh_status()
            }

            random_bombs() {
                let bombs = new Set()
                while (bombs.size < this.nb_bombs) {
                    bombs.add(Math.round(Math.random() * this.cols * this.rows))
                }
                return bombs
            }

            boom() {
                this.alive = false
                for (const div of this.grid.children) {
                    if (div.coords.bomb) {
                        div.classList.add('bomb')
                    }
                }
                this.refresh_status()
            }

            unveil(div) {
                const { i, j } = div.coords
                div.classList.remove('hidden')
                const nb_bombs = this.nb_neighbor_bombs(div)
                div.innerHTML = `${nb_bombs ? nb_bombs : ""}`
                div.coords.nb_bombs = nb_bombs
                return nb_bombs
            }

            // alternate clicks
            set_unset_bomb(div) {
                if (div.classList.contains('suspect'))
                    div.classList.remove('suspect')
                else
                    div.classList.add('suspect')
            }

            clear_neighbors(div) {
                // only on unveiled cells
                if (div.classList.contains('hidden'))
                    return
                // check the cell is eligible
                const suspects = this.neighbors(div)
                    .map((div) => div.classList.contains('suspect'))
                    .reduce((x, y) => x + y, 0)
                if (suspects != div.coords.nb_bombs)
                    return
                for (const ndiv of this.neighbors(div)) {
                    if (ndiv.classList.contains('suspect'))
                        continue
                    if (ndiv.classList.contains('hidden')) {
                        if (this.unveil(ndiv) == 0)
                            this.propagate(ndiv)
                        //console.log(`${ndiv.coords.i} x ${ndiv.coords.j} -> ${this.nb_bombs} (${ndiv.coords.nb_bombs})`)
                    }
                }
            }

            neighbors(div) {
                const { i, j } = div.coords
                const possible = [
                    [i - 1, j - 1], [i - 1, j], [i - 1, j + 1],
                    [i, j - 1], [i, j + 1],
                    [i + 1, j - 1], [i + 1, j], [i + 1, j + 1]]
                const is_in_frame = (i, j) => (i >= 0) && (i < this.rows) && (j >= 0) && (j < this.cols)
                let divs = []
                const div_at_i_j = (i, j) => this.grid.children.item(i * this.cols + j)
                for (const [i, j] of possible)
                    if (is_in_frame(i, j))
                        divs.push(div_at_i_j(i, j))
                return divs
            }

            nb_neighbor_bombs(div) {
                return this.neighbors(div)
                    .map((div) => div.coords.bomb)
                    .reduce((sum, current) => sum + current, 0)
            }

            // div is a place with no bomb
            // so it is safe to unveil all its neighbors
            propagate(div) {
                const { i, j } = div.coords
                for (const ndiv of this.neighbors(div)) {
                    // antiloop - ignore if already unveiled
                    if (!ndiv.classList.contains('hidden'))
                        continue
                    const nb_bombs = this.unveil(ndiv)
                    if (nb_bombs == 0)
                        this.propagate(ndiv)
                }
            }

            refresh_status(debug) {
                const nb_suspects =
                    this.grid
                        .querySelectorAll("div.suspect")
                        .length
                const nb_unveiled =
                    this.grid
                        .querySelectorAll("div:not(.hidden)")
                        .length
                const controls = document.getElementById('controls')
                const stat_bombs = document.getElementById('stat-bombs')
                const stat_cells = document.getElementById('stat-cells')
                stat_bombs.textContent = `${nb_suspects} / ${this.nb_bombs} bombs`
                stat_cells.textContent = `${nb_suspects + nb_unveiled} / ${this.rows * this.cols} cells`
                // GAME OVER AND WON
                if ((nb_suspects == this.nb_bombs) && (nb_suspects + nb_unveiled == this.rows * this.cols)) {
                    controls.classList.add('game-over')
                    this.alive = false
                } else {
                    controls.classList.remove('game-over')
                }
                // is the game alive ?
                if (this.alive) {
                    controls.classList.add('alive')
                } else {
                    controls.classList.remove('alive')
                }
                if (debug) {
                    console.log(`${nb_suspects} suspects and ${nb_unveiled} unveiled`)
                }
            }

            help() {
                const howto = document.getElementById("howto")
                howto.style.display = (window.getComputedStyle(howto).display == 'none') ? 'block' : 'none'
            }
        }

        new Minesweeper('grid', 10, 10, 30, 10).init()
    })
