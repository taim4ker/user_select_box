import React, { useState, useEffect } from "react";

const user_data = [
  { id: 110, name: "天須斗 太郎" },
  { id: 111, name: "山本由伸" },
  { id: 112, name: "桜井日奈子" },
  { id: 113, name: "千鳥ノブ" },
  { id: 114, name: "千鳥大悟" },
  { id: 115, name: "山根良顕" },
  { id: 116, name: "日村勇紀" },
  { id: 117, name: "ポルノグラフティー" },
  { id: 118, name: "前田健太" },
  { id: 119, name: "加藤大地" },
  { id: 120, name: "田村舞" },
  { id: 121, name: "玉置浩二" },
  { id: 122, name: "有吉弘行" },
  { id: 123, name: "岡本雄輝" },
  { id: 124, name: "スティーブ・ジョブズ" },
  { id: 125, name: "ビル ゲイツ" },
  { id: 126, name: "粗品" },
  { id: 127, name: "綾瀬はるか" },
  { id: 128, name: "高橋大輔" },
  { id: 129, name: "原田泰造" },
  { id: 130, name: "星野仙一" },
  { id: 131, name: "稲葉浩志" },
  { id: 132, name: "矢沢永吉" },
  { id: 133, name: "オダギリジョー" },
  { id: 134, name: "ブルゾンちえみ" },
  { id: 135, name: "藤井風" },
];

const SelectUserForm = () => {
  return (
    <>
      <input type="integer" placeholder="ユーザーIDを入力" />
      <select size="5">
        {user_data.map((user, index) => (
          <option key={index} value={user.id}>
            {user.id} {user.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectUserForm;
