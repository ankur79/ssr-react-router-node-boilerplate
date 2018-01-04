"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = renderFullPage;
function renderFullPage(html, preloadedState) {
    return "\n        <!doctype html>\n        <html>\n        <head>\n            <title>Your SSR React Router Node App initialised with data!</title>\n        </head>\n        <body>\n            <div id=\"root\">" + html + "</div>\n\n            <script src=\"/bundle.js\"></script>\n        </body>\n        </html>\n    ";
}