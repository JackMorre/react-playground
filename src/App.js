import { useFormik } from "formik";
import * as yup from "yup";

export default function App() {
  function onSubmit(values, actions) {
    const newData = { name: values.name, password: values.password };
    localStorage.setItem("listItem", JSON.stringify(newData));
    actions.resetForm();
  }

  const passwordRules =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const basicSchema = yup.object().shape({
    name: yup.string().required("Requires a valid username"),
    password: yup
      .string()
      .min(5)
      .matches(passwordRules, "Please include uppercase, lowercase, number")
      .required("Requires a valid password"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(formik.errors);

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Username</label>
      <input
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="text"
        placeholder="name"
        id="name"
        name="name"
        className={
          formik.errors.name && formik.touched.name ? "input-error" : ""
        }
      ></input>
      {formik.errors.name && formik.touched.name && (
        <p className="error-msg">{formik.errors.name}</p>
      )}
      <label htmlFor="password">Password</label>
      <input
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="password"
        placeholder="password"
        id="password"
        name="password"
        className={
          formik.errors.password && formik.touched.password ? "input-error" : ""
        }
      ></input>
      {formik.errors.password && formik.touched.password && (
        <p className="error-msg">{formik.errors.password}</p>
      )}
      <button disabled={formik.isSubmitting} type="submit">
        Submit
      </button>
    </form>
  );
}
