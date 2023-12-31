function md2html() {
    let selectors = document.querySelectorAll(".doc p");
    for (let i = 0; i < selectors.length; i++) {
        let selector = selectors[i];
        let text = selector.innerHTML.replace(/<br>/g, "\n").replace(/<br\/>/g, "\n");
        let converter = new showdown.Converter({emoji:true});
        const html = converter.makeHtml(text);
        selector.innerHTML = html;
    }

    hljs.highlightAll();
}

window.addEventListener("load", md2html);