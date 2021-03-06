import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAH4wjlKZsMYhCXAl__BOwzMrVT47DoA6k",
    authDomain: "mycrwn.firebaseapp.com",
    databaseURL: "https://mycrwn.firebaseio.com",
    projectId: "mycrwn",
    storageBucket: "mycrwn.appspot.com",
    messagingSenderId: "36369318121",
    appId: "1:36369318121:web:285d2da3256b5f6cc8b078",
    measurementId: "G-DC017JZZR7"
  };

  export const createUserProfileDocument = async (userAuth, additionalDAta) =>{
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`); 
   
    const snapShot = await userRef.get();  
    
    if (!snapShot.exists){
      const{displayName, email} = userAuth;
      const createdAt = new Date();
    try{ 
    await userRef.set({
     displayName,
     email,
     createdAt,
     ...additionalDAta
})

} catch(error) {
  console.log('error creating user', error.message);
  
}


   }
    
    return userRef;
    
  } ;

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>{
    const collectionRef = firestore.collection(collectionKey);
   

    const batch = firestore.batch();
    objectsToAdd.forEach(obj =>{
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });

   return await batch.commit()
  };

export const convertCollectionsSnapshotToMap = collectionsSnapshot => {
  const transformedCollection = collectionsSnapshot.docs.map(docSnapshot => {
    const { title, items} = docSnapshot.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapshot.id,
      title,
      items
    };
  });


return transformedCollection.reduce((accumulator, collection) => {
accumulator[collection.title.toLowerCase()] = collection;
return accumulator;
} , {});

};

export const getCurrentUser = () => {
  return new Promise ((resolve, reject) => {
    const unsubsrcribe = auth.onAuthStateChanged(userAuth => {
      unsubsrcribe();
      resolve(userAuth);
    }, reject)
    
  })
}


  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;
  