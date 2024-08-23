import { useState, useEffect } from "react";
import { user_data } from "./user_data";

export function useSelectUserForm() {
  const [keyword, setKeyword] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showInput, setShowInput] = useState(true);
  const [showLists, setShowLists] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showSelectedUser, setShowSelectedUser] = useState(false);

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

  const onBlurSelectUser = (e) => {
    const userName =
      e.target.options[e.target.selectedIndex].getAttribute("data-name");

    setShowInput(false);
    setShowLists(false);
    setSelectedUser(userName);
    setShowSelectedUser(true);
  };

  const onClickCloseButton = () => {
    setKeyword("");
    setFilteredUsers([]);
    setShowInput(true);
    setShowLists(false);
    setShowSelectedUser(false);
  };

  return {
    values: {
      keyword,
      setKeyword,
      showInput,
      showLists,
      filteredUsers,
      selectedUser,
      showSelectedUser,
      onBlurSelectUser,
      onClickCloseButton,
    },
  };
}
