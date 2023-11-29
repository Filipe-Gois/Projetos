import React, { useContext, useState } from "react";
import ImageIllustrator from '../../Components/ImageIllustrator/ImageIllustrator'
import logo from "../../assets/images/logo-pink.svg";
import { Input, Button } from "../../Components/FormComponents/FormComponents";
import ImageLogin from '../../assets/images/login.svg'
import api from "../../Services/Service";
import Notification from "../../Components/Notification/Notification";

import "./LoginPage.css";
import { UserContext, userDecodeToken } from "../../Context/AuthContext";

const LoginPage = () => {

  //dados que são pegos pelo formulário
  const [user, setUser] = useState({ email: "", senha: "" })

  //dados globais do usuario
  const { userData, setUserData } = useContext(UserContext)
  const [notifyUser, setNotifyUser] = useState({})


  async function handleSubmit(e) {
    e.preventDefault();
    console.log('ijaf');

    if (user.email.length >= 3) {
      console.log('ijaf');
      try {

        const response = await api.post(`/Login`, user)


        const userFullToken = userDecodeToken(response.data.token)

        setUserData(userFullToken)//guarda os dados decodificados (payload) no state que armazena os dados globais
        console.log("Dados do usuário:");
        console.log(userData);

        localStorage.setItem("token", JSON.stringify(userFullToken))

      } catch (error) {

        console.log(error);
      }



    }
    else {
      return (setNotifyUser({
        titleNote: "Erro",
        textNote: `O email deve conter mais de 3 caracteres!`,
        imgIcon: "danger",
        imgAlt:
          "Imagem de ilustração de sucesso. Moça segurando um balão com símbolo de confirmação ok.",
        showMessage: true,
      }))


    }


  }

  return (
    <div className="layout-grid-login">
      <div className="login">
        <div className="login__illustration">
          <div className="login__illustration-rotate"></div>
          <ImageIllustrator
            imageName="login"
            imageRender={ImageLogin}
            altText="Imagem de um homem em frente de uma porta de entrada"
            additionalClass="login-illustrator "
          />
        </div>

        <div className="frm-login">
          <img src={logo} className="frm-login__logo" alt="" />

          <form className="frm-login__formbox" onSubmit={handleSubmit}>
            <Input
              additionalClass="frm-login__entry"
              type="email"
              id="login"
              name="login"
              required={true}
              value={user.email}
              manipulationFunction={(e) => {
                setUser({
                  ...user,
                  email: e.target.value.trim()
                })
              }}
              placeholder="Username"
            />
            <Input
              additionalClass="frm-login__entry"
              type="password"
              id="senha"
              name="senha"
              required={true}
              value={user.senha}
              manipulationFunction={(e) => {
                setUser({
                  ...user,
                  senha: e.target.value.trim()
                })
              }}
              placeholder="****"
            />

            <a href="" className="frm-login__link">
              Esqueceu a senha?
            </a>

            <Button
              textButton="Login"
              id="btn-login"
              name="btn-login"
              type="submit"
              additionalClass="frm-login__button"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
