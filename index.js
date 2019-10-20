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
        path: '/',
        handler: function (request, h) {

            return h.file('age.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/index.html',
        handler: function (request, h) {

            return h.file('index.html');
        }
    });
	
	server.route({
        method: 'GET',
        path: '/age.html',
        handler: function (request, h) {

            return h.file('age.html');
        }
    });
	
	server.route({
        method: 'GET',
        path: '/checkout.html',
        handler: function (request, h) {

            return h.file('checkout.html');
        }
    });
	
	server.route({
        method: 'GET',
        path: '/help.html',
        handler: function (request, h) {

            return h.file('help.html');
        }
    });

	server.route({
        method: 'GET',
        path: '/police.html',
        handler: function (request, h) {

            return h.file('police.html');
        }
    });
	
		server.route({
        method: 'GET',
        path: '/waiting.html',
        handler: function (request, h) {

            return h.file('waiting.html');
        }
    });

    await server.start();

    console.log('Server running at:', server.info.uri);
};

start();