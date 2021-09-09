import axios from "axios";
//
export const sendDataServer = async (data) => {
  const sendData = document.querySelector("#formAdd");
  if (sendData) {
    sendData.addEventListener("submit", (e) => {
      e.preventDefault();
      axios
        .post("add", data)
        .then((res) => {
          if (res.status === 201) {
            alert("Data Inserted Successfully!");
            window.location.href = "/";
          } else {
            alert("Data Insertion Failed!");
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
  }
};
//
export const updateDataServer = async (data, id) => {
  const sendData = document.querySelector("#formUpdate");
  if (sendData) {
    sendData.addEventListener("submit", (e) => {
      e.preventDefault();
      const updateData = {
        data,
        id,
      };
      console.log(updateData);
      axios
        .patch("update", updateData)
        .then((res) => {
          if (res.status === 200) {
            alert("Data Updated Successfully!");
            window.location.href = "/";
          } else {
            alert("Data Updation Failed!");
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
  }
};
export const deleteDataServer = async (id) => {
  const deleteData = {
    id,
  };
  axios
    .post("delete", deleteData)
    .then((res) => {
      if (res.status === 200) {
        alert("Data Deleted Successfully!");
        window.location.href = "/";
      } else {
        alert("Data Deletion Failed!");
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};
export const sendDataMail = async (dataObj) => {
  function removeDuplicates(data, key) {
    return [...new Map(data.map((item) => [key(item), item])).values()];
  }
  const lastObj = removeDuplicates(dataObj, (item) => item._id);
  axios
    .post("post", lastObj)
    .then((res) => {
      if (res.status === 200) {
        alert("Data Sent Successfully!");
        window.location.href = "/";
      } else {
        alert("Data Sending Failed!");
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};
