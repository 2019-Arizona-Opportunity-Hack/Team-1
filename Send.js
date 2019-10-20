/* Send SMS
const accountSid = 'ACc90952bdfbeec5d39b4a2cb325380394';
const authToken = 'cab26c4171c649fdd8e7c79402301597';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+16099526853',
     to: '+14803308417'
   })
  .then(message => console.log(message.sid));
*/
/* Send Email
const Nylas = require('nylas');
const client_ID = 'dfilawopf14wgkzhzskwrx662';
const client_SECRET = 'ao3won7753y2nkvbnos89zech';
const client_TOKEN = 'lk9ZFX8ihdB2Zk7MGbY5p7tApZX5Sf';


Nylas.config({
    clientId: client_ID,
    clientSecret: client_SECRET,
});
  
const nylas = Nylas.with(client_TOKEN);

const draft = nylas.drafts.build({
    subject: 'With Love, from Nylas',
    to: [{ name: 'My Nylas Email', email: 'kaiwood11@cox.net' }],
    body: 'This email was sent using the Nylas email API. Visit https://nylas.com for details.'
});

// Send the draft
draft.send().then(message => {
    console.log(`${message.id} was sent`);
});
*/
