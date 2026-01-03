import { useState } from "react";

type LoginForm = {
  email: string;
  password: string;
};

export default function ControlledComponentExample() {
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<LoginForm>>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  function validate(values: LoginForm) {
    const nextErrors: Partial<LoginForm> = {};

    if (!values.email.includes("@")) {
      nextErrors.email = "Invalid email address";
    }

    if (values.password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters";
    }

    return nextErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    console.log("Submitting form:", form);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <button type="submit">Login</button>
    </form>
  );
}
