import { useState, useEffect } from "react";
import { user_data } from "./user_data"; // パスは適切に設定してください

// ベースURLを環境変数から取得
const apiBaseUrl = process.env.RAILS_HOST;

export function useSelectUserForm() {
  const [keyword, setKeyword] = useState("");
  const [showInput, setShowInput] = useState(true);
  const [showLists, setShowLists] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([{ id: 1, name: "なし" }]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [showSelectedUser, setShowSelectedUser] = useState(false);
  const [timer, setTimer] = useState(null);

  const fetchUsers = async () => {
    try {
      if (keyword === "") {
        return;
      }

      const filtered_data = user_data.filter((d) =>
        d.id.toString().includes(keyword)
      );

      setFilteredUsers(filtered_data);
      setShowLists(true);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }

    // 500ミリ秒待ってから実行
    const newTimer = setTimeout(() => {
      fetchUsers();
    }, 500);

    setTimer(newTimer);

    // コンポーネントアンマウント時にタイマーをクリア
    return () => clearTimeout(newTimer);
  }, [keyword]);

  const onClickInput = () => {
    if (keyword === "") {
      setShowLists(true);
      return;
    }
  };

  const onBlurSelectUser = (e) => {
    const userName =
      e.target.options[e.target.selectedIndex].getAttribute("data-name");
    setSelectedUser(userName);
    setSelectedUserId(e.target.value);
    setShowInput(false);
    setShowLists(false);
    setShowSelectedUser(true);
  };

  const onClickCloseButton = () => {
    setKeyword("");
    setSelectedUser(null);
    setShowSelectedUser(false);
    setShowInput(true);
    setShowLists(true);
    setFilteredUsers([{ id: 1, name: "なし" }]);
  };

  return {
    values: {
      keyword,
      setKeyword,
      setShowLists,
      showInput,
      showLists,
      filteredUsers,
      selectedUser,
      selectedUserId,
      showSelectedUser,
      onClickInput,
      onBlurSelectUser,
      onClickCloseButton,
    },
  };
}
