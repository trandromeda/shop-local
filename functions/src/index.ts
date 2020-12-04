require("dotenv").config();

import * as functions from "firebase-functions";
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
admin.initializeApp();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "webmaster.rougeapp@gmail.com",
    pass: "RiAoep4Pv&2L",
  },
});

export const sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const dest = req.query.dest;
    // const shop = req.body.shop;
    // const content = `Content: ${shop}`;

    const mailOptions = {
      from: "Rouge App <transient.tran@gmail.com>",
      to: dest,
      subject: "Rouge App Submission",
      html: "<div>Test</div>",
    };

    return transporter.sendMail(mailOptions, (err: any, info: any) => {
      if (err)
        return res.json({
          status: "fail",
          message: err.toString(),
        });
      return res.json({
        status: "success",
      });
    });
  });
});
