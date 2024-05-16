import React from "react";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

const Profile = () => {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        alt={"photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: "50%",
        }}
      />
    </>
  );
};

export default Profile;
