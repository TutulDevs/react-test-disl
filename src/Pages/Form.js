import PageHeader from "../components/UI/PageHeader";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit");
  };

  return (
    <>
      <PageHeader title="Form" />

      {/* Form components */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center p-4 h-5/6"
      >
        {/* Name formControl */}
        <div className="w-60 mt-3 formControl">
          <label htmlFor="name" className="block mb-1 ml-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="John Doe"
            className="rounded-md ring-1 ring-green-300 py-2 px-4"
          />
        </div>

        {/* Email formControl */}
        <div className="w-60 mt-3 formControl">
          <label htmlFor="email" className="block mb-1 ml-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="john@doe.com"
            className="rounded-md ring-1 ring-green-300 py-2 px-4"
          />
        </div>

        {/* Gender formControl */}
        <div className="w-60 mt-3 formControl">
          <label htmlFor="gender" className="block mb-1 ml-1">
            Gender
          </label>
          <select
            name="gender"
            id="gender"
            required
            className="w-60 bg-white rounded-md ring-1 ring-green-300 py-2 px-4 appearance-none"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Phone formControl */}
        <div className="w-60 mt-3 formControl">
          <label htmlFor="phone" className="block mb-1 ml-1">
            Telephone
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            required
            placeholder="015...."
            className="rounded-md ring-1 ring-green-300 py-2 px-4 appearance-none"
          />
        </div>

        {/* Button formControl */}
        <div className="w-60 mt-6 formControl text-center">
          <button
            type="submit"
            className="w-full tracking-wider py-2 pt-3 px-6 bg-green-600 text-white text-lg font-semibold  rounded-full shadow-lg hover:shadow-none"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
