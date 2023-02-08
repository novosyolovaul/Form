import "./style.scss";
import Form from "./Form";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <img alt="#" className="icon" src="g10.svg" />
        <div className="title">Изменение пароля</div>
        <Form />
        <div className="signIn">
          <a href="URL">Зарегистрироваться</a>
          <a href="URL">Войти</a>
        </div>
      </div>
    </div>
  );
}

