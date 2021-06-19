import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function Register() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    required,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var urlencoded = new URLSearchParams(data);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
    try {
      setIsLoading(true);
      const result = await fetch(
        "https://wdev2.be/natalia21/eindwerk/api/register",
        requestOptions
      );
      const data = await result.json();
      if (data && !data.error) {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  return (
    <div className="inputPage">
      <h1 className="mainHeader">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="inputBlock">
        <div className="inputWindow">
          <input
            className="formInput"
            type="text"
            placeholder="name"
            {...register("name", { required: true })}
          />
          {errors.name && <p>Name is required</p>}
          <input
            className="formInput"
            type="text"
            placeholder="last name"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && <p>Last name is required</p>}

          <input
            className="formInput"
            type="text"
            placeholder="email"
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+\.\S+$/,
            })}
          />
          {errors.email && <p>Please enter valid email address</p>}
          <input
            className="formInput"
            type="text"
            placeholder="phone number"
            {...register("phoneNumber")}
          />
          <input
            className="formInput"
            type="password"
            placeholder="password"
            {...register("password", { required: true, minLength: 20 })}
          />
          {errors.password && <p>Min length is 6 characters</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
