import { useContext, useRef } from "react";
import { useHistory } from "react-router";
import PageHeader from "../components/UI/PageHeader";
import AppContext from "../store/AppContext";

// classes
const classes = {
  form: `flex flex-col justify-center items-center p-4 pt-8 h-5/6`,
  formControl: `w-full sm:w-72 mt-3`,
  formLabel: `block mb-1 ml-1`,
  formInput: `w-full py-2 px-4 rounded-md outline-none ring-1 focus:ring-4 ring-green-300 bg-white duration-300`,
  button: `w-full py-2 pt-2.5 px-6 bg-green-600 text-white text-lg font-semibold  tracking-wider rounded-full shadow-lg hover:shadow-none`,
};

const Form = () => {
  // input refs
  const nameRef = useRef();
  const emailRef = useRef();
  const genderRef = useRef();
  const phoneRef = useRef();

  // history
  const history = useHistory();

  // userList
  const { userList, onAddUser } = useContext(AppContext);

  // form handling
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
    const sameEmail = userList.filter((el) => el.email === userData.email);

    if (sameEmail.length) {
      alert("The given email id is in use! \nTry with another email.");
      return;
    } else {
      onAddUser(userData);
      history.push("/list");
    }
  };

  return (
    <>
      <PageHeader title="Form" />

      {/* Form components */}
      <form onSubmit={handleSubmit} className={classes.form}>
        {/* Name formControl */}
        <div className={classes.formControl}>
          <label htmlFor="name" className={classes.formLabel}>
            Full Name
          </label>
          <input
            ref={nameRef}
            type="text"
            name="name"
            id="name"
            required
            placeholder="John Doe"
            className={classes.formInput}
          />
        </div>

        {/* Email formControl */}
        <div className={classes.formControl}>
          <label htmlFor="email" className={classes.formLabel}>
            Email
          </label>
          <input
            ref={emailRef}
            type="email"
            name="email"
            id="email"
            required
            placeholder="john@doe.com"
            className={classes.formInput}
          />
        </div>

        {/* Gender formControl */}
        <div className={classes.formControl}>
          <label htmlFor="gender" className={classes.formLabel}>
            Gender
          </label>
          <select
            ref={genderRef}
            name="gender"
            id="gender"
            required
            className={`${classes.formInput} appearance-none`}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Phone formControl */}
        <div className={classes.formControl}>
          <label htmlFor="phone" className={classes.formLabel}>
            Telephone
          </label>
          <input
            ref={phoneRef}
            type="number"
            name="phone"
            id="phone"
            required
            placeholder="015...."
            className={`${classes.formInput} appearance-none`}
          />
        </div>

        {/* Button formControl */}
        <div className={`${classes.formControl} mt-6 text-center`}>
          <button type="submit" className={classes.button}>
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
