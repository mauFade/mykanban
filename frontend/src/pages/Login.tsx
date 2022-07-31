import hero from "../assets/hero.png";

const Login = () => {
  return (
    <div className="h-full flex flex-row">
      <div className="bg-darkCyan w-2/4 h-full hidden lg:flex justify-center items-center">
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
          <form className="flex justify-center items-center flex-col mt-5 w-4/5 space-y-6">
            <input
              type="email"
              placeholder="E-mail"
              className="w-full h-11 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Senha"
              className="w-full h-11 focus:outline-none"
            />
            <button type="submit" className="w-full bg-bluesky h-11">
              ENTRAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
