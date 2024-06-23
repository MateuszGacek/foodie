import Link from "next/link";

const Home = () => {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p>
        <Link href="meals">Meals</Link>
      </p>
      <p>
        <Link href="meals/share">share</Link>
      </p>
      <p>
        <Link href="community">community</Link>
      </p>
    </main>
  );
};
export default Home;
