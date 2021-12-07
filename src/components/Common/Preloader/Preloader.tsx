import React from "react";
import style from "./Preloader.module.css";
import loader from "../../../assets/img/loader.svg";

const Preloader = () => {
  return (
    <div className={style.wrap}>
      <img className={style.img} src={loader} alt="loader" />
    </div>
  );
};

export default Preloader;
