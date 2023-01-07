import { useDispatch, useSelector } from "react-redux";
import { addInputBox } from "../../redux/action/Action";

const TextField = ({ formik }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Reducer.inputData);

  // click handler
  const addInputValue = () => {
    dispatch(
      addInputBox({
        term: formik.values.term,
        definition: formik.values.definition,
      })
    );
    formik.values.term = "";
    formik.values.definition = "";
  };

  return (
    <div>
      <div
        id="form_resp"
        className="flex flex-col sm:justify-start sm:flex-row"
      >
        <div className="relative flex flex-col sm mr-4 mb-3 sm:mb-0 sm:mt-4 w-full sm:w-2/6">
          <span id="num1" className="bg-yellow-400">
            {state.length + 1}
          </span>

          {/* Enter term heading */}
          <label htmlFor="term" className="text-gray-600 pb-3 font-medium">
            Enter Term*
          </label>

          {/* Enter term input box */}
          <input
            type="text"
            id="term"
            name="term"
            value={formik.values.term}
            onChange={formik.handleChange}
            placeholder="Enter the term title here."
            className="focus:outline-yellow-400 outline-blue-100 rounded py-4 px-5 outline outline-2"
          />
          {formik.errors.term ? (
            <div className="text-red-500 text-sm">{formik.errors.term}</div>
          ) : null}
        </div>
        <div className="flex flex-col w-full sm:mt-4 sm:w-2/6">
          {/* Enter definition heading */}
          <label htmlFor="define" className="text-gray-600 pb-3 font-medium">
            Enter definition*
          </label>

          {/* Enter definition input box */}
          <input
            type="text"
            id="define"
            name="definition"
            value={formik.values.definition}
            onChange={formik.handleChange}
            placeholder="Enter the term definition title here."
            className="focus:outline-yellow-400 outline-blue-100 py-4 px-5 outline outline-2 rounded "
          />
          {formik.errors.definition ? (
            <span className="text-red-500 text-sm">
              {formik.errors.definition}
            </span>
          ) : null}
        </div>
      </div>

      {/* Add more  */}
      <span
        className="py-4 inline-block mt-8 text-purple-500 cursor-pointer font-medium"
        onClick={addInputValue}
      >
        + Add more
      </span>
    </div>
  );
};

export default TextField;