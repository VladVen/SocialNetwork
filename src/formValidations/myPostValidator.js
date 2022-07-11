import * as Yup from "yup";

const myPostValidatorSchema = Yup.object().shape({
    newPostText: Yup.string()
        .min(1, "Must be longer than 1 characters")
        .max(500, "Must be less than 500 characters")
        .required('See you next time')
});

export default myPostValidatorSchema

