# Controlled Component Pattern

## What problem does this solve?

In web applications, form inputs naturally store their state inside the DOM.
This becomes a problem when input values affect business logic, validation,
submission, or UI behavior.

The Controlled Component Pattern moves ownership of input state
from the DOM into React, making the UI predictable and debuggable.

---

## State Ownership Comparison

### Uncontrolled Input (DOM owns state)

Input value → DOM  
React reads the value only when explicitly accessed.

### Controlled Input (React owns state)

Input value → React State → DOM

Controlled components eliminate hidden state inside the DOM and make data
flow explicit.

---

## Mental Model

> The UI is a pure function of React state.  
> The DOM never owns important data.

Every change flows:

User Input
   ↓
onChange Event
   ↓
React State Update
   ↓
Component Re-render
   ↓
Input value updated from state

---

## When should you use this pattern?

Use controlled components when:

- Input values are submitted to an API
- Validation rules exist
- UI depends on the input value
- State must be shared or lifted later

Most production forms fall into this category.

---

## When should you NOT use this pattern?

Avoid controlled components when:

- Input data is large and temporary (e.g. file uploads)
- The value is not used by React logic
- Performance is critical and re-renders are unnecessary

Controlled is not default. Controlled is intentional.

---

## Example explanation

This example shows a login form where React fully controls
the input values and validation.

- One state object owns the form
- Inputs read from state
- Changes update state
- Submission reads from state

---

## Architecture View

┌───────────┐
│   Input   │
└─────┬─────┘
      │ onChange
      ▼
┌───────────┐
│ React     │
│ State     │
└─────┬─────┘
      │ re-render
      ▼
┌───────────┐
│   Input   │
│ value=…   │
└───────────┘

---

## Common mistakes

- One `useState` per input
- Storing derived values in state
- Validating inside render
- Mixing controlled and uncontrolled inputs

---

## Interview explanation 

Explain it like this:

“A controlled component keeps input values in React state, making the UI
deterministic and predictable. This approach is used when input values
affect validation, submission, or other business logic.”

## Live Demo

Try this pattern interactively:

https://codesandbox.io/p/sandbox/pdqgk4

