'use strict';

const Hapi = require('@hapi/hapi');
const Path = require('path');

const start = async () => {

    const server = Hapi.server({
        port: 3000,
        host: '10.2.17.20'
    });

    await server.register(require('inert'));

		server.route({
        method: 'GET',
        path: '/',
        handler: function (request, h) {

            return h.file('index.html');
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
        path: '/*',
        handler: function (request, h) {

            return 'ERROR 404. PAGE NOT FOUND';
        }
    });
	
    await server.start();

    console.log('Server running at:', server.info.uri);
};

start();