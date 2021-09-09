const UserModel = require("../Schema/dbschema");
const nodemailer = require("nodemailer");

exports.SendDataFront = async (req, res) => {
  try {
    const dbdata = await UserModel.find();
    res.status(200).send(dbdata);
  } catch (error) {
    console.log(error);
  }
};
exports.AddData = async (req, res) => {
  const { Name, Phone, Email, Hobbies } = req.body;
  if (!Name || !Phone || !Email || !Hobbies) {
    return res.status(422).json({ error: "Please fill the fields properly" });
  } else {
    const dataInsert = new UserModel({ Name, Phone, Email, Hobbies });
    const success = await dataInsert.save();
    if (success) {
      res.status(201).json({ message: "Successful" });
    } else {
      res.status(400).json({ message: "Unsuccessful" });
    }
  }
};
exports.UpdateData = async (req, res) => {
  const { data, id } = req.body;
  const { Name, Phone, Email, Hobbies } = data;
  if (!Name || !Phone || !Email || !Hobbies || !id) {
    return res.status(422).json({ error: "Please fill the fields properly" });
  } else {
    const dataUpdate = await UserModel.findByIdAndUpdate(
      { _id: id },
      {
        Name: Name,
        Phone: Phone,
        Email: Email,
        Hobbies: Hobbies,
      }
    );
    if (dataUpdate) {
      res.status(200).json({ message: "Successful" });
    } else {
      res.status(401).json({ message: "Unsuccessful" });
    }
  }
};

exports.DeleteData = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(422).json({ error: "Please fill the fields properly" });
  } else {
    const deleteDoc = await UserModel.findByIdAndDelete(id);
    if (deleteDoc) {
      res.status(200).json({ message: "Successful" });
    } else {
      res.status(401).json({ message: "Unsuccessful" });
    }
  }
};

exports.PostData = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "freeforyou14@gmail.com",
      pass: "macmac90",
    },
  });

  const mailOptions = {
    from: "freeforyou14@gmail.com",
    to:"info@redpositive.in",
    subject: "Sending Email using Intern APP",
    text: req.body,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(400).json({ message: "Unsuccessful" });
    } else {
      res.status(200).json({ message: "Successful" });
    }
  });
};
