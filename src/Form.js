import React from "react";
import "./style.scss";
import { useForm } from "react-hook-form";

let Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    getValues
  } = useForm({
    mode: "onSubmit"
  });
  let onClick = () => {
    let x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  let onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="formEl">
        <span className="star">*</span>
        <input
          className="input"
          placeholder=" Email / Логин"
          {...register("email", {
            required: "Поле обязательно к заполнению"
          })}
        />
      </div>
      <div className="error">
        {errors?.email && <p>{errors.email.message}</p>}
      </div>
      <div className="formEl">
        <span className="star">*</span>
        <input
          className="input"
          placeholder=" Контрольная строка"
          {...register("controlLine", {
            required: "Поле обязательно к заполнению",
            validate: (value) => value === "frontend"
          })}
        />
      </div>
      <div className="error">
        {errors?.controlLine && (
          <p>{errors.controlLine.message || "Неверное контрольное слово"} </p>
        )}
      </div>
      <div className="formEl">
        <span className="star">*</span>
        <input
          type="password"
          className="input"
          placeholder=" Новый пароль"
          id="pass"
          {...register("newPass", {
            required: "Поле обязательно к заполнению",
            minLength: {
              value: 6,
              message: "Пароль должен быть не менее 6 символов"
            }
          })}
        />
        <img
          alt="#"
          className="visabillityPas"
          onClick={onClick}
          src="Vector.svg"
        />
      </div>
      <div className="error">
        {errors?.newPass && <p>{errors.newPass.message}</p>}
      </div>
      <div className="formEl">
        <span className="star">*</span>
        <input
          type="password"
          className="input"
          placeholder=" Подтверждение пароля"
          {...register("confirmPass", {
            required: "Поле обязательно к заполнению",
            validate: (value) => value === getValues("newPass")
          })}
        />
      </div>
      <div className="error">
        {errors?.confirmPass && (
          <p>{errors.confirmPass.message || "Пароли не совпадают"}</p>
        )}
      </div>
      <div className="requiredFields">
        <span className="star">*</span>
        <span className="text"> Обязательные поля</span>
      </div>
      <input className="button" type="submit" value="Изменить пароль" />
    </form>
  );
};

export default Form;