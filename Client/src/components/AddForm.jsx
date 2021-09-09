import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OpenCloseModal } from "../Redux/actions";
import { sendDataServer } from "../requests";
function AddForm() {
  const dispatch = useDispatch();
  const popupForm = useSelector((state) => state.FormAction);
  //
  const [data, setdata] = useState({
    Name: "",
    Phone: "",
    Email: "",
    Hobbies: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setdata({ ...data, [name]: value });
  };
  return (
    <div className="formModal">
      <div className="formCentral">
        <div className="formArea">
          <div className="closeBtn">
            <i
              className="fas fa-times"
              onClick={() => {
                dispatch(OpenCloseModal(!popupForm));
              }}
            />
          </div>
          <div className="ActualForm">
            <form action="/add" id="formAdd" method="POST">
              <div className="formFields">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  name="Name"
                  className="InpDeco"
                  required
                  autoComplete="off"
                  placeholder="John Doe"
                  spellCheck="false"
                  onChange={handleInputs}
                  value={data.Name}
                />
              </div>
              <div className="formFields">
                <label htmlFor="Phone">Phone</label>
                <input
                  type="tel"
                  name="Phone"
                  className="InpDeco"
                  required
                  autoComplete="off"
                  placeholder="98765-4321"
                  spellCheck="false"
                  onChange={handleInputs}
                  value={data.Phone}
                />
              </div>
              <div className="formFields">
                <label htmlFor="Email">Email Id</label>
                <input
                  type="email"
                  name="Email"
                  className="InpDeco"
                  required
                  autoComplete="off"
                  placeholder="johndoe@mail.com"
                  spellCheck="false"
                  onChange={handleInputs}
                  value={data.Email}
                />
              </div>
              <div className="formFields hobbies">
                <label htmlFor="Hobbies">Hobbies</label>
                <textarea
                  className="InpDeco"
                  name="Hobbies"
                  cols="30"
                  rows="40"
                  required
                  autoComplete="off"
                  placeholder="My Hobbies are ...."
                  spellCheck="false"
                  onChange={handleInputs}
                  value={data.Hobbies}
                ></textarea>
              </div>
              <button
                type="submit"
                className="saveBtn"
                onClick={() => {
                  sendDataServer(data);
                }}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddForm;
