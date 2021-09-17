import { useContext, useRef } from "react";
import PageHeader from "../components/UI/PageHeader";
import AppContext from "../store/AppContext";

const Form = () => {
  // input refs
  const nameRef = useRef();
  const emailRef = useRef();
  const genderRef = useRef();
  const phoneRef = useRef();

  // userList
  const { userList } = useContext(AppContext);

  //   let a = userList.filter((el) => el.email === "test@test.dev").length;
  //   // let b = a.length === 0 ? false : true;
  //   console.log(!!a);

  const handleSubmit = (e) => {
    e.preventDefault();

    // values
    const nameValue = nameRef.current.value.trim();
    const emailValue = emailRef.current.value.trim();
    const genderValue = genderRef.current.value;
    const phoneValue = phoneRef.current.value;

    // data object
    const userData = {
      name: nameValue,
      email: emailValue,
      gender: genderValue,
      phone: Number(phoneValue),
    };

    // let's check if the email is in the context array
    // if true > return and alert
    // if false (doesn't match) > add into the context array
    const sameEmail = userList.filter(
      (el) => el.email === userData.email
    ).length;

    if (sameEmail) {
      alert("The given email id is in use! \nTry with another email.");
      return;
    } else {
      console.log(userData);
    }
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
            ref={nameRef}
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
            ref={emailRef}
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
            ref={genderRef}
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
            ref={phoneRef}
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
