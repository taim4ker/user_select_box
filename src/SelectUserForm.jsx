import React, { useState, useEffect } from "react";
import { user_data } from "./user_data";

const SelectUserForm = () => {
  const [keyword, setKeyword] = useState("");
  const [showLists, setShowLists] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [timer, setTimer] = useState(null);

  const fetchUsers = () => {
    if (keyword === "") {
      return;
    }

    const filtered_data = user_data.filter((d) =>
      d.id.toString().includes(keyword)
    );

    setFilteredUsers(filtered_data);
    setShowLists(true);
  };

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }

    // 500ミリ秒まってから実行
    const newTimer = setTimeout(() => {
      fetchUsers();
    }, 500);

    setTimer(newTimer);

    return () => clearTimeout(newTimer);
  }, [keyword]);

  return (
    <>
      <div className="c-forms__content is-md">
        <input
          type="integer"
          value={keyword}
          className="forms__title"
          placeholder="ユーザーIDを入力"
          onChange={(e) => setKeyword(e.target.value)}
        />
        {showLists && (
          // @todo 見た目を整形する
          <select
            className="select-field"
            size="5"
            id="user_id"
            name="reservation[user_id]"
          >
            {filteredUsers.map((user, index) => (
              <option key={index} value={user.id}>
                {user.id} {user.name}
              </option>
            ))}
          </select>
        )}
      </div>
    </>
  );
};

export default SelectUserForm;
