import React from "react";
import FlashcardTitle from "./FlashcardTitle";
import AddTerms from "./AddTerms";
import { useFormik } from "formik";
import AddMoreTerms from "./AddMoreTerms";
import { useDispatch, useSelector } from "react-redux";
import { addGroup } from "../../redux/action/Action";

const FormValidation = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Reducer.inputData);

  const initialValues = {
    groupName: "",
    description: "",
    term: "",
    definition: "",
  };

  const onSubmit = (values) => {
    console.log("subit data: ", values);
    const curentValue = {
      term: formik.values.term,
      definition: formik.values.definition,
    };

    state.push(curentValue);
    dispatch(
      addGroup({
        state,
        group: {
          groupName: formik.values.groupName,
          description: formik.values.description,
        },
      })
    );
    formik.resetForm();
  };
  
  //input validation
  const validate = (values) => {
    let errors = {};

    if (values.groupName.length < 5) {
      errors.groupName = "Use 5 characters or more for your group name";
    }
    if (values.description.length < 30) {
      errors.description = "Use 30 characters or more for group description.";
    }
    if (values.term.length < 5) {
      errors.term = "Use minimum 5 characters for term title.";
    }
    if (values.definition.length < 20) {
      errors.definition = "Use minimum 20 characters for term description.";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FlashcardTitle formik={formik} />

      {/* For dynamic box creation */}
      <div className="mt-6 sm:px-14 px-10 py-7 bg-white rounded-md shadow-lg">
        <AddMoreTerms />
        <AddTerms formik={formik} />
      </div>
      {/* Create button */}
      <div className="py-20 flex justify-center items-center ">
        <button className="focus:outline-none focus:ring focus:ring-white bg-red-600 text-white px-14 py-2 rounded-lg">
          Create
        </button>
      </div>
    </form>
  );
};

export default FormValidation;