"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
const BASEURL = "https://www.notion.so/api/v3/";
function request({ endpoint, creds: { token }, body }) {
    return node_fetch_1.default(`${BASEURL}${endpoint}`, {
        headers: {
            accept: "*/*",
            "accept-language": "de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/json",
            cookie: `token_v2=${token};`
        },
        body: JSON.stringify(Object.assign({}, body, { limit: 50, cursor: { stack: [] }, chunkNumber: 0, verticalColumns: false })),
        method: "POST"
    })
        .then(response => response.json())
        .catch((error) => console.error(error));
}
exports.default = request;
