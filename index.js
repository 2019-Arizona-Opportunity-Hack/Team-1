'use strict';

const Hapi = require('@hapi/hapi');
const Path = require('path');

const start = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'laptop-gs0tad47'
    });

    await server.register(require('inert'));

	server.route({
        method: 'GET',
        path: '/styles/styles.css',
        handler: function (request, h) {

            return h.file('styles.css');
        }
    });
	
	server.route({
        method: 'GET',
        path: '/images/shoppingcart.png',
        handler: function (request, h) {

            return h.file('shoppingcart.png');
        }
    });

	server.route({
        method: 'GET',
        path: '/',
        handler: function (request, h) {

			console.log(request.info.remoteAddress + ' is entering age.html');
            return h.file('age.html');
        }
    });
	
	server.route({
        method: 'GET',
        path: '/age.html',
        handler: function (request, h) {

			console.log(request.info.remoteAddress + ' is entering age.html');
            return h.file('age.html');
        }
    });

	server.route({
        method: 'GET',
        path: '/police.html',
        handler: function (request, h) {

			console.log(request.info.remoteAddress + ' is entering police.html');
            return h.file('police.html');
        }
    });

	server.route({
        method: 'GET',
        path: '/address.html',
        handler: function (request, h) {

			console.log(request.info.remoteAddress + ' is entering address.html');
            return h.file('address.html');
        }
    });

	server.route({
        method: 'GET',
        path: '/help.html',
        handler: function (request, h) {

			console.log(request.info.remoteAddress + ' is entering help.html');
            return h.file('help.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/index.html',
        handler: function (request, h) {

			console.log(request.info.remoteAddress + ' is entering index.html');
            return h.file('index.html');
        }
    });	
	
	server.route({
        method: 'GET',
        path: '/checkout.html',
        handler: function (request, h) {

			console.log(request.info.remoteAddress + ' is entering checkout.html');
            return h.file('checkout.html');
        }
    });

	server.route({
        method: 'GET',
        path: '/waiting.html',
        handler: function (request, h) {

			console.log(request.info.remoteAddress + ' is entering waiting.html');
            return h.file('waiting.html');
        }
    });

    await server.start();

    console.log('Server running at:', server.info.uri);
};

start();