import { FormEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../services/api";
import { login } from "../services/authentication";

import hero from "../assets/hero.png";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await api
      .post("/api/v1/login", {
        email,
        password,
      })
      .then((res) => {
        login(res.data.token);
        navigate("/feed");
      });
  };

  return (
    <div className="h-full flex flex-row">
      <div className="bg-darkCyan w-2/4 h-full hidden lg:flex justify-center items-center flex-col">
        <img src={hero} alt="hero" className="h-[35rem] w-h-96" />
      </div>
      <div className="w-full lg:w-2/4 flex justify-center items-center">
        <div className="bg-whiteCyan h-[37rem] w-4/5 lg:w-[33rem] mx-3 flex justify-center items-center flex-col rounded-2xl">
          <h1 className="font-bold text-2xl text-darkCyan mb-2">
            Bem-vindo de volta!
          </h1>
          <h3 className="font-normal text-darkCyan">
            Faça login, ou{" "}
            <a
              href="/register"
              className="font-medium hover:text-lightCyan transition-colors"
            >
              Cadastre-se
            </a>
          </h3>
          <form
            className="flex justify-center items-center flex-col mt-5 w-4/5 space-y-6"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              value={email}
              placeholder="E-mail"
              className="w-full h-12 focus:outline-none text-darkCyan rounded-2xl text-center"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Senha"
              className="w-full h-12 focus:outline-none text-darkCyan rounded-2xl text-center"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-darkCyan h-12 text-whiteCyan rounded-2xl hover:bg-lightCyan hover:text-darkCyan transition-colors font-semibold"
            >
              ENTRAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
