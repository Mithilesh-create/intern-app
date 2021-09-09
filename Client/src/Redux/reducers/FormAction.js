const initialState = false;
const FormAction = (state = initialState, action) => {
  switch (action.type) {
    case "Open_Close_modal":
      return (state = !state);
    default:
      return state;
  }
};
export default FormAction;
