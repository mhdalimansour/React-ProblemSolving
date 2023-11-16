import { Button, Card } from "react-bootstrap";

function ProblemCard(props) {
  const data = props.data;

  function getStars() {
    let str = "";
    const n = data.difficulty;
    for (let i = 0; i < n; i++) {
      str += "⭐";
    }
    return str;
  }

  const techs = data.technologies.map((el) => {
    return <span key={el}>{el} </span>;
  });

  return (
    <>
      <Card
        style={{
          maxWidth: "40rem",
          minWidth: "20rem",
          margin: "30px",
          textAlign: "center",
        }}
      >
        <Card.Header>
          <Card.Title>{data.title}</Card.Title>
          <Card.Subtitle>{getStars()}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Text>{techs}</Card.Text>
          <Button variant="secondary" href={`/problems/${data.slug}`}>
            View Problem
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
export default ProblemCard;
