## What is redux?

Redux is a predictable state container for js appliction.

## Why predictable?

- Single source of truth
- Immutable behavior - handle interly with immer function
- Usage of pure function
- Unidirectional flow
- centralize
- Debuggable
- Middleware support

## What is pure function?

A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. It does not depend on any state or data change during a program's execution. Rather, it only depends on its input arguments.

## Some terms about redux

- Action : Action taken by the user. Each action has corresponding reducer function.
- Dispatch : Sending the action object to the store. Dispatch an action trigers the corresponding reducer to update the state.
- Payload : Optional data that is attached to an action. It carried any additional information that needs to be sent along with the action to update the state.
