/**
 * This is our own middleware for Firebase
 */
// Require
const admin = require('firebase-admin')
const dotenv = require('dotenv')

// Config
dotenv.config()

const firebase_private_key_b64 = Buffer.from(process.env.FIREBASE_PRIVATE_KEY_ID, 'base64')
const firebase_private_key = firebase_private_key_b64.toString('utf8')

// Initialize Firebase on Backend
admin.initializeApp({
    credential: admin.credential.cert({
      "type": process.env.FIREBASE_TYPE,
      "project_id": process.env.FIREBASE_PROJECT_ID,
      "private_key_id": firebase_private_key,
      "private_key": process.env.FIREBASE_PRIVATE_KEY,
      "client_email": process.env.FIREBASE_CLIENT_EMAIL,
      "client_id": process.env.FIREBASE_CLIENT_ID,
      "auth_uri": process.env.FIREBASE_AUTH_URI,
      "token_uri": process.env.FIREBASE_TOKEN_URI,
      "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
      "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL
    }),
    databaseURL: `https://${process.env.DATABASE_NAME}.firebaseio.com`
})

/**
 * Check the incoming request for bearer token
 */
 async function decodeIDToken(req, res, next) {
    const header = req.headers?.authorization;
    if (header !== 'Bearer null' && req.headers?.authorization?.startsWith('Bearer ')) {
  
      const idToken = req.headers.authorization.split('Bearer ')[1];
  
      try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        req['currentUser'] = decodedToken;
      } catch (err) {
        console.log(err);
      }
    }
  
    next();
  }

module.exports = decodeIDToken;