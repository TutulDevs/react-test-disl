import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      {/* ErrorPage components */}
      <div className="flex flex-col justify-center items-center text-center p-4 h-5/6">
        <h2 className="text-2xl mb-6">Page is not found!</h2>

        <Link
          to="/"
          className="py-2 px-6 bg-green-600 text-white text-lg rounded-full shadow-lg hover:shadow-none"
        >
          Go To Home
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
