function md2html() {
    let selectors = document.querySelectorAll(".doc p");
    for (let i = 0; i < selectors.length; i++) {
        let selector = selectors[i];
        let text = selector.innerHTML;
        const html = converter.makeHtml(text);
        selector.innerHTML = html;
    }
}

window.addEventListener("load", md2html, false)