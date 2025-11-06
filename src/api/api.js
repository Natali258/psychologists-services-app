import {
    ref,
    get,
    query,
    limitToFirst,
    push,
    remove,
    orderByChild,
    limitToLast,
    startAt,
    endAt,
    orderByKey,
    orderByValue,
    onValue,
    child,
    equalTo,
  } from 'firebase/database';
  import { auth, database } from '../services/FirebaseApp.js';
  import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

  
  export const getPsychologists = async (limit, filter) => {
    
    try {
      const psychologistsRef = ref(database, '/psychologists');
      let sortedQuery;
      switch (filter) {
        case 'atoz':
          sortedQuery = query(
            psychologistsRef,
            orderByChild('name'),
            limitToFirst(limit)
          );
          break;
        case 'ztoa':
          sortedQuery = query(
            psychologistsRef,
            orderByChild('name'),
            limitToLast(limit)
          );
          break;
        case 'popular':
          sortedQuery = query(
            psychologistsRef,
            orderByChild('rating'),
            limitToLast(limit)
          );
          break;
        case 'notpopular':
          sortedQuery = query(
            psychologistsRef,
            orderByChild('rating'),
            limitToFirst(limit)
          );
          break;
        case 'greater10':
          sortedQuery = query(
            psychologistsRef,
            orderByChild('price_per_hour'),
            startAt(10),
            limitToFirst(limit)
          );
          console.log(sortedQuery);
          break;
        case 'less10':
          sortedQuery = query(
            psychologistsRef,
            orderByChild('price_per_hour'),
            startAt(0),
            endAt(10),
            limitToFirst(limit)
          );
          break;
        case 'showAll':
          sortedQuery = query(psychologistsRef, limitToFirst(limit));
          break;
        default:
          sortedQuery = query(psychologistsRef, limitToFirst(limit));
      }

      const snapshot = await get(sortedQuery);
  
      if (snapshot.exists()) {
        const psychologists = [];
        snapshot.forEach((childSnapshot) => {
            psychologists.push(childSnapshot.val());
        });
        return psychologists;
      } else {
        return null;
      }     
    } catch {
      toast.error('Something went wrong.');
    }
  };

  export const registerUser = async(credentials) => {
    console.log(credentials);
    try {
      const nameUser = credentials.name;
      const emailUser = credentials.email;
      const passwordUser = credentials.password;
      const userCredential = await createUserWithEmailAndPassword(auth, emailUser, passwordUser)
      await updateProfile(auth.currentUser, {
        displayName: nameUser
        })
      alert ('Account has been successfull created!') 
      return userCredential;
    } catch (error) {
      toast.error('Something went wrong.');
    }
  }

  export const postAppointment = async (appointment) => {
    try {
      await push(ref(database, '/appointments'), { appointment });
    } catch {
      toast.error(`Something went wrong. Please try again.`);
    }
  };

  export const getUserData = async (uid) => {
    try {
      const snapshot = await get(ref(database, `users/${uid}`));  
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return;
      }
    } catch {
      toast.error(`Something went wrong.`);
    }
  };
  
  export const addToFavorites = async (uid, psychologist) => {
    try {
      await push(ref(database, `users/${uid}/favorites`), psychologist);
    } catch {
      toast.error(`Something went wrong. Please try again.`);
    }
  };

  export const removeFromFavorites = async (uid, pushId) => {
    try {
      await remove(ref(database, `users/${uid}/favorites/${pushId}`));
    } catch {
      toast.error(`Something went wrong. Please try again.`);
    }
  };
  
  export const getUserFavorites = async (uid) => {
    try {
      const snapshot = await get(ref(database, `users/${uid}/favorites`));
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return null;
      }
    } catch {
      toast.error(`Something went wrong. Please try again.`);
    }
  };

    export const getUserFavoritesTotal = async (uid) => {
    try {
      const snapshot = await get(query(ref(database, `users/${uid}/favorites`)));
      if (snapshot.exists()) {
        console.log(snapshot.val);
        
        return snapshot.val();
      } else {
        return null;
      }
    } catch {
      toast.error(`Something went wrong.`);
    }
  };



//   export const isPsychologistInFavorites = async (uid, psychologistId) => {
//   try {
//     console.log(uid);
//     console.log(psychologistId);
//     const snapshot = await get(ref(database, `users/${uid}/favorites`));
//     const data = snapshot.val();
//     console.log(data);
//     if (!data) return false;

//     // Перетворюємо об'єкт на масив і перевіряємо наявність id
//     return Object.values(data).map((psych) => psych === psychologistId);
//   } catch (error) {
//     console.error('Помилка при перевірці улюблених:', error);
//     return false;
//   }
// };
  
  export const getUserFavoritesLimited = async (uid, limit, filter) => {
    try {
      const psychologistRef = ref(database, `users/${uid}/favorites`);
      let sortedQuery;
      switch (filter) {
        case 'A to Z':
          sortedQuery = query(
            psychologistRef,
            orderByChild('name'),
            limitToFirst(limit)
          );
          break;
        case 'Z to A':
          sortedQuery = query(
            psychologistRef,
            orderByChild('name'),
            limitToLast(limit)
          );
          break;
        case 'Popular':
          sortedQuery = query(
            psychologistRef,
            orderByChild('rating'),
            limitToLast(limit)
          );
          break;
        case 'Not popular':
          sortedQuery = query(
            psychologistRef,
            orderByChild('rating'),
            limitToFirst(limit)
          );
          break;
        case 'Greater than 10$':
          sortedQuery = query(
            psychologistRef,
            orderByChild('price_per_hour'),
            startAt(10),
            limitToFirst(limit)
          );
          break;
        case 'Less than 10$':
          sortedQuery = query(
            psychologistRef,
            orderByChild('price_per_hour'),
            startAt(0),
            endAt(10),
            limitToFirst(limit)
          );
          break;
        case 'Show all':
          sortedQuery = query(psychologistRef, limitToFirst(limit));
          break;
        default:
          sortedQuery = query(psychologistRef, limitToFirst(limit));
      }
      const snapshot = await get(sortedQuery);
      if (snapshot.exists()) {
        const psychologist = [];
        snapshot.forEach((childSnapshot) => {
          psychologist.push(childSnapshot.val());
        });
        return psychologist;
      } else {
        return null;
      }
    } catch {
      toast.error('Something went wrong.');
    }
  };
  


