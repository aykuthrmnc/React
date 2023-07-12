import Yup from "./validation"

export const SampleSchema = Yup.object().shape({
    code: Yup.string().required().min(6)
})