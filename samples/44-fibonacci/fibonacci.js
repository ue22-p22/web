window.addEventListener('load',
  () => {
    let golden = 0.5 * (1 + Math.sqrt(5.))
    let Wmax = 800
    let Wmin = Wmax / golden
    let usable = .85
    let delay = 600
    let visible_stroke = 2.

    let counter = 2
    // n and n-1 resp.
    let fib2 = 1
    let fib1 = 1

    ////////////////////
    let svg = d3.select('#container_fibonacci')
      .append('svg')
      .attr('width', Wmax)
      .attr('height', Wmax)
      .attr("xmlns", "http://www.w3.org/2000/svg")

    let background = svg.append('rect')
      .attr('class', 'background')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', Wmax)
      .attr('height', Wmax)


    let init_scale = (Wmax * usable) / fib2
    let init_transform = "scale(" + init_scale + "," + init_scale + ")"
    let scalable = svg.append('g')
      .attr('transform', init_transform)

    function prep() {
      svg.append('path')
        .attr('d', 'M 0 0 l ' + Wmax + ' ' + Wmin)
      svg.append('path')
        .attr('d', 'M 0 0 l ' + Wmin + ' ' + Wmax)

      let w = fib2, h = fib1
      let init_stroke_width = visible_stroke / init_scale
      scalable.append('rect')
        .attr('stroke-width', init_stroke_width)
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', w)
        .attr('height', h)

      update_display()
    }

    prep()

    function rescale() {
      // compute scale for 'scalable' so that the new rectangle will use
      // usable proportion of W
      let new_scale = (Wmax * usable) / fib2
      let new_transform = "scale(" + new_scale + "," + new_scale + ")"
      scalable.transition()
        .duration(delay)
        .attrTween('transform',
          function (d, i) {
            let previous_transform = this.getAttribute("transform")
            return d3.interpolateTransformSvg(previous_transform, new_transform)
          })

      // also change internal rectangle's stroke to remain
      // with the same visible stroke
      scalable.selectAll('rect')
        .transition()
        .duration(delay)
        .attr('stroke-width', visible_stroke / new_scale)

      return new_scale
    }


    function next() {
      // compute next fibonacci
      let newfib = fib2 + fib1
      fib1 = fib2
      fib2 = newfib
      counter += 1

      // take width and height dep. on odd or even
      let w, h
      if (counter % 2 == 1) {
        w = fib2
        h = fib1
      } else {
        w = fib1
        h = fib2
      }

      let new_scale = rescale()

      scalable.append('rect')
        .attr('id', 'fib' + counter)
        .attr('stroke-width', visible_stroke / new_scale)
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', w)
        .attr('height', h)

      update_display()
    }

    // at the very beginning counter == 2
    const max_display_depth = 10
    function update_display() {
      let msg = `<span class="current">${counter-1}:${fib2}/${fib1}</span>`
      let x2 = fib1, x1 = fib2 - fib1, c = counter - 1
      while ((c >= 2) && (counter - c <= max_display_depth)) {
        msg += ` - ${c-1}:${x2}/${x1}`
        let tmp = x2 - x1
        x2 = x1
        x1 = tmp
        c -= 1
      }
      console.log({fib1, fib2, counter})
      if (c >= 2)
        msg += ' ...'
      document.getElementById('display').innerHTML = msg
    }

    function back() {
      if (counter == 2)
        return
      let fib0 = fib2 - fib1
      fib2 = fib1
      fib1 = fib0
      scalable.select("#fib" + counter).remove()
      counter -= 1
      rescale()
      update_display()
    }

    function keypress(event) {
      //console.log("keypress", event.which)
      if (event.which != 0)
        next()
      else
        back()
    }

    function keydown(event) {
      //console.log("keydown", event.which)
      switch (event.which) {
        case 40: // down
        case 39: // right
        case 34: // page down
          next()
          event.preventDefault()
          break
        case 8:  // delete
        case 37: // left
        case 38: // up
        case 33: // page up
          back()
          event.preventDefault()
          break
      }
    }

    document.getElementById("next").addEventListener('click', next)
    document.getElementById("display").addEventListener('click', next)
    document.getElementById("back").addEventListener('click', back)
    document.addEventListener('keypress', keypress)
    document.addEventListener('keydown', keydown)
  })
