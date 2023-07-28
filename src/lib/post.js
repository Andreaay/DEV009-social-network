<<<<<<< HEAD
/* /* eslint-disable eol-last */
/* const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
initializeApp();

const db = getFirestore();
 /
getAuth()// crear perfil
  .createUser({
    email: 'user@example.com',
    emailVerified: false,
    phoneNumber: '+11234567890',
    password: 'secretPassword',
    displayName: 'John Doe',
    photoURL: 'http://www.example.com/12345678/photo.png',
    disabled: false,
  })
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully created new user:', userRecord.uid);
  })
  .catch((error) => {
    console.log('Error creating new user:', error);
  });

/* getAuth()// borrar perfil
  .deleteUser(uid)
  .then(() => {
    console.log('Successfully deleted user');
  })
  .catch((error) => {
    console.log('Error deleting user:', error);
  }); */
/* 
const listAllUsers = (nextPageToken) => { // ver todos los usuarios creados
  // List batch of users, 1000 at a time.
  getAuth()
    .listUsers(1000, nextPageToken)
    .then((listUsersResult) => {
      listUsersResult.users.forEach((userRecord) => {
        console.log('user', userRecord.toJSON());
      });
      if (listUsersResult.pageToken) {
        // List next batch of users.
        listAllUsers(listUsersResult.pageToken);
      }
    })
    .catch((error) => {
      console.log('Error listing users:', error);
    });
};
  // Start listing users from the beginning, 1000 at a time.
listAllUsers();
 */
=======
// /* eslint-disable eol-last */
// /* const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
// initializeApp();

// const db = getFirestore();
//  */
// getAuth()// crear perfil
//   .createUser({
//     email: 'user@example.com',
//     emailVerified: false,
//     phoneNumber: '+11234567890',
//     password: 'secretPassword',
//     displayName: 'John Doe',
//     photoURL: 'http://www.example.com/12345678/photo.png',
//     disabled: false,
//   })
//   .then((userRecord) => {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log('Successfully created new user:', userRecord.uid);
//   })
//   .catch((error) => {
//     console.log('Error creating new user:', error);
//   });

// getAuth()// borrar perfil
//   .deleteUser(uid)
//   .then(() => {
//     console.log('Successfully deleted user');
//   })
//   .catch((error) => {
//     console.log('Error deleting user:', error);
//   });

// const listAllUsers = (nextPageToken) => { // ver todos los usuarios creados
//   // List batch of users, 1000 at a time.
//   getAuth()
//     .listUsers(1000, nextPageToken)
//     .then((listUsersResult) => {
//       listUsersResult.users.forEach((userRecord) => {
//         console.log('user', userRecord.toJSON());
//       });
//       if (listUsersResult.pageToken) {
//         // List next batch of users.
//         listAllUsers(listUsersResult.pageToken);
//       }
//     })
//     .catch((error) => {
//       console.log('Error listing users:', error);
//     });
// };
//   // Start listing users from the beginning, 1000 at a time.
// listAllUsers();
>>>>>>> ad1a4d4d1033cad989a8679c1cff53b457924b46
