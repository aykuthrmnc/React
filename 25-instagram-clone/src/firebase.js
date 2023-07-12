import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { userHandle } from "utils";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const dbUser = await getDoc(doc(db, "users", user.uid));
    let data = {
      uid: user.uid,
      fullname: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      ...dbUser.data(),
    };
    userHandle(data);
  } else {
    userHandle(false);
  }
});

export const getUserInfo = async (uname) => {
  const username = await getDoc(doc(db, "usernames", uname));
  if (username.exists()) {
    return (await getDoc(doc(db, "users", username.data().uid))).data();
  } else {
    toast.error("Kullanıcı bulunamadı!");
    throw new Error("Kullanıcı bulunamadı!");
  }
};

export const login = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    toast.error(err.code);
  }
};

export const logout = async () => {
  await signOut(auth).catch((err) => {
    toast.error(err.code);
  });
};

export const register = async ({ email, password, fullname, username }) => {
  try {
    const user = await getDoc(doc(db, "usernames", username));
    if (user.exists()) {
      toast.error(`${username} kullanıcı adı başkası tarafından kullanılıyor.`);
    } else {
      const response = await createUserWithEmailAndPassword(auth, email, password);

      if (response.user) {
        await setDoc(doc(db, "usernames", username), {
          uid: response.user.uid,
        });

        await setDoc(doc(db, "users", response.user.uid), {
          fullname,
          username,
          followers: [],
          following: [],
          notifications: [],
          website: "",
          bio: "",
          phoneNumber: "",
          gender: "",
          posts: 0,
        });

        await updateProfile(auth.currentUser, {
          displayName: fullname,
        });

        return response.user;
      }
    }
  } catch (err) {
    toast.error(err.code);
  }
};
