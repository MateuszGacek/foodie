import { MealItemType } from "./../type/mealItemType";
import sql from "better-sqlite3";

const db = sql("meals.db");

export const getMeals: () => MealItemType[] = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return db.prepare("SELECT * FROM meals").all() as MealItemType[];
};

export const getMeal = (slug: string) => {
  return db
    .prepare("SELECT * FROM meals WHERE slug = ?")
    .get(slug) as MealItemType;
};
