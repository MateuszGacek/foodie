import { MealItemType } from "./../type/mealItemType";
import sql from "better-sqlite3";

const db = sql("meals.db");

const getMeals: () => MealItemType[] = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Loading meals failed");
  return db.prepare("SELECT * FROM meals").all() as MealItemType[];
};

export default getMeals;
