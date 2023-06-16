import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  let errorDetails = useRouteError();
  console.log(errorDetails.statusText);
  return (
    <div>
      <h1>Oops Something went wrong!!!</h1>
      <h4>Come Back Later</h4>
      <h5>{errorDetails.statusText}</h5>
    </div>
  );
};

export default ErrorPage;
