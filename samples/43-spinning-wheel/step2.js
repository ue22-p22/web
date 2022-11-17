// the constant required to create <svg>-related
// DOM nodes -- used in createElementNS below
// NS stands for NameSpace
const svgNS = "http://www.w3.org/2000/svg";

// I have used the convention that methods starting with _
// are not supposed to be called from the outside
// like kind of private methods
class SpinningWheel {

    // just record parameters
    constructor(svg,
                cx, cy, cr,
                dots, dot_r,
                period,
                rgb_light, rgb_dark) {
        this.svg = svg;
        this.cx = cx;
        this.cy = cy;
        this.cr = cr;
        this.dots = dots;
        this.dot_r = dot_r;
        // duration between 2 dots
        this._period = period/dots;
        // unpack both lists
        // we will need them to interpolate between both
        [this.redl, this.greenl, this.bluel] = rgb_light;
        [this.redd, this.greend, this.blued] = rgb_dark;
        ////// internal data
        // angle where we start
        this._offset = 0;
        // angle between 2 dots
        this._theta = 2 * Math.PI / this.dots;
        // so we can suspend it
        this.active = true;
    }

    // all computations are made in a space where
    // index 0 = angle 0
    // index n = _theta * n
    // (so moving counter clockwise)
    // however that does not match the desired visual
    // this method adapts for that
    // effect, we are used to see the gap at the 12th hand in the clock
    // and to turn clockwise
    //
    // n is an index in range [0 .. this.dots]
    _alpha(n) {
        return - n * this._theta - Math.PI/2;
    }

    // same meaning for n, computes the dots center
    _x_y (n) {
        let alpha = this._alpha(n);
        return [
            this.cx + this.cr * Math.cos(alpha),
            this.cy + this.cr * Math.sin(alpha),
        ]
    }

    // does color interpolation
    // 0      -> dark-color
    // dots-1 -> light-color
    _color(n) {
        // stay in range
        n = n % this.dots;
        // grayscale for starters
        let ratio = (n/this.dots);
        return `rgb(
            ${this.redd + ratio*(this.redl-this.redd)},
            ${this.greend + ratio*(this.greenl-this.greend)},
            ${this.blued + ratio*(this.bluel-this.blued)})`;
        }

    // create as many svg 'circle' nodes as this.dots
    init() {
        for (let index=0; index < this.dots; index ++) {
            let dot = document.createElementNS(svgNS, 'circle');
            let [x, y] = this._x_y(index);
            dot.setAttribute('cx', x);
            dot.setAttribute('cy', y);
            dot.setAttribute('r', this.dot_r);
            dot.style.fill = this._color(index);
            this.svg.append(dot);
        }
    }

}

function create_spinning_wheel(svg) {
    let spin = new SpinningWheel(
        svg, 100, 100, 80,
        12, 18,
        700,
        [100, 240, 145], [80, 60, 120]);
    return spin;
}

window.addEventListener(
    "load", 
    () => create_spinning_wheel(
        document.getElementById("spin")).init())
