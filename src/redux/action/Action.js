import { ADD_GROUP, ADD_INPUT_BOX, DELETE_INPUT_BOX, SHOW_FLASH_CARDS} from '../Types'

// addInputBox function will be used to add the function box.
export const addInputBox = (data) => {
  return {
    type:ADD_INPUT_BOX,
    payload : data
  }
}


//This action function will be used to delete the input box 
export const deleteInputBox = (data) => {
  return {
    type:DELETE_INPUT_BOX,
    payload : data
  }
}

// Add group
export const addGroup = (data) => {
  return {
    type:ADD_GROUP,
    payload : data
  }
}

// Show flashcards
export const showFalshCard = (data)=>{
  
  return {
    type:SHOW_FLASH_CARDS,
    payload:data
  }
}