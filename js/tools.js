// tools.js exports
// init()
// sample_from_strings({html: code, css:code, js:code}, options)
// sample_from_stem(stem, options)

// support for several runtimes : Jupyter + Jupyter book
//
// in the latter, a lot is missing as compared to the jupyter classic env:
// * Jupyter global is not available, and would not make much sense
// * require() is not available either, need to fetch from cdnjs
// * codemirror is not available from the server and must be cdn-fetched as well

"use strict"

function hash(word) {
  const crypto = require('crypto')
  const sha1 = crypto.createHash('sha1')
  sha1.update(word)
  return `id-${sha1.digest('hex')}`
}

// helper to compute default height
function number_lines(code_s) {
  let max = 0
  for (let code of Object.values(code_s)) {
    if (code)
      max = Math.max(max, code.split(/\r\n|\r|\n/).length)
  }
  return max
}

// longer line in one code
function max_line_width(text) {
  if ( ! text) return 0
  let max = 0
  for (let line of text.split(/\r\n|\r|\n/))
    max = Math.max(max, line.length)
  return max
}
// longer line in an array of code
function max_line_width_s(code_s) {
  let max = 0
  for (let code of Object.values(code_s))
    max = Math.max(max, max_line_width(code))
  return max
}

function read_style(path) {
  const css = fs.readFileSync(path, 'utf-8')
  return `<style>${css}</style>`
}

// compute a fraction of a css length
// that may be 200px or 20em or 50%
function csslength_fraction(length, ratio) {
  try {
    let regexp = /([0-9.]+)([a-z][a-z]|%)/
    let match = regexp.exec(length)
    let [total, count, unit] = match
    let rcount = parseFloat(count) * ratio
    return `${rcount}${unit}`
  } catch(err) {
    console.log("csslength_fraction : not a 2-chars or % unit")
  }
}

function sample_from_stem(stem, options) {
  options = options || {}
  if (! ('id' in options))
    options.id = `x${hash(stem)}`

  const fs = require('fs')

	let fullname_html = `${stem}.html`
	let fullname_css  = `${stem}.css`
	let fullname_js   = `${stem}.js`

  let html, css, js
	try {html = fs.readFileSync(fullname_html, 'utf8')} catch {}
	try {css = fs.readFileSync(fullname_css, 'utf8')} catch {}
	try {js = fs.readFileSync(fullname_js, 'utf8')} catch {}

  if ( ! html && ! css && !js)
    return $$.html(`<div>no code found from stem
                      <span style='color:red;'>"${stem}"</span></div>`)
  return sample_from_strings({html:html, css: css, js: js}, options)
}

