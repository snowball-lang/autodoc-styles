function md2html() {
    let selectors = document.querySelectorAll(".doc p");
    console.log(selectors);
    for (let i = 0; i < selectors.length; i++) {
        let selector = selectors[i];
        let text = selector.innerHTML.replace(/<br>/g, "\n").replace(/<br\/>/g, "\n");
        const html = converter.makeHtml(text);
        selector.innerHTML = html;
    }
}

window.addEventListener("load", md2html);