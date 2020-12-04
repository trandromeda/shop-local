require("dotenv").config();

import * as functions from "firebase-functions";
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
import { IShop } from "./shop.model";

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
    const shop: IShop = req.body;
    const content = `
    <div>
      <p>A submission was made on Rouge App:</p>
      Id: ${shop.id}<br />
      Name: ${shop.name}<br />
      Tags: ${shop.tags.join(",")}<br />
      URL: ${shop.url}<br />
      Instagram: ${shop.instagram}<br />
      Description: ${shop.desc}<br />
      Address: ${shop.address}<br />
      Neighbourhood: ${shop.neighbourhood}<br />
      hasDelivery: ${shop.hasDelivery}<br />
      hasPickup: ${shop.hasPickup}<br />
      hasGiftCards: ${shop.hasGiftCards}
    </div>`;

    const mailOptions = {
      from: "Rouge App <transient.tran@gmail.com>",
      to: dest,
      subject: "Rouge App Submission",
      html: content,
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
