
import { getDatabase, ref,child, get, limitToLast, limitToFirst, startAt } from "firebase/database";
import { conectAPI } from '../../services/FirebaseApp';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, query, orderBy, startAfter, limit, getDocs, getFirestore, doc, getDoc } from "firebase/firestore";
// import { getFirestore,  limit, query } from "firebase/firestore/lite";

const db = getFirestore(conectAPI);
const dbRef = ref(getDatabase(conectAPI),'psychologists/');
// console.log(dbRef);
// const dbRef = getFirestore(conectAPI);
// console.log(dbRef);

export const psychologistThunk = createAsyncThunk(
  'psychologist',
  async (_, thunkApi) => {
    try {

const next = query(collection(db, "users"),
    orderBy("name"),
    startAfter('111'),
    limit(2));

    const querySnapshot = await getDocs(next);

console.log(querySnapshot)
querySnapshot.forEach((doc) => {

  console.log(doc.id, " => ", doc.data());
});



//       const docRef = doc(db, "users",'name');
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // docSnap.data() will be undefined in this case
//   console.log("No such document!");
// }
      // const querySnapshot = await getDocs(collection(db, "users"));
      // querySnapshot.forEach((doc) => {
      //   console.log(`${doc.id} => ${doc.data()}`);
      // });
//       const first = query(collection(db, "users"), orderBy("name"), limit(1));
// const documentSnapshots = await getDocs(first);

// // Get the last visible document
// const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
// console.log("last", lastVisible);

// // Construct a new query starting at this document,
// // get the next 25 cities.
// const next = query(collection(db, "users"),
//     orderBy("name"),
//     startAfter(lastVisible),
//     limit(25));

//       const first = query(collection(db, "users"), orderBy("id"), limit(25));
// const documentSnapshots = await getDocs(first).then((snapshot) => {
//   console.log(snapshot)
//     if (snapshot.exists()) {
//       const valueList=snapshot.val();
//       return valueList;
//     } else {
//       console.log("No data available");
//     }
//   });
//   console.log(documentSnapshots);
//   return documentSnapshots;;
// console.log(documentSnapshots)
      // const  data = query(collection(db, "psychologists"),
      // orderBy("id"),
      // startAfter(10),
      // limit(25))
      // console.log(data)

    //   const q = query(orderBy("population"),
    // startAfter(lastVisible),
    // limit(25));
    //   console.log(q);
    // query(ref(db, 'posts'), limitToLast(100));
      // const  data  = await get(query(dbRef,'id',limitToFirst(10))).then((snapshot) => {
      //   if (snapshot.exists()) {
      //     const valueList=snapshot.val();
      //     return valueList;
      //   } else {
      //     console.log("No data available");
      //   }
      // });
      // console.log(data);
      // return data;
    } catch (error) {
      console.log(error)
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


