import React from "react";
import Layout from "../components/layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

export default function Contact() {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-light p-2 text-black text-center contact-text">
            CONTACT US
          </h1>
          <p className="text-justify mt-2">
            Any query and info about prodduct feel free to call anytime we are
            24X7 Avaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> :info@getpeppermint.co
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +91 89567 10044
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
}
