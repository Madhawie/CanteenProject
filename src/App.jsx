import { useEffect, useState } from "react";
import LandingPage from "./pages/LadingPage";

function App() {
  const foodItesm = ["Food1", "Food2", "Food3", "Food6", "Food9"];
  const [meales, setMeales] = useState();
  const [isLoading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    const response = await fetch("http://localhost:3000/meal-times");
    let mealtimes = await response.json();
    setLoading(false);
    setMeales(mealtimes);
    // console.log(mealtimes);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline text-green-400">
        Hello world!
      </h1>
      {isLoading && "Loading..."}
      {foodItesm.map((item) => {
        <p>{item}</p>;
      })}

      {meales &&
        meales.map((meal) => {
          console.log(meal);
          return <p>{meal.name}</p>;
        })}
    </>
  );
}

export default App;
