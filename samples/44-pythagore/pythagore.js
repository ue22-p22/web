window.addEventListener('load',

  () => {
    let [a, b] = [100, 300]
    let [delay_geom, delay_text] = [600, 1200]

    let svg = d3.select('#container-pythagore')
      .append('svg')
      // would need to compute the border + padding for svg
      .attr('width', a + b + 8)
      .attr('height', a + b + 8)
      .attr("xmlns", "http://www.w3.org/2000/svg")


    let background = svg.append('rect')
      .attr('class', 'background')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', a + b)
      .attr('height', a + b)

    // remember the svg coordinate system has y=0 UP and y increases as we go down
    // used when resetting things
    const transform_neutral = `translate(0, 0) rotate(0, 0, 0)`
    const transform_up = `translate(0, -${b}) rotate(0, 0, 0)`
    const transform_down = `translate(0, ${a}) rotate(0, 0, 0)`

    // left most - this one won't move
    svg.append('path')
      .attr('id', 't1')
      .attr('class', 'triangle')
      .attr('d', `M ${a} 0 l ${-a} ${b} l 0 ${-b} Z`)
    // .attr('transform', transform_neutral)

    // left internal, will turn 90° clockwise
    svg.append('path')
      .attr('id', 't2')
      .attr('class', 'triangle reset')
      .attr('d', `M ${a} 0 l ${-a} ${b} l ${a} 0 Z`)
    // .attr('transform', transform_neutral)

    // lowest - will move up, then turn 90° anti-clockwise
    svg.append('path')
      .attr('id', 't3')
      .attr('class', 'triangle move_up reset')
      .attr('d', `M ${a} ${b} l ${b} ${a} l ${-b} 0 Z`)
    // .attr('transform', transform_neutral)

    // low internal - will just move up with t3
    svg.append('path')
      .attr('id', 't4')
      .attr('class', 'triangle move_up reset')
      .attr('d', `M ${a} ${b} l ${b} ${a} l 0 ${-a} Z`)
    // .attr('transform', transform_neutral)


    svg.append('text')
      .attr('id', 'a2')
      .attr('class', 'legend a_or_b')
      .attr('opacity', 1)
      .attr('x', a / 2)
      .attr('y', b + (a / 2))
      .html('<tspan>a²</tspan>')

    svg.append('text')
      .attr('id', 'b2')
      .attr('class', 'legend a_or_b')
      .attr('opacity', 1)
      .attr('x', a + (b / 2))
      .attr('y', b / 2)
      .html('<tspan>b²</tspan>')

    svg.append('text')
      .attr('id', 'c2')
      .attr('class', 'legend')
      .attr('opacity', 0)
      .attr('x', (a + b) / 2)
      .attr('y', (a + b) / 2)
      .html('<tspan>c²</tspan>')


    svg.append('rect')
      .attr('id', 'foo')
      .attr('x', 800)
      .attr('y', 800)
      .attr('width', 100)
      .attr('height', 100)

    // interpolate between current transform
    // and a specified target
    function transform_helper(elt, target_transform) {
      let previous_transform = elt.getAttribute("transform")
      return d3.interpolateTransformSvg(previous_transform, target_transform)
    }

    ////////////////////
    function move_up() {
      svg.
        selectAll(".move_up")
        .transition()
        .duration(delay_geom)
        .attrTween('transform', function (d, i) {
          return transform_helper(this, transform_up)
        })

      // move the b square label down to end in the middle of its square
      svg
        .select("#b2")
        .transition()
        .duration(delay_geom)
        .attrTween('transform', function (d, i) {
          return transform_helper(this, transform_down)
        })
    }

    ////////////////////
    function turn_right() {
      svg
        .selectAll("#t2")
        .transition()
        .duration(delay_geom)
        .attrTween('transform', function (d, i) {
          return transform_helper(this, `rotate(90, 0, ${b})`)
        })
    }

    function turn_left() {
      svg
        .selectAll('#t3')
        .transition()
        .duration(delay_geom)
        .attrTween('transform', function (d, i) {
          // composite transform:
          // we first translate (which actually is its current transform)
          // and then rotate around the point (a+b, a)
          // counter-intuitively the order is reversed
          return transform_helper(this, `rotate(-90, ${a + b}, ${a}) translate(0, -${b})`)
        })
    }

    function texts_ab_off_c_on() {
      svg
        .selectAll('.a_or_b')
        .transition()
        .duration(delay_text)
        .attr('opacity', 0)
      svg
        .selectAll('#c2')
        .transition()
        .duration(delay_text)
        .attr('opacity', 1)
    }

    function turn() {
      turn_right()
      turn_left()
      texts_ab_off_c_on()
      return true
    }

    ////////////////////
    function reset() {
      svg.selectAll('.reset')
        .transition()
        .duration(delay_geom)
        .attrTween('transform', function (d, i) {
          return transform_helper(this, transform_neutral)
        })

      svg
        .select('#a2')
        .transition()
        .duration(delay_text)
        .attr('opacity', 1)
      svg
        .select('#c2')
        .transition()
        .duration(delay_text)
        .attr('opacity', 0)
      // unfortunately if we do these 2 things as part of more general select's
      // only only one gets done
      svg
        .select('#b2')
        .transition()
        .duration(delay_text)
        .attr('opacity', 1)
        .duration(delay_geom)
        .attrTween('transform', function (d, i) {
          return transform_helper(this, transform_neutral)
        })

    }

    ////////////////////
    // will cycle: 0=start, 1=moved, 2=turned, and back to 0
    let step = 0

    function next_step() {
      let go = document.getElementById('go')
      if (step == 0) {
        move_up()
        go.classList.remove("btn-success")
        go.classList.add("btn-info")
        go.textContent = 'Continue ...'
        step = 1
      } else if (step == 1) {
        turn()
        go.classList.remove("btn-info")
        go.classList.add('btn-danger')
        go.textContent = 'Reset'
        step = 2
      } else {
        reset()
        go.classList.remove("btn-danger")
        go.classList.add('btn-success')
        go.textContent = 'Go !'
        step = 0
      }
    }

    document.addEventListener('keypress', (event) => next_step())
    document.getElementById("go").addEventListener('click', next_step)
  })
