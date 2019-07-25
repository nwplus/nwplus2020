import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin'
import * as corsModule from "cors";
const cors = corsModule({origin: true})
//import * as Parser from 'json2csv'
admin.initializeApp()
const Mailchimp = require('mailchimp-api-v3');
const API_KEY: string = functions.config().mailchimp.key
const mailchimp = new Mailchimp(API_KEY)
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const subscribeToMailingList = functions.https.onRequest(async (request, response) => {
    return cors(request, response, async () => {
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
                console.log(reply.errors)
                response.status(502).send({errors: 'Unexpected Mailchimp error'})
                return
            }
        }else {
            response.sendStatus(200)
            return
        }

    }catch (e){
        console.log("Server error")
        console.log(e)
        response.sendStatus(500)
        return
    }
    })
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
// export const ApplicantToCSV = functions.https.onRequest( async (request, response) => {
//     const db = admin.firestore()
//     const hackerReference = db.collection('hacker_short_info')
//     const snapshot = await hackerReference.get()
//     const hackerInfo = snapshot.docs.map((doc) => doc.data())
//     const parser = new Parser.Parser();
//     const csv = parser.parse(hackerInfo);
//     response.attachment('Hackers.csv')
//     response.status(200).send(csv)
// })