import { auth } from "../../config/fbconfig";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

const setAuthedUser = (user) => {
  return {
    type: LOGIN_USER,
    user,
  };
};

const logOutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export function handleSetAuthedUser(email, password) {
  return (dispatch) => {
    return signInWithEmailAndPassword(auth, email, password).then(
      ({ user }) => {
        dispatch(setAuthedUser(user.uid));
      }
    );
  };
}

export function handleLogOutUser() {
  return (dispatch) => {
    return signOut(auth)
      .then(() => dispatch(logOutUser()))
      .catch((err) => console.log(err));
  };
}
