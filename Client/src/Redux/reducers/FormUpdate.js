const initialState = false;
const FormUpdate = (state = initialState, action) => {
  switch (action.type) {
    case "Open_Close_update":
      return (state = !state);
    default:
      return state;
  }
};
export default FormUpdate;
