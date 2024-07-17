
import { getDatabase, ref,child, get } from "firebase/database";
import { conectAPI } from '../../services/FirebaseApp';
import { createAsyncThunk } from '@reduxjs/toolkit';

const dbRef = ref(getDatabase(conectAPI));

export const psychologistThunk = createAsyncThunk(
  'psychologist',
  async (_, thunkApi) => {
    try {
      const  data  = await get(child(dbRef, `psychologists/`)).then((snapshot) => {
        if (snapshot.exists()) {
          const valueList=snapshot.val();
          return valueList;
        } else {
          console.log("No data available");
        }
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


