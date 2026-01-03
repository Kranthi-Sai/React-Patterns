import { useRef } from "react";

export default function UncontrolledComponentExample() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const email = emailRef.current?.value ?? "";
    const password = passwordRef.current?.value ?? "";

    if (!email.includes("@")) {
      alert("Enter a valid email");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    console.log("Submitting form:", { email, password });
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          ref={emailRef}
          name="email"
          autoComplete="email"
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          ref={passwordRef}
          type="password"
          name="password"
        />
      </div>

      <button type="submit">Login</button>
    </form>
  );
}