function sample_from_strings(code, options) {
  options = options || {}
  let {html, css, js} = code
  // the default for showing pieces is, are they present at all
  let html_show = (options.html_show !== undefined) ? options.html_show : (html !== undefined)
  let css_show = (options.css_show !== undefined) ? options.css_show : (css !== undefined)
  let js_show = (options.js_show !== undefined) ? options.js_show : (js !== undefined)
  html = html || "<!-- empty -->"
  css = css || "/* empty */"
  js = js || "// empty"
  options = options || {}
  let sources_show = (options.sources_show !== undefined) ? options.sources_show : true
  let separate_show = (options.separate_show !== undefined) ? options.separate_show : true
  let separate_width = options.separate_width || "400px"
  let separate_height = options.separate_height || "400px"
  let separate_label = options.separate_label || "Open in new window"
  let update_label = options.update_label || "Update →"
  let output_show = (options.output_show !== undefined) ? options.output_show : true
  let update_show = true
  if (! output_show) {
    separate_show = false
    update_show = false
  }
  // either html or css or js
  let start_with = options.start_with || "html"
  // fallback if not in allowed range
  let formats = []
  if (html_show) formats.push('html')
  if (css_show) formats.push('css')
  if (js_show) formats.push('js')
  if (formats.indexOf(start_with) < 0)
    start_with = formats[0]

  // default height:
  let code_height = code
  // setting height: 'js' means use the height of the js code only
  if (['html', 'css', 'js'].includes(options.height)) {
    code_height = [code[options.height]]
    delete options.height
  }
  // header is approx. 4 lignes
  const default_height = (sources_show ? `${number_lines(code_height)+4}em` : "300px")
  let height = options.height || default_height

  // default width
  // compute from content, but cap to - arbitrarily - 55 chars
  const computed_width = Math.min(max_line_width_s(code), 55)
  // here again we need more space for the decoration
  const default_width = (sources_show ? `${computed_width+8}ch` : "400px")
  let width = options.width || default_width
  let min_width = options.min_width || csslength_fraction(width, 0.5)
  let min_height = options.min_height || csslength_fraction(height, 0.5)

  const output_min_width = options.output_min_width || "300px"

  let id = options.id || hash(html)

	let textareas = ''
  if (html_show) textareas += `<textarea id="html_${id}">${html}</textarea>`
  if (css_show) textareas += `<textarea id="css_${id}">${css}</textarea>`
  if (js_show) textareas += `<textarea id="js_${id}">${js}</textarea>`


	let width_style = output_show ? `width: ${width}; min-width: ${min_width};` : ``
	let height_style = `height: ${height}; min-height: ${min_height};`
	let embedded = `<style>
    #btns_left_${id} {
      margin-top: 8px;
      border-bottom: 3px solid #88f;
    }
		span.${id}_btn {
			font-family: Courier;
			border: 0px;
			padding: 6px 12px 4px 12px;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
		}
		span.${id}_selected {
			background-color: #ccf;
		}
		button.${id}_btn {
			border: 1px solid #88f;
			border-radius: 5px;
			background-color: #eef;
			margin-right: 10px;
			margin-bottom: 0px;
			padding: 4px 20px;
			height: fit-content;
		}
		#btns_right_${id} {
			align-items: center;
		}
    #output_${id} {
      min-width: ${output_min_width}
    }
	</style>
	<div style="display: grid; grid-template-columns: ${output_show ? 'auto 1fr' : '1fr'}; grid-template-rows: auto 1fr;">
    <div id="btns_left_${id}"
      style="display: ${sources_show ? 'flex' : 'none'};"></div>
	  <div id="btns_right_${id}"
      style="display: flex; justify-content: flex-end; ${sources_show ? '' : height_style}"></div>
	  <div id="codemirror_${id}"
      style="display:${sources_show ? 'grid' : 'none'}; grid-template-columns: 1fr; grid-template-rows: 1fr;
             overflow: auto; resize: both; z-index: 100; ${width_style}; ${height_style};" >
	  ${textareas}
	  </div>
	  <div id="output_${id}" style="display: grid; grid-template-columns: 1fr; grid-template-rows: 1fr;"></div>
	</div>
	<script>

	run_when_codemirror_is_ready(
    (CodeMirror) => {

	let all_src = { }

	let output = document.getElementById("output_${id}")

	let get_example_content = () => {
		let html = ''
		let css = ''
		let js = ''

		if (all_src.hasOwnProperty('html')) {
			html = all_src.html.getValue()
		}

		if (all_src.hasOwnProperty('css')) {
			css = all_src.css.getValue()
		}

		if (all_src.hasOwnProperty('js')) {
			js = all_src.js.getValue()
		}


		let template = "&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;style&gt;__css__&lt;/style&gt;&lt;script defer&gt;__js__&lt;/script&gt;&lt;/head&gt;&lt;body&gt;__html__&lt;/body&gt;&lt;/html&gt;";
		// escape trick
		let escape_trick = document.createElement("textarea")
		escape_trick.innerHTML = template
		template = escape_trick.textContent

		template = template.replace("__html__", html)
		template = template.replace("__css__", css)
		template = template.replace("__js__", js)

		return template
	}

	let update_iframe = () => {

    if (! ${output_show}) return

		let template = get_example_content()

		let iframe = document.createElement("iframe")
		while (output.firstChild) {
			output.removeChild(output.lastChild)
		}

		output.appendChild(iframe)
    iframe.width = "100%"
    iframe.height = "100%"

		if (iframe.contentWindow) {
			iframe = iframe.contentWindow
		} else if (iframe.contentDocument.document) {
      iframe = iframe.contentDocument.document
    } else {
      iframe = iframe.contentDocument
		}

		iframe.document.open()
		iframe.document.write(template)
		iframe.document.close()

		return false

	}

  if (${html_show}) {
    const html_src = document.getElementById("html_${id}")
    all_src.html = CodeMirror.fromTextArea(html_src, {
      lineNumbers: true,
      mode: "htmlmixed"
    })
    all_src.html.getWrapperElement().style['min-height'] = '${height}'
    all_src.html.getWrapperElement().style.display = ${start_with == 'html'} ? "block" : "none"
  }

  if (${css_show}) {
    const css_src = document.getElementById("css_${id}")
    all_src.css = CodeMirror.fromTextArea(css_src, {
      lineNumbers: true,
      mode: "css"
    })
    all_src.css.getWrapperElement().style['min-height'] = '${height}'
    all_src.css.getWrapperElement().style.display = ${start_with == 'css'} ? "block" : "none"
  }

  if (${js_show}) {
    const js_src = document.getElementById("js_${id}")
    all_src.js = CodeMirror.fromTextArea(js_src, {
      lineNumbers: true,
      mode: "javascript"
    })
    all_src.js.getWrapperElement().style['min-height'] = '${height}'
    all_src.js.getWrapperElement().style.display = ${start_with == 'js'} ? "block" : "none"
  }

	const codemirror = document.getElementById("codemirror_${id}")
	/* Trick to update the codemirror layout when resized */
	function update_codemirror() {
		if (! ${sources_show}) return
		if (${html_show}) all_src.html.refresh()
		if (${css_show}) all_src.css.refresh()
		if (${js_show}) all_src.js.refresh()
	}
	codemirror.addEventListener("mouseup", update_codemirror)


	let btns_left = document.getElementById("btns_left_${id}")

  let btn_html, btn_css, btn_js

  if (${html_show}) {
	  btn_html = document.createElement("span")
	  btn_html.textContent = "HTML"
	  btn_html.classList.add("${id}_btn")
	  if (${start_with == 'html'}) btn_html.classList.add("${id}_selected")
	  btns_left.appendChild(btn_html)
  }
	if (${css_show}) {
    btn_css = document.createElement("span")
    btn_css.textContent = "CSS"
    btn_css.classList.add("${id}_btn")
    if (${start_with == 'css'}) btn_css.classList.add("${id}_selected")
    btns_left.appendChild(btn_css)
  }
  if (${js_show}) {
    btn_js = document.createElement("span")
    btn_js.textContent = "JS"
    btn_js.classList.add("${id}_btn")
    if (${start_with == 'js'}) btn_js.classList.add("${id}_selected")
    btns_left.appendChild(btn_js)
  }
	let btn_fill = document.createElement("span")
//	btn_fill.classList.add("${id}_btn")
	btn_fill.style['flex-grow'] = '1'
	btns_left.appendChild(btn_fill)

  if (${html_show}) {
    btn_html.addEventListener("click", () => {
      if (btn_css) btn_css.classList.remove("${id}_selected")
      if (btn_js) btn_js.classList.remove("${id}_selected")
      btn_html.classList.add("${id}_selected")
      if (btn_css) all_src.css.getWrapperElement().style.display = "none"
      if (btn_js) all_src.js.getWrapperElement().style.display = "none"
      all_src.html.getWrapperElement().style.display = "block"
      all_src.html.refresh()
  	})
  }

  if (${css_show}) {
    btn_css.addEventListener("click", () => {
      if (btn_html) btn_html.classList.remove("${id}_selected")
      if (btn_js) btn_js.classList.remove("${id}_selected")
      btn_css.classList.add("${id}_selected")
      if (btn_html) all_src.html.getWrapperElement().style.display = "none"
      if (btn_js) all_src.js.getWrapperElement().style.display = "none"
      all_src.css.getWrapperElement().style.display = "block"
      all_src.css.refresh()
    })
  }

  if (${js_show}) {
    btn_js.addEventListener("click", () => {
      if (btn_css) btn_css.classList.remove("${id}_selected")
      if (btn_html) btn_html.classList.remove("${id}_selected")
      btn_js.classList.add("${id}_selected")
      if (btn_html) all_src.html.getWrapperElement().style.display = "none"
      if (btn_css) all_src.css.getWrapperElement().style.display = "none"
      all_src.js.getWrapperElement().style.display = "block"
      all_src.js.refresh()
    })
  }

	if (${update_show}) {
    let btn_update = document.createElement("button")
    btn_update.textContent = "${update_label}"
    btn_update.classList.add("${id}_btn")
    btns_left.appendChild(btn_update)
    btn_update.addEventListener("click", update_iframe)
  }

	let btns_right = document.getElementById("btns_right_${id}")

	if (${separate_show}) {
		let btn_window = document.createElement("button")
		btn_window.textContent = "${separate_label}"
		btn_window.classList.add("${id}_btn")
		btn_window.addEventListener("click", () => {
			let template = get_example_content()

			let w = window.open('', '_blank', 'height=${separate_height},width=${separate_width}')
			w.document.open()
			w.document.write(template)
			w.document.close()

		})
		btns_right.appendChild(btn_window)
	}

	update_iframe()

	all_src['${start_with}'].refresh()

	}); /* End of all requirements */
  </script>
	`

	$$.html(embedded)
}


