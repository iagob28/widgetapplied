import { signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, database, provider } from "../services/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

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
  changeXp: Function;
  changeLevel: Function;
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

  async function changeXp(experience: number) {
    setUser({
      id: user.id,
      photoURL: user.photoURL ? user.photoURL : "",
      displayName: user.displayName ? user.displayName : "",
      email: user.email ? user.email : "",
      xp: String(parseInt(user.xp) + experience),
      completeChallenges: String(
        parseInt(user.completeChallenges) + 1
      ).padStart(2, "0"),
      level: user.level,
    });
  }

  async function changeLevel() {
    setUser({
      id: user.id,
      photoURL: user.photoURL ? user.photoURL : "",
      displayName: user.displayName ? user.displayName : "",
      email: user.email ? user.email : "",
      xp: user.xp,
      completeChallenges: user.completeChallenges,
      level: String(parseInt(user.level) + 1),
    });
  }
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(database, user.uid, "userData");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setUser({
            id: user.uid,
            photoURL: user.photoURL ? user.photoURL : "",
            displayName: user.displayName ? user.displayName : "",
            email: user.email ? user.email : "",
            xp: data.xp,
            completeChallenges: data.completeChallenges,
            level: data.level,
          });
        } else {
          setUser({
            id: user.uid,
            photoURL: user.photoURL ? user.photoURL : "",
            displayName: user.displayName ? user.displayName : "",
            email: user.email ? user.email : "",
            xp: "0",
            completeChallenges: "00",
            level: "1",
          });
          await setDoc(doc(database, user.uid, "userData"), {
            xp: "0",
            completeChallenges: "00",
            level: "1",
          });
        }

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
          photoURL: result.user.photoURL ? result.user.photoURL : "",
          displayName: result.user.displayName ? result.user.displayName : "",
          email: result.user.email ? result.user.email : "",
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
    <AuthContext.Provider value={{ user, signIn, changeXp, changeLevel }}>
      {props.children}
    </AuthContext.Provider>
  );
}
