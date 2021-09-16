const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-200 py-2">
      <div className="w-11/12 mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* University info */}
        <div className="text-sm text-center sm:text-left mb-2 sm:mb-0">
          <h4 className="font-semibold">Masters of Arts </h4>
          <h5>English Literature</h5>
          <p>National University (2017-18)</p>
        </div>

        {/* Code */}
        <a
          href="https://github.com/TutulDevs/react-test-disl"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-gray-600 hover:border-green-200 transition duration-300 ease-in rounded-full py-1 px-2 text-xs sm:text-sm"
        >
          Source Code
        </a>
      </div>
    </footer>
  );
};

export default Footer;
