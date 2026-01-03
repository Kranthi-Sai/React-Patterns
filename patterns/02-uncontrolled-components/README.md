# Uncontrolled Component Pattern

## What problem does this solve?

Not all input data needs to live in React state.

For simple, temporary, or non-reactive inputs, storing values in React state
creates unnecessary re-renders and added complexity.

The Uncontrolled Component Pattern allows the DOM to own the input state,
while React reads values only when needed.

---

## State Ownership Comparison

### Controlled Input (React owns state)

Input value → React State → DOM
Every keystroke triggers a re-render.

### Uncontrolled Input (DOM owns state)

Input value → DOM
React reads the value only when explicitly accessed.

Uncontrolled components remove React from the keystroke loop.

---

## Mental Model

> React does not need to own all state.
> Sometimes the DOM is the correct source of truth.

Every interaction flows:

User Input
   ↓
DOM stores value
   ↓
React reads value via ref
   ↓
Action is performed (submit, upload, etc.)

---

## When should you use this pattern?

Use uncontrolled components when:

- Input value is temporary
- No real-time validation is required
- React does not depend on the value for rendering
- Performance matters (avoid re-renders)

Common real-world examples:

- File uploads
- Search inputs with debounce
- One-time form submissions

## When should you NOT use this pattern?

Avoid uncontrolled components when:

- Validation depends on input value
- UI reacts to input changes
- State must be shared or lifted
- Predictable data flow is required

If business logic depends on the input value, a controlled component is safer.

---

## Example explanation

This example uses the same login form as the controlled component pattern,
but React does not control the input values.

- Inputs manage their own state in the DOM
- React accesses values using useRef
- Typing does not trigger re-renders
- Validation happens only on submit

---

## Architecture View

┌───────────┐
│   Input   │
│  (DOM)    │
└─────┬─────┘
      │ ref access
      ▼
┌───────────┐
│ React     │
│ Logic     │
└───────────┘

---

## Common mistakes

- Mixing controlled and uncontrolled inputs
- Reading ref values during render
- Using uncontrolled inputs where validation is required
- Using refs to avoid thinking about state design

---

## Interview explanation :

Explain it like this:

“An uncontrolled component lets the DOM manage input state, while React
reads values only when necessary using refs. This approach is useful for
simple or temporary inputs where React does not need to re-render on every
change.”

---

## Live Demo

Try this pattern interactively:

https://codesandbox.io/p/sandbox/rd525f