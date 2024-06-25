import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "../components/meals/meals-grid";

const Meals = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicioys meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your recipe!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
};

export default Meals;
