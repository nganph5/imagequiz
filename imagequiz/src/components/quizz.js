import React from "react";
import { Link, useParams } from "react-router-dom";
function Quizz() {
  const { flower } = useParams();
  return <div>Hello {flower}</div>;
}
export default Quizz;
