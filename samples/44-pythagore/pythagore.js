window.addEventListener('load',

	() => {
    let a = 200, b = 550
    let delay = 600

    let svg = d3.select('#container_pythagore')
		  .append('svg')
		  // would need to compute the border + padding for svg
      //.attr('width', function(){FOO=this; console.log(this); return a+b;})
      .attr('width', a+b+8)
      .attr('height', a+b+8)
      .attr("xmlns", "http://www.w3.org/2000/svg")


    let background = svg.append('rect')
      .attr('class', 'background')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', a+b)
      .attr('height', a+b)

    // left most
    function t1_path() { return `M ${a} 0 l ${-a} ${b} l 0 ${-b} Z` }
    // left internal
    function t2_path() { return `M ${a} 0 l ${-a} ${b} l ${a} 0 Z` }
    // lowest
    function t3_path() { return `M ${a} 0 l ${b} ${a} l ${-b} 0 Z` }
    // low internal
    function t4_path() { return `M ${a} 0 l ${b} ${a} l 0 ${-a} Z` }

    let transform_neutral = 'translate(0,0) rotate(0,0,0)'
    let t1 = svg.append('path')
      .attr('id', 't1')
      .attr('class', 'triangle')
      .attr('d', t1_path())
      .attr('transform', transform_neutral)

    let t2 = svg.append('path')
      .attr('id', 't2')
      .attr('class', 'triangle')
      .attr('d', t2_path())
      .attr('transform', transform_neutral)

    // t3 and t4 are created so that theit translate() transform is neutral once they are up
    let transform_initial = 'translate(0,' + b + ') rotate(0,0,0)'
    let t3 = svg.append('path')
      .attr('id', 't3')
      .attr('class', 'triangle move_up')
      .attr('d', t3_path())
      .attr('transform', transform_initial)

    let t4 = svg.append('path')
      .attr('id', 't4')
      .attr('class', 'triangle move_up')
      .attr('d', t4_path())
      .attr('transform', transform_initial)


    let text_a = svg.append('text')
      .attr('x', a/2)
      .attr('y', b+(a/2))
      .attr('id', 'a2')
      .html('<tspan>a²</tspan>')
      .attr('class', 'legend text_before')


    let text_b = svg.append('text')
      .attr('x', a + (b/2))
      .attr('y', b/2)
      .attr('id', 'b2')
      .html('<tspan>b²</tspan>')
      .attr('class', 'legend text_before')


    let text_c = svg.append('text')
      .attr('x', (a+b)/2)
      .attr('y', (a+b)/2)
      .html('<tspan>c²</tspan>')
      .attr('class', 'legend text_after')
      .attr('display', 'none')


    let rect = svg.append('rect')
      .attr('id', 'foo')
      .attr('x', 800)
      .attr('y', 800)
      .attr('width', 100)
      .attr('height', 100)


    ////////////////////
    function move_up() {
      svg.selectAll(".move_up")
        .transition()
        .duration(delay)
        .attrTween(
          'transform',
          function(d, i) {
            return d3.interpolateTransformSvg(
              transform_initial, transform_neutral)
          })
    }

    ////////////////////
    function turn_right() {
      svg.selectAll("#t2")
        .transition()
        .duration(delay)
        .attrTween('transform',
          function(d, i) {
          return d3.interpolateTransformSvg(
            transform_neutral,
            'translate(0,0) rotate(90,0,' + b + ')')
          })
    }

    function turn_left() {
      svg.selectAll('#t3')
        .transition()
        .duration(delay)
        .attrTween('transform',
          function(d, i) {
          return d3.interpolateTransformSvg(
            transform_neutral,
            'translate(0,0) rotate(-90,' + (a+b) + ',' + a + ')')
          })
    }

    function switch_texts() {
      svg.selectAll('.text_before')
          .transition()
          .duration(delay)
          .attr('display', 'none')
      svg.selectAll('.text_after')
          .transition()
          .duration(delay)
          .attr('display', 'on')
    }

    function switch_back_texts() {
      svg.selectAll('.text_after')
        .transition()
        .duration(delay)
        .attr('display', 'none')
      svg.selectAll('.text_before')
        .transition()
        .duration(delay)
        .attr('display', 'on')
    }

    function turn() {
      console.log('turn')
      turn_right()
      turn_left()
      switch_texts()
      return true
    }

    ////////////////////
    function reset() {
      switch_back_texts()
      svg.select('#t2')
        .transition()
        .duration(delay)
        .attrTween('transform',
          function(d, i) {
          let previous_transform = this.getAttribute("transform")
          return d3.interpolateTransformSvg(
            previous_transform, transform_neutral)
          })

      svg.select('#t3')
        .transition()
        .duration(delay)
        .attrTween('transform',
          function(d, i) {
          let previous_transform = this.getAttribute("transform")
          return d3.interpolateTransformSvg(
            previous_transform, transform_initial)
          })

      svg.select('#t4')
        .transition()
        .duration(delay)
        .attrTween('transform',
          function(d, i) {
          let previous_transform = this.getAttribute("transform")
          return d3.interpolateTransformSvg(
            previous_transform, transform_initial)
          })

    }

    ////////////////////
    let step = 0

    function go() {
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

    function keydown(event) {
		//console.log("keydown", event.which)
		switch (event.which) {
			case 40: // down
			case 39: // right
			case 34: // page down
			case 37: // left
			case 38: // up
			case 33: // page up
				go()
				event.preventDefault()
				break
		}
	}

  document.addEventListener('keypress', (event)=>go())
  document.addEventListener('keydown', keydown)
	document.getElementById("go").addEventListener('click', go)
})