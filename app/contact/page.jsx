"use client";

import { useState, useEffect } from "react";
export default function Page() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    let success = true;
    try {
      // Some POST request to backend for contacting
      // Logic for confirming success should not be set to false
      success = !success;
      if (success == false) {
        throw new Error("something errored during POST");
      }
    } catch (err) {
      console.log(err);
      window.alert(
        "Failure: you haven't added data cleaning and POST to this page yet.",
      );
    } finally {
      // Do something else
    }
  }

  function handleChange(e) {
    setFormValues({
      firstName: e.firstname,
      lastName: e.lastName,
      email: e.email,
      message: e.message,
    });
  }
  return (
    <div className="container">
      <h2 className="m-4 mt-10 text-3xl font-bold">Contact Us</h2>
      <p className="m-4 text-xl">
        Please feel free to contact us here, by email, phone, or any of our
        social media links at the bottom of this page.
      </p>
      <form className="m-4 mb-10 flex flex-col gap-4 rounded-lg border bg-slate-100 p-4 shadow">
        <div className="m-4 flex flex-col">
          <label htmlFor="firstname" className="text-xl sm:mb-2">
            <strong>*First name: </strong>
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="first name"
            onChange={handleChange}
            required
            className="w-full rounded p-2 sm:min-w-[100px] sm:max-w-[300px] md:ml-4"
          ></input>
        </div>
        <div className="m-4 flex flex-col">
          <label htmlFor="lastname" className="text-xl sm:mb-2">
            <strong>*Last name: </strong>
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="last name"
            onChange={(e) => handleChange(e)}
            required
            className="w-full rounded p-2 sm:min-w-[100px] sm:max-w-[300px] md:ml-4"
          ></input>
        </div>
        <div className="m-4 flex flex-col">
          <label htmlFor="email" className="text-xl sm:mb-2">
            <strong>*Email: </strong>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            onChange={handleChange}
            required
            className="w-full rounded p-2 sm:min-w-[100px] sm:max-w-[400px] md:ml-4"
          ></input>
        </div>
        <div className="m-4 flex flex-col">
          <label htmlFor="message" className="ml-2 text-xl sm:mb-2">
            <strong>Message: </strong>
          </label>
          <textarea
            type="textarea"
            id="message"
            name="message"
            placeholder="For immediate support, give us a call."
            className="rows-20 w-full resize-none overflow-auto rounded p-2 md:m-auto md:w-[95%] md:resize-y lg:w-[90%]"
            rows="8"
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="m-auto mb-8 w-fit rounded bg-blue-300 p-4 text-xl font-bold shadow-lg hover:scale-[1.2] hover:bg-black/80 hover:text-white/80 sm:mt-8 md:transition md:delay-100 md:duration-200 md:ease-out md:hover:-translate-y-4 md:hover:shadow-[15px_15px_20px_-5px_rgba(0,0,0,0.3)]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
