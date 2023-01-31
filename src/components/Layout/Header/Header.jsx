import { Fragment } from "react";

import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

import styles from "./Header.module.css";

import mealsImg from "../../../assets/images/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCartHandler}  />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImg} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
