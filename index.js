'use strict';

const Hapi = require('@hapi/hapi');
const Path = require('path');

const start = async () => {

    const server = Hapi.server({
        port: 3000,
        host: '10.2.17.20'
    });

    await server.register(require('inert'));

	const textCabs = function() {
		const accountSid = 'ACc90952bdfbeec5d39b4a2cb325380394';
		const authToken = 'cab26c4171c649fdd8e7c79402301597';
		const client = require('twilio')(accountSid, authToken);

		var twilioNum = '+16099526853';
		var cabNums = ['+14803308417', '+16029041325'/*, '+14807847125'*/];
		var address = 'default';
		for(let cabNum of cabNums) {
			client.messages
				.create({
					to: policeNum,
					from: twilioNum,
					body: 'Domestic Abuse Emergency at '/* + address*/
				}).then((message) => console.log(message.sid));
		};
		return 'Cabs Texted';
	};

	const emailHotels = function() {
		const Nylas = require('nylas');
		const client_ID = 'dfilawopf14wgkzhzskwrx662';
		const client_SECRET = 'ao3won7753y2nkvbnos89zech';
		const client_TOKEN = 'lk9ZFX8ihdB2Zk7MGbY5p7tApZX5Sf';
		Nylas.config({
			clientId: client_ID,
			clientSecret: client_SECRET,
		});
		  
		var hotelEmails = ['lilxvietxkt@gmail.com', 'emilio.egnew@gmail.com'];
		  
		const nylas = Nylas.with(client_TOKEN);
		
		for(let hotelEmail of hotelEmails) {
			const draft = nylas.drafts.build({
				subject: 'With Love, from Nylas',
				to: [{ name: 'My Nylas Email', email: hotelEmail }],
				body: 'This email was sent using the Nylas email API. Visit https://nylas.com for details.'
			});
			// Send the draft
			draft.send().then(message => {
				console.log(`${message.id} was sent`);
			});
		}
		return 'End';
	};

	const emailMovers = function() {
		const Nylas = require('nylas');
		const client_ID = 'dfilawopf14wgkzhzskwrx662';
		const client_SECRET = 'ao3won7753y2nkvbnos89zech';
		const client_TOKEN = 'lk9ZFX8ihdB2Zk7MGbY5p7tApZX5Sf';
		Nylas.config({
			clientId: client_ID,
			clientSecret: client_SECRET,
		});
		
		var moverEmails = ['lilxvietxkt@gmail.com', 'emilio.egnew@gmail.com'];
		  
		const nylas = Nylas.with(client_TOKEN);
		
		for(let moverEmail of moverEmails) {
			const draft = nylas.drafts.build({
				subject: 'With Love, from Nylas',
				to: [{ name: 'My Nylas Email', email: moverEmail }],
				body: 'This email was sent using the Nylas email API. Visit https://nylas.com for details.'
			});
			// Send the draft
			draft.send().then(message => {
				console.log(`${message.id} was sent`);
			});
		}
		return 'End';
	};

	const textPolice = function() {
		const accountSid = 'ACc90952bdfbeec5d39b4a2cb325380394';
		const authToken = 'cab26c4171c649fdd8e7c79402301597';
		const client = require('twilio')(accountSid, authToken);

		var twilioNum = '+16099526853';
		var policeNum = '+14803308417';
		var address = 'default';
		client.messages
			.create({
				to: policeNum,
				from: twilioNum,
				body: 'Domestic Abuse Emergency at '/* + address*/
			}).then((message) => console.log(message.sid));
		return 'Police Texted';
	};

	server.method({
		name: 'textCabs',
		method: textCabs,
		options: {}
	});
	
	server.method({
		name: 'emailHotels',
		method: emailHotels,
		options: {}
	});

	server.method({
		name: 'emailMovers',
		method: emailMovers,
		options: {}
	});

	server.method({
		name: 'textPolice',
		method: textPolice,
		options: {}
	});

	server.route({
        method: 'GET',
        path: '/styles.css',
        handler: function (request, h) {

            return h.file('styles.css');
        }
    });

server.route({
        method: 'GET',
        path: '/alien.png',
        handler: function (request, h) {

            return h.file('alien.png');
        }
    });
	
	server.route({
        method: 'GET',
        path: '/bg.jpg',
        handler: function (request, h) {

            return h.file('bg.jpg');
        }
    });
	
	server.route({
        method: 'GET',
        path: '/cadclothing.jpg',
        handler: function (request, h) {

            return h.file('cadclothing.jpg');
        }
    });
	
	server.route({
        method: 'GET',
        path: '/cat.png',
        handler: function (request, h) {

            return h.file('cat.png');
        }
    });
	
	server.route({
        method: 'GET',
        path: '/grandma.png',
        handler: function (request, h) {

            return h.file('grandma.png');
        }
    });

	server.route({
        method: 'GET',
        path: '/hotel.png',
        handler: function (request, h) {

            return h.file('hotel.png');
        }
    });
	
	server.route({
        method: 'GET',
        path: '/police.png',
        handler: function (request, h) {

            return h.file('police.png');
        }
    });
	
	server.route({
        method: 'GET',
        path: '/taxi.png',
        handler: function (request, h) {

            return h.file('taxi.png');
        }
    });

	server.route({
        method: 'POST',
        path: '/address',
        handler: function (request, h) {
			console.log(request);
			
            return h.file('index.html');
        }
    });

	server.route({
        method: 'GET',
        path: '/',
        handler: function (request, h) {
			console.log(request.info.remoteAddress + ' is entering index.html');
            return h.file('index.html');
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
        path: '/index.html/textCabs',
        handler: function (request, h) {
			server.methods.textCabs();
            return h.file('index.html');
        }
    });

	server.route({
        method: 'GET',
        path: '/index.html/emailHotels',
        handler: function (request, h) {
			console.log(request.info.remoteAddress + ' is entering index.html/emailHotels');
			server.methods.emailHotels();
            return h.file('index.html');
        }
    });
	
	server.route({
        method: 'GET',
        path: '/index.html/emailMovers',
        handler: function (request, h) {
			server.methods.emailMovers();
            return h.file('index.html');
        }
    });
	
	server.route({
        method: 'GET',
        path: '/index.html/textPolice',
        handler: function (request, h) {
			server.methods.textPolice();
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