import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { GetPost } from "../../Api/Method/method";

const User = () => {
  const [user, setUser] = useState();
  console.log("user", user);
  useEffect(() => {
    const response = getUser();
    setUser(response);
  }, []);
  const getUser = async () => {
    const data = await GetPost();
    setUser(data);
  };
  return <></>;
};

export default User;
