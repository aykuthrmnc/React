import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Formik, Form, Field, useFormikContext } from "formik";
import Input from "../components/form/Input";
import File from "../components/form/File";
import Checkbox from "../components/form/Checkbox";
import Radio from "../components/form/Radio";
import Textarea from "../components/form/Textarea";
import Select from "../components/form/Select";
import { SampleSchema, ContactSchema } from "../validations";

const AutoSubmitCode = () => {
  const { values, submitForm } = useFormikContext();

  useEffect(() => {
    if (values.code.length === 6) {
      submitForm();
    }
  }, [values, submitForm]);
  return null;
};

export default function Contact() {
  return (
    <div>
      <Helmet>
        <title>İletişim</title>
      </Helmet>
      <h3>İletişim</h3>

      <Formik initialValues={{ code: "" }} onSubmit={(values) => console.log(values)} validationSchema={SampleSchema}>
        {({ values }) => (
          <Form className="hidden">
            <Input label="Kodu girin" name="code" />
            <button type="submit">Gönder</button>
            <AutoSubmitCode />
          </Form>
        )}
      </Formik>

      <Formik
        initialValues={{ name: "", about: "", avatar: {}, accept: false, gender: 2, skills: [], level: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={ContactSchema}
      >
        {({ values, errors }) => (
          <Form className="p-4 m-4 shadow-lg grid gap-y-4 border rounded">
            <Input label="Ad Soyad" name="name" />
            <Textarea label="Hakkında" rows={6} name="about" />
            <Checkbox label="Kuralları kabul ediyorum!" name="accept" />
            <Select
              label="Cinsiyet"
              name="gender"
              options={[
                { key: "", value: "Seçin" },
                { key: 1, value: "Kadın" },
                { key: 2, value: "Erkek" },
              ]}
            />{/* original="true" */}
            <File label="Avatar" name="avatar" />
            <Radio
              label="Seviyenizi Seçin"
              name="level"
              options={[
                { key: "jr", value: "Jr. Developer" },
                { key: "sr", value: "Sr. Developer" },
                { key: "ninja", value: "Ninja" },
              ]}
            />
            <button className="h-10 rounded bg-black text-sm text-white px-5" disabled={!values.accept} type="submit">
              Gönder
            </button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
}
