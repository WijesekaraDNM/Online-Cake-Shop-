import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import classes from "./loginPage.module.css";
import Title from "../../Components/Title/Title";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button.js";
export default function LoginPage() {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [params] = useSearchParams();
  const returnUrl = params.get("returnUrl");

  useEffect(
    () => {
      if (!user) return;
      returnUrl ? navigate(returnUrl) : navigate("/");
    },
    [user]
  );

  const submit = async ({ email, password }) => {
    await login(email, password);
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.Container}>
        <div className={classes.leftSide}>
          <div className={classes.content}>
            <h4>Have an amazing experience with your dreamed cake.</h4>
          </div>
          <img
            className={classes.image}
            src={"/foods/CakeLogo.png"}
            alt={"fuck"}
          />
        </div>
        <div className={classes.rightSide}>
          <div className={classes.details}>
            <Title
            display={"flex"}
              title="Login"
              margin={"5%"}
              fontSize={"2rem"}
              justifyContent={"center"}
              alignItems={"center"}
            />
            <form onSubmit={handleSubmit(submit)} noValidate>
              <Input
                type="email"
                label="Email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,63}$/i,
                    message: "Email Is Not Valid"
                  }
                })}
                error={errors.email}
              />
              <Input
                type="password"
                label="Password"
                {...register("password", {
                  required: true
                })}
                error={errors.password}
              />
              <Button
                type="submit"
                text="Login"
                color={"white"}
                backgroundColor={"crimson"}
                height={"1.8rem"}
                width={"18rem"}
                fontSize={"1rem"}
                margin={"2rem 0 1rem 2rem"}
                padding = {"2rem"}
              />

              <div className={classes.register}>
                New user? &nbsp;
                <Link
                  to={`/Register?${returnUrl ? "returnUrl=" + returnUrl : ""}`}
                >
                  Create Account here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    /*
   <div className= { classes.container }>
    <div className={classes.details}>
      <Title title="Login"/>
      <form onSubmit={handleSubmit(submit)} noValidate>
        <Input
          type="email"
          label= "Email"
          {...register('email', {
            required: true,
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,63}$/i,
              message: 'Email Is Not Valid',
            },
          })}
          error = {errors.email}
          />
           <Input
            type="password"
            label= "Password"
            {...register('password', {
              required: true,
            }
            )}
            error = {errors.password}
          />
          <Button type="submit" text = "Login" />
      </form>
    </div>
  </div>*/
  );
}
