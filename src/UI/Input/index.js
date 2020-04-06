import React from "react";
import Style from "../Input/index.module.css";

function Input() {
  return (
    <>
      <form>
        <label>
          Имя:
          <input type="text" name="name" className={Style.UiDefault} />
        </label>
        <input type="submit" value="Отправить" />
      </form>
    </>
  );
}

export default Input;
