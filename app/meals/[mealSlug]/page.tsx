const MealDetails = ({ params }: { params: { mealSlug: string } }) => {
  return (
    <main>
      <h1>MealDetails: {params.mealSlug}</h1>
    </main>
  );
};

export default MealDetails;
