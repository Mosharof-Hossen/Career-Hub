import { useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div className="flex flex-col justify-center items-center mt-32 space-y-4">
            <h1 className="text-3xl font-bold">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className="font-bold">
                {error.statusText || error.message}
            </p>
        </div>
    );
};

export default ErrorPage;