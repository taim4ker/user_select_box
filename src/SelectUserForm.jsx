import React, { useState } from "react";
import { useSelectUserForm } from "./SelectUserForm.hook.js";

const SelectUserForm = () => {
  const [keyword, setKeyword] = useState("");

  const {
    values: { showLists, filteredUsers },
  } = useSelectUserForm({ keyword });

  return (
    <>
      <input
        type="integer"
        value={keyword}
        placeholder="ユーザーIDを入力"
        onChange={(e) => setKeyword(e.target.value)}
      />
      {showLists && (
        <select size="5">
          {filteredUsers.map((user, index) => (
            <option key={index} value={user.id}>
              {user.id} {user.name}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default SelectUserForm;
