import React, { useState } from "react";
import {
  Button,
  ContactForm,
  Input,
  HorizontalCard,
  VarticalCard,
} from "../components/index";

export const BeeComponents = () => {
  const [formData, setFormData] = useState();

  return (
    <div>
      <h1 className="p-4">
        The library contains the following components as of now. If you want to
        contribute more components , go to our github page
      </h1>
      {/*----------- Buttons Start Here -------- */}
      Buttons:
      <div className="default-button p-10">
        Default : <Button />
      </div>
      <div className="success-button p-10">
        success : <Button variant="success" />
      </div>
      <div className="danger-button p-10">
        danger : <Button variant="danger" />
      </div>
      <div className="primary-button p-10">
        primary : <Button variant="primary" />
      </div>
      {/*----------- Buttons End Here -------- */}
      {/* --------- Forms Start Here ---------- */}
      Forms:
      <div className="form p-10 text-white">
        <ContactForm
          FormData={setFormData}
          theme="light"
          className="text-white"
        />
      </div>
      {/*-----------Forms End Here ---------- */}
      Inputs:
      <div className="input p-10">
        <Input
          type="text"
          name="example"
          onChange={() => {}}
          label="Fancy Input Component"
          variant="fancy"
        />
      </div>
      <div className="input p-10 text-white">
        <Input
          type="text"
          name="example-1"
          onChange={() => {}}
          label="Default Input Component"
        />
      </div>
      {/*--------------Input end here ---------*/}
      Cards:
      <div className="block    content-center max-w-screen-md p-6">
        <div className=" flex  max-w-fit bg-white">
          <HorizontalCard
            imgURl={
              "https://media.istockphoto.com/id/1398247146/photo/document-management-concept-with-icons-on-virtual-screen-erpbusinessman-working-on-the.webp?b=1&s=612x612&w=0&k=20&c=XkgeLV6Hb00T-epWkCXes9pseiJlV5s4D9NGiFWs0HQ="
            }
            Title={"The Coldest Sunset"}
            Text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque,exercitationem praesentium nihil."
            }
            Hashtags={["a", "b", "c"]}
          />
        </div>
        <div className="block  max-w-fit bg-white mt-10">
          <VarticalCard
            imgURl={
              "https://media.istockphoto.com/id/1398247146/photo/document-management-concept-with-icons-on-virtual-screen-erpbusinessman-working-on-the.webp?b=1&s=612x612&w=0&k=20&c=XkgeLV6Hb00T-epWkCXes9pseiJlV5s4D9NGiFWs0HQ="
            }
            Title={"The Coldest Sunset"}
            Text={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque,exercitationem praesentium nihil."
            }
            Hashtags={["a", "b", "c"]}
          />
        </div>
      </div>
    </div>
  );
};
