import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState
} from "react";

const Form = forwardRef(function Form(props, ref) {
  const form = useRef();

  useImperativeHandle(ref, () => {
    return {
      clear() {
        form.current.reset();
      }
    };
  });

  //This next part was extra practice (maybe this should go in the App component)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const initialUser = {
    name: "",
    email: ""
  };
  const [enteredValue, setEnteredValue] = useState(initialUser);

  // Using a single function to capture values from all 2 input fields
  const userChangeHandler = (input, value) => {
    setEnteredValue((prevInput) => {
      return {
        ...prevInput,
        [input]: value
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(
      "name = " + enteredValue.name + " & email = " + enteredValue.email
    );
    setEnteredValue(initialUser);
  };

  // Accepted the forwarded ref and "connected" it to the <form> element
  return (
    <form ref={form} onSubmit={submitHandler}>
      <p>
        <label>Name</label>
        <input
          onChange={(event) => userChangeHandler("name", event.target.value)}
          value={enteredValue["name"]}
          type="text"
          id="name"
        />
      </p>

      <p>
        <label>Email</label>
        <input
          onChange={(event) => userChangeHandler("email", event.target.value)}
          value={enteredValue["email"]}
          type="email"
          id="email"
        />
      </p>
      <p id="actions">
        <button type="Submit">Save</button>
      </p>
    </form>
  );
});

export default Form;
