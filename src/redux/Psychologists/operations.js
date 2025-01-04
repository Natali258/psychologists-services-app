
// import { ref, get, query, orderByChild, limitToFirst, limitToLast, startAt, endAt, getDatabase, child } from "firebase/database";
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { database } from '../../services/FirebaseApp';

// const db = ref(getDatabase());

// export const psychologistThunk = createAsyncThunk(
//   'psychologists',
//   async (params, thunkApi) => {
//     const{limit, filter} = params;
//     console.log(limit);
    
//     try {
//       const psychologistsRef = ref(database, '/psychologists');
//       let sortedQuery;
//       switch (filter) {
//         case 'A to Z':
//           sortedQuery = query(
//             psychologistsRef,
//             orderByChild('name'),
//             limitToFirst(limit)
//           );
//           break;
//         case 'Z to A':
//           sortedQuery = query(
//             psychologistsRef,
//             orderByChild('name'),
//             limitToLast(limit)
//           );
//           break;
//         case 'Popular':
//           sortedQuery = query(
//             psychologistsRef,
//             orderByChild('rating'),
//             limitToLast(limit)
//           );
//           break;
//         case 'Not popular':
//           sortedQuery = query(
//             psychologistsRef,
//             orderByChild('rating'),
//             limitToFirst(limit)
//           );
//           break;
//         case 'Greater than 10$':
//           sortedQuery = query(
//             psychologistsRef,
//             orderByChild('price_per_hour'),
//             startAt(10),
//             limitToFirst(limit)
//           );
//           break;
//         case 'Less than 10$':
//           sortedQuery = query(
//             psychologistsRef,
//             orderByChild('price_per_hour'),
//             startAt(0),
//             endAt(10),
//             limitToFirst(limit)
//           );
//           break;
//         case 'Show all':
//           sortedQuery = query(psychologistsRef, limitToFirst(limit));
//           break;
//         default:
//           sortedQuery = query(psychologistsRef, limitToFirst(limit));
//       }
//       const snapshot = await get(sortedQuery);
  
//       if (snapshot.exists()) {
//         const psychologists = [];
//         snapshot.forEach((childSnapshot) => {
//           psychologists.push(childSnapshot.val());
//         });
//         return psychologists;
//       } else {
//         return null;
//       }
//     } 
    
//      catch (error) {
//       console.log(error)
//       return thunkApi.rejectWithValue(error.message);
//     }
// }
// );





// export const psychologistThunk = createAsyncThunk(
//   'psychologists',
//   async (_, thunkApi) => {
//       try {
//       const  data  = await get(child(db,'psychologists')).then((snapshot) => {
//         if (snapshot.exists()) {
//           const valueList=snapshot.val();
//           return valueList;
//         } else {
//           console.log("No data available");
//         }
//       });
//       console.log('111111111');
//       return data;
//     } catch (error) {
//       console.log(error)
//       return thunkApi.rejectWithValue(error.message);
//     }
// }
// );


