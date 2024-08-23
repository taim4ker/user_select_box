import React, { useState } from "react";
import { useSelectUserForm } from "./SelectUserForm.hook.js";
import "./SelectUserForm.css";

const SelectUserForm = () => {
  const {
    keyword,
    setKeyword,
    showInput,
    showLists,
    filteredUsers,
    selectedUser,
    showSelectedUser,
    onBlurSelectUser,
    onClickCloseButton,
  } = useSelectUserForm();

  return (
    <>
      {showInput && (
        <input
          type="integer"
          value={keyword}
          placeholder="ユーザーIDを入力"
          onChange={(e) => setKeyword(e.target.value)}
        />
      )}
      {showLists && (
        <select
          size="5"
          onBlur={(e) => {
            onBlurSelectUser(e);
          }}
        >
          {filteredUsers.map((user, index) => (
            <option
              key={index}
              value={user.id}
              data-name={`${user.id},${user.name}`}
            >
              {user.id} {user.name}
            </option>
          ))}
        </select>
      )}
      {showSelectedUser && (
        <div className="tag-container">
          <span className="tag-name">{selectedUser}</span>
          <button
            className="close-button"
            onClick={() => {
              onClickCloseButton();
            }}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
};

export default SelectUserForm;
