import React from "react";
import { useSelectUserForm } from "./SelectUserForm.hook.js";
import "./SelectUserForm.css";

const SelectUserForm = () => {
  const {
    values: {
      keyword,
      setKeyword,
      showInput,
      showLists,
      filteredUsers,
      selectedUser,
      showSelectedUser,
      onClickInput,
      onBlurSelectUser,
      selectedUserId,
      onClickCloseButton,
    },
  } = useSelectUserForm();

  return (
    <>
      {showInput && (
        <input
          type="integer"
          value={keyword}
          className="forms__title"
          placeholder="ユーザーIDを入力"
          onClick={() => {
            onClickInput();
          }}
          onChange={(e) => setKeyword(e.target.value)}
        />
      )}
      {showLists && (
        <select
          className="select-field"
          size="5"
          id="user_id"
          name="reservation[user_id]"
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
      <input type="hidden" name="reservation[user_id]" value={selectedUserId} />
    </>
  );
};

export default SelectUserForm;
