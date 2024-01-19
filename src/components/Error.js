import { useRouteError } from "react-router-dom";

const Error = ()=> {
    const routeError = useRouteError();
    console.log(routeError);
    return (
        <div className="error-container">
            <h1>Oops... </h1>
            <h1>Something went wrong </h1>
            <h3>{routeError.status} : {routeError.statusText}</h3>
        </div>
    )
}

export default Error;