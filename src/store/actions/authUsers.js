import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../config/fbconfig";
import { db } from "../../config/fbconfig";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";

export const CREATE_USER = "CREATE_USER";
export const RECEIVE_USER = 'RECEIVE_USER'

const receiveUsers = (users) => {
    return{
        type: RECEIVE_USER,
        users
    }
}

const createUser = (user) => {
  return {
    type: CREATE_USER,
    user,
  };
};

export function handleReceiveUsers(){
    return (dispatch) => {
        return getDocs(collection(db,'users'))
            .then( querySnapshot => {
                let authUsers = {}
                querySnapshot.forEach((doc) => {
                    const user = doc.data()
                    //console.log(doc.data())
                    authUsers = {
                        ...authUsers,
                        [user.authorId]:{
                            ...user
                        }
                    }
                })
                dispatch(receiveUsers(authUsers))
            })
    }
}

export function handleCreateUser({
  email,
  password,
  authorFirstName,
  authorLastName,
  initials,
}) {
  return async function (dispatch) {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const authorId = userCredentials.user.uid;
      const user = {
        authorId,
        initials,
        authorFirstName,
        authorLastName,
      };
      await updateProfile(userCredentials.user, {
        displayName: `${authorFirstName} ${authorLastName}`,
        //phoneNumber
        //photoURL
      });
      await setDoc(doc(db, "users", authorId), user);
      dispatch(createUser(user));
    } catch (err) {
      console.log(err);
    }
  };
}
