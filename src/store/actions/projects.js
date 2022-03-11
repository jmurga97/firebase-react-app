import { db } from "../../config/fbconfig";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const CREATE_PROJECT = "CREATE_PROJECT";
export const RECEIVE_DATA = "RECEIVE_DATA";

const receiveProjectsData = (projects) => {
  return {
    type: RECEIVE_DATA,
    projects,
  };
};

const createProject = (project) => {
  return {
    type: CREATE_PROJECT,
    project,
  };
};

export function handleReceiveProjectsData() {
  return (dispatch) => {
    return getDocs(collection(db, "projects"))
      .then((querySnapshot) => {
        const projects = [];
        querySnapshot.forEach((doc) => {
          projects.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        dispatch(receiveProjectsData(projects));
      })
      .catch((err) => console.log(err));
  };
}

export function handleCreateProject(project) {
  return (dispatch) => {
    project = {
      ...project,
      authorFirstName: "Juan",
      authorLastName: "Murga",
      timestamp: new Date(),
    };
    addDoc(collection(db, "projects"), project)
      .then((docRef) => {
        dispatch(createProject({
          ...project,
          id: docRef.id
        }));
      })
      .catch((err) => console.log("Error al cargar el proyecto"));
  };
}
