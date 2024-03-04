import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();



// Your AccountSID and Auth Token from console.twilio.com
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = require('twilio')(accountSid, authToken);

router.get('/', (req, res) => {
     client.messages
        .create({
            body: 'Hello from twilio-node',
            to: '+94769114371', // Text your number
            from: '+15005550006', // From a valid Twilio number
        })
        .then((message) => console.log(message.sid));
});


export default router;