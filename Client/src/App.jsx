import "./App.css";
import AddForm from "./components/AddForm";
import Updateform from "./components/Updateform";
import { useDispatch, useSelector } from "react-redux";
import { deleteDataServer, sendDataMail } from "./requests";
import { OpenCloseModal, OpenCloseUpdate } from "./Redux/actions";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const dispatch = useDispatch();
  const popupForm = useSelector((state) => state.FormAction);
  const popupFormUpdate = useSelector((state) => state.FormUpdate);
  //
  const [dbdata, setdbdata] = useState([]);
  const [data, setdata] = useState({});
  const [EmailData, setEmailData] = useState([]);
  useEffect(() => {
    const DBdataReceive = async () => {
      const data = await axios.get("/send");
      setdbdata(data.data);
      return data;
    };
    DBdataReceive();
  }, [dispatch]);
  // 
  const handleAddData = (data) => {
    function containsObject(obj, list) {
      var i;
      for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
          return true;
        }
      }
      return false;
    }
    const valueExist = containsObject(data, EmailData);
    if (valueExist === false) {
      return setEmailData([...EmailData, data]);
    }else{
      const dataRemove = EmailData.filter( e => e._id !== data._id );
      return setEmailData(dataRemove); 
    }
  };

  return (
    <>
      <div className="mainAttraction">
        {popupForm ? <AddForm /> : null}
        {popupFormUpdate ? <Updateform update={data} /> : null}
        <div className="centerContainer">
          <div className="displayTab">
            <table>
              <tr>
                <th>Select</th>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Hobbies</th>
                <th>UPDATE</th>
                <th>DELETE</th>
              </tr>
              {dbdata.map((d, i) => {
                return (
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        className="selectData"
                        name=""
                        id=""
                        onClick={() => {
                          // setEmailData([...EmailData, d]);
                          handleAddData(d);
                          console.log(EmailData);
                        }}
                      />
                    </td>
                    <td>{i}</td>
                    <td>{d.Name}</td>
                    <td>{d.Phone}</td>
                    <td>
                      <input
                        type="email"
                        value={d.Email}
                        name="Email"
                        id=""
                        disabled
                      />
                    </td>
                    <td>{d.Hobbies}</td>
                    <td>
                      <i
                        className="fas fa-edit"
                        onClick={() => {
                          setdata(d);
                          dispatch(OpenCloseUpdate(!popupFormUpdate));
                        }}
                      />
                    </td>
                    <td>
                      <i
                        className="fas fa-trash"
                        onClick={() => {
                          deleteDataServer(d._id);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
          <div className="buttonArea">
            <button
              onClick={() => {
                dispatch(OpenCloseModal(!popupForm));
              }}
            >
              <i className="fas fa-plus" />
              <span>ADD</span>
            </button>
            <button
              onClick={() => {
                sendDataMail(EmailData);
              }}
            >
              <span>SEND</span>
              <i className="fab fa-telegram-plane" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
