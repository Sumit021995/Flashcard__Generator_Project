import {
  ADD_GROUP,
  ADD_INPUT_BOX,
  DELETE_INPUT_BOX,
  SHOW_FLASH_CARDS,
} from "../Types";

const inputlocal = localStorage.getItem("card-input");
const grouplocal = localStorage.getItem("groupData");
const initialState = {
  inputData: inputlocal ? JSON.parse(inputlocal) : [],
  groupData: grouplocal ? JSON.parse(grouplocal) : [],
};

//We are defining the reducer function to determine changes to the application's state.
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INPUT_BOX:
      localStorage.setItem(
        "card-input",
        JSON.stringify([...state.inputData, action.payload])
      );
      return {
        ...state,
        inputData: [...state.inputData, action.payload],
      };
    case DELETE_INPUT_BOX:
      let data = state.inputData.filter((ele, ind) => ind !== action.payload);
      localStorage.setItem("card-input", JSON.stringify(data));
      return {
        ...state,
        inputData: [...data],
      };
    case ADD_GROUP:
      localStorage.removeItem("card-input");
      state.inputData = [];
      localStorage.setItem(
        "groupData",
        JSON.stringify([...state.groupData, action.payload])
      );
      return {
        ...state,
        inputData: [...state.inputData],
        groupData: [...state.groupData, action.payload],
      };

    case SHOW_FLASH_CARDS:
      return {
        ...state,
        showNum: action.payload,
      };
    default:
      return {
        ...state,
        showNum: 0,
      };
  }
};