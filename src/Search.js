import React, { createRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import UserInfo from "./UserInfo";

const Container = styled.div`
  margin: 0 auto;
  max-width: 400px;
  width: 100%;
`;

const StyledInput = styled.input`
  border: 1px solid grey;
  border-radius: 5px;
  height: 30px;
  margin-bottom: 1px;
  padding: 0 5px;
  width: 100%;
`;

const FilteredUser = styled.div`
  background-color: #fcfaf9;
  border: 1px solid #023047;
  border-radius: 5px;
  cursor: pointer;
  height: 30px;
  padding: 5px;
  width: 100%;
`;

const Search = ({ action, value }) => {
  const filteredUsers = value && value.filteredUsers;
  const userSelected = value && value.userSelected;
  const textInput = createRef();
  const handleKeyUp = (event) => {
    let payload = event.currentTarget.value || "";
    action("FETCH_REQUESTED", payload);
  };

  const handleClick = (event) => {
    const payload = event.currentTarget.id;
    action("USER_SELECTED", payload);
    action("FETCH_REQUESTED", "");
    console.log(textInput.current);
    textInput.current.value = "";
  };

  return (
    <Container>
      <StyledInput
        id="input"
        type="text"
        placeholder="Search username"
        onKeyUp={handleKeyUp}
        ref={textInput}
      />

      {filteredUsers &&
        value.filteredUsers.map((username) => {
          return (
            <FilteredUser key={username} id={username} onClick={handleClick}>
              {username}
            </FilteredUser>
          );
        })}
      {userSelected && <UserInfo value={value} />}
    </Container>
  );
};

Search.propTypes = {
  value: PropTypes.object,
  action: PropTypes.func
};

export default Search;
