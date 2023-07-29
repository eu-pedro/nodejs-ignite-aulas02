"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = require("fastify");
var app = (0, fastify_1.default)();
app.get('/hello', function () {
    return 'Hello world!';
});
app.listen({
    port: 3000
}).then(function () {
    console.log('server is running!!!');
});
