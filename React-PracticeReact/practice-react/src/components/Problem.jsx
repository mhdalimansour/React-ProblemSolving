import Axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import CodeBlock from "./CodeBlock";
import Footer from "./Footer";
import Navi from "./Navi";

import ColorGuessingGame from "./problems/ColorGuessingGame";
import CountryCapitalGame from "./problems/CountryCapitalGame.tsx";
import PasscodePage from "./problems/PasscodePage";
import Stoplight from "./problems/Stoplight.tsx";
import TapCircles from "./problems/TapCircles";
import WackAMole from "./problems/WackAMole";

/**
 * Tap Circles needs adjustments
 * The typescript files are not rendering
 */

const mapComponents = {
  ColorGuessingGame: ColorGuessingGame,
  Stoplight: Stoplight,
  TapCircles: TapCircles,
  WackAMole: WackAMole,
  PasscodePage: PasscodePage,
  CountryCapitalGame: CountryCapitalGame,
};

function Problem() {
  const { slug } = useParams();
  const [problem, setProblem] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("/data.json");
        const { problems } = response.data;
        const matchedProblem = problems.find((p) => {
          return p.slug === slug;
        });
        setProblem(matchedProblem);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [slug]);

  const scrollToMyDiv = () => {
    const element = document.getElementById("solution");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  function getStars() {
    let str = "";
    const n = problem.difficulty;
    for (let i = 0; i < n; i++) {
      str += "⭐";
    }
    return str;
  }

  if (!problem) {
    return <div>Problem Not Found!</div>;
  }
  const ComponentName = problem.solution.slice(0, -4);
  const MatchedComponent = mapComponents[ComponentName];
  return (
    <>
      <Navi />
      <div style={{ textAlign: "center" }}>
        <h1>{problem.title}</h1>

        <h3>{getStars()}</h3>

        <div style={{ margin: "20px" }}>
          <Button variant="secondary" onClick={scrollToMyDiv}>
            Jump to Solution
          </Button>
          <br />
          <Button variant="danger" href={problem.video} target="_blank">
            Youtube Video
          </Button>
        </div>

        <h4>Problem Statement</h4>
        <div
          className="container"
          style={{ textAlign: "left", fontSize: "18px" }}
        >
          <pre style={{ margin: "20px" }}>{problem.statement}</pre>
        </div>

        <div>
          <h4>End Product</h4>
          <MatchedComponent />
        </div>

        <h4 id="solution">Solution</h4>

        <div className="code-container" style={{ margin: "0px" }}>
          <pre>
            <CodeBlock fileName={`/solution-codes/${problem.solution}`} />
          </pre>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Problem;
