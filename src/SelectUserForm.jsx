import React, { useState } from "react";
import { useSelectUserForm } from "./SelectUserForm.hook.js";
import "./SelectUserForm.css";

const SelectUserForm = () => {
  const [keyword, setKeyword] = useState("");
  const [showInput, setShowInput] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showSelectedUser, setShowSelectedUser] = useState(false);

  const {
    values: { showLists, filteredUsers, setShowLists, setFilteredUsers },
  } = useSelectUserForm({ keyword });

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
            const userName =
              e.target.options[e.target.selectedIndex].getAttribute(
                "data-name"
              );

            setShowInput(false);
            setShowLists(false);
            setSelectedUser(userName);
            setShowSelectedUser(true);
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
              setKeyword("");
              setFilteredUsers([]);
              setShowInput(true);
              setShowLists(false);
              setShowSelectedUser(false);
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
