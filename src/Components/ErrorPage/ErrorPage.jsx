import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }
    return (
        <div className="flex flex-col justify-center items-center mt-32 space-y-4">
            <h1 className="text-3xl font-bold">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className="font-bold">
                {error.statusText || error.message}
            </p>
            <div className="text-white">
                <button onClick={handleBack} className="px-3 py-1  rounded bg-gradient-to-r from-primary-first to-primary-second"><span ><FontAwesomeIcon icon={faAngleLeft} /> Back</span></button>
            </div>
        </div>
    );
};

export default ErrorPage;