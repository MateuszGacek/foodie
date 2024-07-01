import { Suspense } from "react";
import Link from "next/link";

import classes from "./page.module.css";
import MealsGrid from "../components/meals/meals-grid";
import getMeals from "../lib/meals";
import MealsLoading from "./loading-out";

const MealsItems: () => React.ReactNode = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

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
      <Suspense fallback={<p>Loading</p>}>
        <MealsItems />
      </Suspense>
      <main className={classes.main}></main>
    </>
  );
};

export default Meals;
