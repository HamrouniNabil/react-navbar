import React from "react";

function Navbar({ linksArray }) {
  return (
    <ul className=" nav-list">
      {linksArray.map((el, key) => (
        <li key={key}>
          {el.title}
          {el.subMenu && (
            <ul className="menu">
              {el.subMenu.map((el, i) => (
                <li key={i}>{el}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
