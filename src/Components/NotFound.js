import { useParams } from "react-router-dom";
function NotFound() {
  let { notFound } = useParams();

  return <h2>NotFound404</h2>;
}
export default NotFound;
