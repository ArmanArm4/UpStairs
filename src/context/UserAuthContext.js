import React from "react";
import { createContext } from "react";
import { useEffect, useState, useCallback } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { useAuthStatus } from "../hooks/useAuthStatus";

const UserAuthContext = createContext();

export const UserInfoProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  const [cartList, setCartList] = useState([]);

  const auth = getAuth();
  const { signedIn } = useAuthStatus();

  const getUserWishList = async () => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setWishList(docSnap.data().wishList);
      setCartList(docSnap.data().cart);
    }
  };

  useEffect(() => {
    if (signedIn) {
      getUserWishList();
    }
  }, [signedIn]);

  return (
    <UserAuthContext.Provider
      value={{
        wishList,
        signedIn,
        setCartList,
        getUserWishList,
        UpdateWishList: getUserWishList,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContext;
