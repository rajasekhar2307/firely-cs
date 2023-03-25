import { error } from "console";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
};

const WaitListForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleFormSubmit = (data: FormData) => {
    setIsLoading(true);
    setIsDisabled(true);
    let formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);

    fetch(
      "https://script.google.com/macros/s/AKfycbxab8vsye6MLKrAx7AxU79fAcB3H3VXeb4DGwEovUxQGjHY81Nc_rK-JcKZRc0mSDKKog/exec",
      { method: "POST", body: formData }
    )
      .then((response) => {
        setIsLoading(false);
        setIsDisabled(false);
        setIsSuccess(true);
        setIsError(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsDisabled(false);
        setIsError(true);
        setIsSuccess(false);
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
      <p className="form-title">
        Register<span className="yellow-dot"></span>
      </p>
      <div className="input-container">
        <label className="input-label" htmlFor="fname">
          Name
        </label>
        <input
          className="input"
          placeholder="Name"
          type="text"
          id="fname"
          {...register("firstName", {
            required: {
              value: true,
              message: "Name is required",
            },
          })}
        />
        {errors.firstName?.message && (
          <p className="message-error message-sm">
            {errors.firstName?.message}
          </p>
        )}
      </div>

      <div className="input-container">
        <label className="input-label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          placeholder="Email"
          type="email"
          id="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
        />
        {errors.email?.message && (
          <p className="message-error message-sm">{errors.email?.message}</p>
        )}
      </div>
      {!isLoading && (
        <Button text="Submit" type="submit" disabled={isDisabled} />
      )}
      {isLoading && (
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {isSuccess && (
        <p className="message-success">
          You&apos;ve been successfully registered!
        </p>
      )}
      {isError && (
        <p className="message-error">Something went wrong! Please try again</p>
      )}
    </form>
  );
};

export default WaitListForm;
