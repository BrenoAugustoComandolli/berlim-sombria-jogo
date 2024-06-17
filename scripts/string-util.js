function parserStringToHtml(htmlStr) {
    const parser = new DOMParser();
    return parser.parseFromString(htmlStr, 'text/html');
}