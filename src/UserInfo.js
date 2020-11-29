import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const UserInfoContainer = styled.div`
  background-color: #64dfdf;
  border: 2px solid #023047;
  border-radius: 5px;
  margin: 30px auto;
  max-width: 400px;
  text-align: center;
  width: 100%;
`;

const UserInfo = ({ value }) => {
  const user = value && value.userSelected && value.userSelected[0];

  return (
    <UserInfoContainer>
      <h1>You have selected...</h1>
      <h1>{user.username}</h1>
      <p>AKA</p>
      <h2>{user.name}</h2>
      <p>of:</p>
      <h3>
        {user.address.suite}, {user.address.street},
      </h3>
      <h3>{user.address.city}</h3>
    </UserInfoContainer>
  );
};

UserInfo.propTypes = {
  value: PropTypes.object
};

export default UserInfo;
