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
    if (request.body.email_address == '') {
            response.sendStatus(400)
            return
        }
    try {
        const reply = await mailchimp.post('lists/d405dfd8ce/', {
            members: [
                {
                    "email_address": request.body.email_address,
                    "status": 'subscribed'
                },
            ]})
        if (reply.error_count > 0){
            console.log("Mailchimp errors")
            const error: String = reply.errors[0].error
            if (error.indexOf('already a list member') !== -1) {
                response.status(502).send({errors: 'This email has already signed up'})
                return
            }else if (error.indexOf('looks fake or invalid') !== -1) {
                response.status(502).send({errors: error})
                return
            }else {
                response.status(502).send({errors: 'Unexpected Mailchimp error'})
                return
            }
        }else {
            response.sendStatus(200)
            return
        }

    }catch (e){
        console.log("Server error")
        response.sendStatus(500)
        return
    }
});
