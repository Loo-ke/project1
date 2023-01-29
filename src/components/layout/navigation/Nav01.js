import { Link } from "react-router-dom";
import { useState } from "react";
import ModalBasic from "../../common/modal/ModalBasic";
import "./Nav01.scss";
import MenuItems from "./MenuItems";

const Nav01 = () => {
  const category = [
    { name: "오늘오픈", page: "/explore/cafe" },
    { name: "제품", page: "/community" },
    { name: "지역", page: "/point" },
    { name: "기자단", page: "/qna" },
    { name: "구매평", page: "/qna" },
  ];
  // const showMenuItems = () => {};
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };
  return (
    <div className="Nav01">
      <p className="Nav01_menu_toggle" onClick={showModal}>
        = 전체 카테고리
      </p>

      <ul className="Nav01__list">
        {category.map((menu) => (
          <li key={menu.page} className="Nav01__menu">
            <Link to={menu.page}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav01;
