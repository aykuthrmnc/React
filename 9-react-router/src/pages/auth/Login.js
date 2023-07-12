import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Helmet } from "react-helmet";
import { useFormik, Formik, Form, Field } from "formik";
import Input from "../../components/form/Input";
import { LoginSchema } from "../../validations";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useAuth();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      setUser(values);
      navigate(location?.state?.return_url || "/", { replace: true });
    },
  });

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, actions) => {
          // values apiye gonderip api cevap verdiginde
          setTimeout(() => {
            actions.setSubmitting(false);
            actions.resetForm();
          }, 3000);
          setUser(values);
          navigate(location?.state?.return_url || "/", { replace: true });
        }}
        validationSchema={LoginSchema}
      >
        {({ values, isSubmitting }) => (
          <Form className="grid gap-y-3 p-4">
            <h1 className="text-2xl font-bold mb-3">Giriş Yap</h1>
            <Input label="Kullanıcı Adı" name="username" />
            <Input label="Parola" name="password" type="password" />
            <button type="reset">Resetle</button>
            <button disabled={isSubmitting} type="submit" className="bg-black h-10 rounded text-sm text-white disabled:opacity-40">
              Giriş yap
            </button>
          </Form>
        )}
      </Formik>

      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="username">Kullanıcı adı</label>
        <input type="text" id="username" value={values.username} onChange={handleChange} /> <br />
        <label htmlFor="password">Şifre</label>
        <input type="password" id="password" value={values.password} onChange={handleChange} /> <br />
        <button type="submit">Giriş yap</button>
      </form> */}
    </div>
  );
}
