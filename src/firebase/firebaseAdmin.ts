import firebaseAdmin from "firebase-admin";
import { GetServerSidePropsContext } from "next-redux-wrapper";
import nookies from "nookies";
import { AnyAction, Store } from "redux";
import { State } from "../redux/store";

if (!firebaseAdmin.apps.length){
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      clientEmail: "firebase-adminsdk-zb7oj@slack-f1af1.iam.gserviceaccount.com",
      projectId: "slack-f1af1",
    }),
    databaseURL: "https://slack-f1af1.firebaseio.com"
  })
};

const verifyUser = (ctx: GetServerSidePropsContext)=>{
 try {
   const cookies = nookies.get(ctx)
   const token = firebaseAdmin.auth().verifyIdToken(cookies["user-token"]);

   return token;
 } catch (error) {
    throw new Error(error.message);
 }
}

export {firebaseAdmin, verifyUser}