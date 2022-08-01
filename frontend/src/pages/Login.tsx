import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import { api } from "../services/api";
import { login } from "../services/authentication";

import hero from "../assets/hero.png";

interface loginInput {
  email: string;
  password: string;
}

const validationSchema = yup.object({
  email: yup.string().required("Digite seu e-mail!").email("E-mail inválido."),
  password: yup.string().required("Digite sua senha!"),
});

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    onSubmit: async (values: loginInput) => {
      const response = await api.post("/api/v1/login", {
        email: values.email,
        password: values.password,
      });
      login(response.data.token);
      navigate("/home");
    },
    validationSchema,
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
  });

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
            onSubmit={formik.handleSubmit}
          >
            <div className="w-full">
              <input
                name="email"
                type="email"
                placeholder="E-mail"
                className="w-full h-12 focus:outline-none text-darkCyan rounded-2xl text-center"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
              />

              {formik.touched.email && formik.errors.email && (
                <div className="text-red-600 text-sm">
                  {formik.errors.email}
                </div>
              )}
            </div>

            <div className="w-full">
              <input
                name="password"
                type="password"
                placeholder="Senha"
                className="w-full h-12 focus:outline-none text-darkCyan rounded-2xl text-center"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
              />

              {formik.touched.password && formik.errors.password && (
                <div className="text-red-600 text-sm">
                  {formik.errors.password}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-darkCyan h-12 text-whiteCyan rounded-2xl hover:bg-lightCyan hover:text-darkCyan transition-colors font-semibold"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              {formik.isSubmitting ? "Entrando..." : "Entrar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
