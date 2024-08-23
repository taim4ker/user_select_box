import React, { useState, useEffect } from "react";
import { user_data } from "./user_data";

const SelectUserForm = () => {
  const [keyword, setKeyword] = useState("");
  const [showLists, setShowLists] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchUsers = () => {
    // 初回マウント時はスキップするため
    if (keyword === "") {
      return;
    }

    // ユーザーデータのうち、IDがkeywordを含むものを絞り込む
    const filtered_data = user_data.filter((d) =>
      d.id.toString().includes(keyword)
    );

    setFilteredUsers(filtered_data);
    setShowLists(true);
  };

  useEffect(() => {
    fetchUsers();
  }, [keyword]);

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
