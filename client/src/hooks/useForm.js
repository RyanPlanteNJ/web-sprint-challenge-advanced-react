import { useLocalStorage } from "./useLocalStorage";

export const useForm = (initialState, key, submitLogic, notStickyArray) => {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  const [values, setValues] = useLocalStorage(
    initialState,
    key,
    notStickyArray
  );

  const handleChanges = e => {
    // setUsername(e.target.value);
    // access the field name with e.target.name
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  // const handleEmailChanges = e => {
  //   setEmail(e.target.value);
  // };

  const clearForm = () => {
    setValues(initialState);
  };

  const handleSubmit = e => {
    e.preventDefault();
    submitLogic();
    clearForm();
    // send to api server to update
  };

  return [values, handleChanges, clearForm, handleSubmit];
};
