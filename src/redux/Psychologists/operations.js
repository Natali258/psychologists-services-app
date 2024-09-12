
import { getDatabase, ref,child, get, limitToLast, limitToFirst, startAt, orderByChild, startAfter } from "firebase/database";
import { conectAPI } from '../../services/FirebaseApp';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { query} from "firebase/firestore";


const db = ref(getDatabase(conectAPI),'/psychologists');



export const psychologistThunk = createAsyncThunk(
  'psychologists',
  async (params, {getState}, thunkApi) => {
    try {
      const { isNextPage } = params;
      const { lastKey } = getState().psychologists; // Отримуємо останній ключ із стану
      let usersQuery;

    if (isNextPage &&  lastKey) {
      usersQuery = query(db, startAfter(lastKey), limitToFirst(3));
    } else {
      usersQuery = query(db, limitToFirst(3));
      console.log(usersQuery);
      
    }

    const snapshot = await get(usersQuery);
    const usersList = [];
    snapshot.forEach((childSnapshot) => {
      usersList.push({ id: childSnapshot.key, ...childSnapshot.val() });
    });

    const lastUserKey = usersList.length > 0 ? usersList[usersList.length - 1].id : null;

    return { usersList, lastUserKey }
  }



      // const  data  = await get(query(db,'psychologists',limitToFirst(3))).then((snapshot) => {
      //   if (snapshot.exists()) {
      //     const valueList=snapshot.val();
      //     return valueList;
      //   } else {
      //     console.log("No data available");
      //   }
      // });
      // console.log(data);
      // return data;}


       catch (error) {
      console.log(error)
      return thunkApi.rejectWithValue(error.message);
      }









  // !!!!!!Правильний варіант з Ліміт!!!!!!
  // async (_, thunkApi) => {
  //   try {
  //     const  data  = await get(query(db,'psychologists',limitToFirst(10))).then((snapshot) => {
  //       if (snapshot.exists()) {
  //         const valueList=snapshot.val();
  //         return valueList;
  //       } else {
  //         console.log("No data available");
  //       }
  //     });
  //     console.log(data);
  //     return data;


  //     } catch (error) {
  //     console.log(error)
  //     return thunkApi.rejectWithValue(error.message);
  //     }



  // // !!!!!!!Правильний варіант!!!!!!!
  //     const  data  = await get(child(db,'psychologists')).then((snapshot) => {
  //       if (snapshot.exists()) {
  //         const valueList=snapshot.val();
  //         return valueList;
  //       } else {
  //         console.log("No data available");
  //       }
  //     });
  //     console.log(data);
  //     return data;
  //   } catch (error) {
  //     console.log(error)
  //     return thunkApi.rejectWithValue(error.message);
  //   }
}
);


