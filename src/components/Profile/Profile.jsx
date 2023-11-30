import React from 'react';
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useEffect } from "react";
import { Card, Spin } from "antd";


const Profile = () => {
    const { getUserInfo, user } = useContext(UserContext);
    useEffect(() => {
        getUserInfo();
      }, []);
      
      useEffect(() => {
        if (!user) {
          navigate("/login");
        }
      }, [user]);
      if (!user) {
        return <Spin />;
      }
  return (
    <div>
      <h1>Profile</h1>
      <Card
        title={user.first_name}
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <p>{user.email}</p>
      </Card>
    </div>
  )
}

export default Profile