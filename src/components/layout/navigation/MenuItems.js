import { Link } from "react-router-dom";
function menuItems() {
  const menuItemProduct = [
    { name: "제품>", page: "/product", className: "product" },
    { name: "식품", page: "/product/food" },
    { name: "생활", page: "/product/life" },
    { name: "뷰티", page: "/product/beauty" },
    { name: "운동", page: "/product/exercise" },
    { name: "유아동", page: "/product/kid" },
    { name: "디지털", page: "/product/digital" },
    { name: "패션/잡화", page: "/product/fasion" },
    { name: "반려동물", page: "/product/pet" },
    { name: "기타", page: "/product/etc" },
    { name: "서비스", page: "/product/service" },
  ];
  const menuItemLocation = [
    { name: "지역>", page: "/location", className: "location" },
    { name: "맛집", page: "/location/restaurant" },
    { name: "뷰티", page: "/location/beauty" },
    { name: "숙박", page: "/location/lodgment" },
    { name: "문화", page: "/location/culture" },
    { name: "출장", page: "/location/business" },
    { name: "포장", page: "/location/packaging" },
    { name: "서비스", page: "/location/service" },
    { name: "시크릿쇼퍼", page: "/location/secretshoper" },
    { name: "기타", page: "/location/etc" },
  ];
  const menuItemReprters = [
    { name: "기자단>", page: "/reporters", className: "reporters" },
    { name: "원고형", page: "/reporters/document" },
    { name: "참여형", page: "/reporters/participate" },
    { name: "회수형", page: "/reporters/retrieve" },
  ];
  return (
    <ul>
      {menuItemProduct.map((menu) => (
        <li key={menu.page} className="menuitem">
          <Link to={menu.page}>{menu.name}</Link>
        </li>
      ))}
      {menuItemLocation.map((menu) => (
        <li key={menu.page} className="menuitem">
          <Link to={menu.page}>{menu.name}</Link>
        </li>
      ))}
      {menuItemReprters.map((menu) => (
        <li key={menu.page} className="menuitem">
          <Link to={menu.page}>{menu.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default menuItems;
