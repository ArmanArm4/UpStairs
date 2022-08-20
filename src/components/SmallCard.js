import React, { useState, useEffect, useContext } from "react";
import classes from "./componentsCss/smallCard.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getAuth } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import UserAuthContext from "../context/UserAuthContext";

const variants = {
  animate: { scale: [0.8, 1.2, 1] },
  init: { scale: 1 },
};

function SmallCard({ device, FromwishList }) {
  console.log(FromwishList);
  const [isLiked, setIsLiked] = useState(false);

  const { wishList, signedIn, getUserWishList } = useContext(UserAuthContext);

  // check if the device is on wishlist
  useEffect(() => {
    wishList.forEach((dev) => {
      if (dev == device.id) {
        setIsLiked(true);
      }
    });
  }, [wishList]);

  const auth = getAuth();

  const isLikedHandler = async () => {
    const userRef = doc(db, "users", auth.currentUser.uid);
    if (isLiked) {
      setIsLiked(false);
      const newWishList = wishList.filter((item) => {
        return item !== device.id;
      });

      await updateDoc(userRef, { wishList: newWishList });
    }

    if (!isLiked) {
      setIsLiked(true);
      let newWishList = [...wishList];

      if (!newWishList.includes(device.id)) {
        newWishList.push(device.id);
      }

      await updateDoc(userRef, { wishList: newWishList });
    }
    getUserWishList();
  };

  return (
    <div className={classes.small_card}>
      <div
        style={{
          backgroundImage: `url(${device.image})`,
        }}
      >
        {signedIn && !FromwishList && (
          <motion.i
            onClick={isLikedHandler}
            animate={isLiked ? "animate" : "init"}
            transition={{ duration: 0.5 }}
            variants={variants}
            className={`${isLiked ? "fas" : "far"} fa-heart`}
          ></motion.i>
        )}
      </div>
      <Link className="links" to={`/device/${device.id}`}>
        <h4>{device.name}</h4>
        <h5>${device.price}</h5>
      </Link>
    </div>
  );
}

export default SmallCard;
