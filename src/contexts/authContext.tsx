import { signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../services/firebase";

type AuthContextType = {
  user: {
    id: string;
    photoURL?: string;
    displayName?: string;
    email?: string;
    xp: string;
    completeChallenges: string;
    level: string;
  };
  signIn: Function;
};

type propsType = {
  children?: JSX.Element;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: propsType) {
  const [user, setUser] = useState({
    id: "",
    photoURL: "",
    displayName: "",
    email: "",
    xp: "0",
    completeChallenges: "00",
    level: "1",
  });
  const history = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          id: user.uid,
          photoURL: user.photoURL ? user.photoURL : "",
          displayName: user.displayName ? user.displayName : "",
          email: user.email ? user.email : "",
          xp: "0",
          completeChallenges: "00",
          level: "1",
        });
        history("/Home");
        return () => {
          unsubscribe();
        };
      } else {
        history("/");
      }
    });
  }, []);

  function signIn() {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser({
          id: result.user.uid,
          photoURL: user.photoURL ? user.photoURL : "",
          displayName: user.displayName ? user.displayName : "",
          email: user.email ? user.email : "",
          xp: "0",
          completeChallenges: "00",
          level: "1",
        });
        history("/Home");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}
