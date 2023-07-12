import Yup from "./validation";

export const ContactSchema = Yup.object().shape({
  name: Yup.string().required(),
  about: Yup.string().required(),
  accept: Yup.boolean().oneOf([true]),
  gender: Yup.string().required(),
  level: Yup.string().required("Bir seviye belirleyin"),
  avatar: Yup.mixed().test({
    message: "Bir avatar seçmelisiniz",
    test: (file) => file?.name,
  }),
});
