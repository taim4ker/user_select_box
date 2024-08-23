import { useState, useEffect } from "react";
import { user_data } from "./user_data";

export function useSelectUserForm({ keyword }) {
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

  return {
    values: {
      showLists,
      filteredUsers,
    },
  };
}
