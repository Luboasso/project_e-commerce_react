import React from 'react';
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useEffect } from "react";
import { Spin } from "antd";
import { useNavigate } from "react-router-dom";



const Profile = () => {
    const { getUserInfo, user } = useContext(UserContext);
    useEffect(() => {
        getUserInfo();
      }, []);
      const navigate = useNavigate();
      useEffect(() => {
        if (!user) {
          navigate("/login");
        }
      }, [user]);
      if (!user) {
        navigate("/login");
        return <Spin />;
      }
  return (
    <div>
      <h1>Profile</h1>
      {/* <Card
        title={user.first_name}
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <p>{user.email}</p>
      </Card> */}
       <div>
        <h3>Name: {user.first_name}</h3>
        <p>Email: {user.email}</p>
       
      </div>
    </div>
  )
}

export default Profile