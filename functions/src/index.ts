import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'
admin.initializeApp()
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
const updateAdminIDs = async () => {
    const db = admin.firestore()
    const admins = await db.collection('admins').get()
    const adminIDs = admins.docs.map((doc) => doc.id)
    adminIDs.forEach(async (id) => {
        await admin.auth().setCustomUserClaims(id, {admin: true})
    })
}
export const updateAdmins = functions.https.onRequest( async (request, response) => {
    await updateAdminIDs()
    response.send(200)
})
export const updateAdminsOnAdd = functions.firestore.document('admins/*').onCreate(async (change, context) => {
    await updateAdminIDs()
})
