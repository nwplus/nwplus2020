const cors = require('cors');
cors({origin: true});
import * as functions from 'firebase-functions';
const Mailchimp = require('mailchimp-api-v3');
const API_KEY: string = functions.config().mailchimp.key
const mailchimp = new Mailchimp(API_KEY)
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const SubscribeToMailingList = functions.https.onRequest(async (request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Headers', 'Content-Type, crossDomain');
    if (request.body.email_address == undefined ||
        request.body.first_name == undefined ||
        request.body.last_name == undefined){
            response.sendStatus(500)
            return
        }
    try {
        await mailchimp.post('lists/01b28e7322/', {
            members: [
                {
                    "email_address": request.body.email_address,
                    "status": 'subscribed',
                    'merge_fields': {
                        'First Name': request.body.first_name,
                        'Last Name': request.body.last_name
                    }
                },
            ]})
    }catch (e){
        console.log('error!!!!')
        console.log(JSON.stringify(e.errors, null, 4))
        response.sendStatus(500)
    }
    response.sendStatus(200)
});
