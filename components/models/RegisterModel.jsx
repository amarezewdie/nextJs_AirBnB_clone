"use client";
import { useState, useCallback } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useForm, FieldValue, SubmitHandler } from "react-hook-form";
import useRegisterModel from "../hooks/useRegisterModel";
import Model from "./Model";
import Heading from "../form/Heading";
import Input from "../form/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";

const RegisterModel = () => {
  const registerModel = useRegisterModel();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register")
      .then(() => {
        registerModel.onClose();
      })
      .catch((err) => {
        toast.error("something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  // body
  const bodyContent = (
    <div>
      <Heading title="welcome to AirBnb " subTitle="create an account" />
      <Input
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        placeholder="Name"
        id="name"
        label="name"
      />
      <Input
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        placeholder="Email"
        id="email"
        label="email"
        type="email"
      />
      <Input
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        placeholder="Password"
        id="password"
        label="password"
        type="password"
      />
    </div>
  );
  const footerContent = (
    <div>
      <Button
        onClick={() => {}}
        Icon={FcGoogle}
        label="continue with google"
        disabled={isLoading}
        outLine
      />
      <Button
        onClick={() => {}}
        Icon={AiFillGithub}
        label="continue with gitHub"
        disabled={isLoading}
        outLine
      />
      <div className="flex gap-3 mb-0 mt-2 ">
        <span className="capitalize">already have an account</span>
        <span
          onClick={registerModel.onClose}
          className="text-blue-600 underline cursor-pointer"
        >
          sign in
        </span>
      </div>
    </div>
  );

  return (
    <Model
      disabled={isLoading}
      isOpen={registerModel.isOpen}
      title="register"
      actionLabel="continue"
      onClose={registerModel.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModel;
