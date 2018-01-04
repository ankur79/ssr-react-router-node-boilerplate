export default function renderFullPage(html, preloadedState) {
    return `
        <!doctype html>
        <html>
        <head>
            <title>Your SSR React Router Node App initialised with data!</title>
        </head>
        <body>
            <div id="root">${html}</div>

            <script src="/bundle.js"></script>
        </body>
        </html>
    `
}
