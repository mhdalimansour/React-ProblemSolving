import Axios from "axios";
import { useEffect, useState } from "react";
import Navi from "../components/Navi";
import ProblemCard from "../components/ProblemCard";
import "../styles.css";

function PracticePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("/data.json");
        setData(response.data.problems);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const items = [];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    items[i] = <ProblemCard key={i} data={element}></ProblemCard>;
  }

  return (
    <>
      <Navi></Navi>
      <h1 style={{ textAlign: "center" }}>Practice Problems!</h1>
      <div className="container">{items}</div>
    </>
  );
}
export default PracticePage;
