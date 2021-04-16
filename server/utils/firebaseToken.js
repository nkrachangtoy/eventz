/**
 * This is our own middleware for Firebase
 */
// Require
const admin = require('firebase-admin')
const dotenv = require('dotenv')

// Config
dotenv.config()

// Initialize Firebase on Backend
admin.initializeApp({
    credential: admin.credential.cert(process.env.GOOGLE_APPLICATION_CREDENTIALS),
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