function init() {
  // the style that makes the in[] and out[] labels less conspicuous
  let embedded = ``
  embedded += read_style('../notebooks/_static/style.css')
  // we inject require here for when running under jupyter book
  embedded += `
<script>
// Run this script imediatly

function run_when_codemirror_is_ready(f) {
	if ('CodeMirror' in globalThis) {
		// Run immediatly
		f(globalThis.CodeMirror);
	} else {
		window.addEventListener('codemirror_is_ready', e => f(e.detail));
	}
}

function append_css(url) {
	const link = document.createElement('link');
	link.setAttribute('rel', 'stylesheet');
	link.setAttribute('href', url);
	document.getElementsByTagName('head')[0].appendChild(link);
}


function initialize_codemirror() {

	if ('Jupyter' in globalThis) {
		// Require should be available, and already setup

		// Load missing peace of codemirror from Jupyter
		require([
			'codemirror/lib/codemirror',
			'codemirror/mode/htmlmixed/htmlmixed',
			'codemirror/mode/css/css',
			'codemirror/mode/javascript/javascript'
		], (CodeMirror) => {
			// Tell waiting script that CodeMirror is ready
			const e = new CustomEvent('codemirror_is_ready', { detail: CodeMirror });
			window.dispatchEvent(e);
		});
	} else {

		// Inject css only if we are in jupyter-book that do not load codemirror
		append_css('https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.10/codemirror.min.css');
		append_css('https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.10/theme/elegant.min.css');

		require.config({
		  packages: [{
			name: "codemirror",
			location: 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.10',
			main: "codemirror.min"
		  }],
		  map: {
			'*': { 'codemirror/lib/codemirror': 'codemirror' }
		  }
		});

		require([
			'codemirror',
			'codemirror/mode/htmlmixed/htmlmixed.min',
			'codemirror/mode/css/css.min',
			'codemirror/mode/javascript/javascript.min'
		], (CodeMirror) => {
			// Tell waiting script that CodeMirror is ready
			globalThis.CodeMirror = CodeMirror;
			const e = new CustomEvent('codemirror_is_ready', { detail: CodeMirror });
			window.dispatchEvent(e);
		});
	}

}

</script>
<script defer>
// Run this script when the entire page was loaded

// we may be in a Jupyter runtime, or not (think, jupyter book)

if ('require' in globalThis) {
	initialize_codemirror();
} else {

	const script = document.createElement('script');
	script.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js');
	script.setAttribute('crossorigin', 'anonymous');
	script.setAttribute('referrerpolicy', 'no-referrer');
	script.setAttribute('integrity', 'sha512-c3Nl8+7g4LMSTdrm621y7kf9v3SDPnhxLNhcjFJbKECVnmZHTdo+IRO05sNLTH/D3vA6u1X32ehoLC7WFVdheg==');

	// when require is loaded , ensure code mirror
	script.addEventListener('load', () => {
		initialize_codemirror();
	});
	document.getElementsByTagName('head')[0].appendChild(script);
}

// Run all cells below the last selected cell, i.e. this cell
if ('Jupyter' in globalThis) {
    // if Jupyter is available, run all cells below
    const notebook = globalThis.Jupyter.notebook;
    const current_selected = notebook.get_selected_cell();
    // execute_cells_below() would execute the current cell,
    // thus going into an infinite loop
    notebook.execute_cell_range(notebook.get_selected_index()+1, notebook.ncells());
    current_selected.ensure_focused();
    console.log("all cells below - current one excluded - have been executed");
}

</script>`
  $$.html(embedded)
}

exports.init = init
exports.sample_from_strings = sample_from_strings
exports.sample_from_stem = sample_from_stem
