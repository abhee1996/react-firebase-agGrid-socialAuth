
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";
import firebase from "../config";
import { createFirestoreInstance } from "redux-firestore";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";



export const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument({ getFirebase }))
  );

export  const rrfProps = {
    firebase,
    config: {},
    dispatch: store.dispatch,
    createFirestoreInstance,
};
  
 export function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth);
    if (!isLoaded(auth))
      return (
        <div className="text-center">
          <div
            className="spinner-grow text-primary"
            style={{ width: "7rem", height: "7rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    return children;
  }
  