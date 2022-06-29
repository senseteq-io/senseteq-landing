import { LS_FIELD } from './__constants__'

export default function update(updates) {
  const ls = window?.localStorage

  /* It's using the optional chaining operator to get the value of `LS_FIELD` from `localStorage` if it
  exists, otherwise it sets `json` to an empty object. */
  const json = ls?.getItem(LS_FIELD) || '{}'
  const obj = JSON.parse(json)

  /* It's using the spread operator to create a new object that contains the properties of `obj` and
  `updates`. */
  const newObj = { ...obj, ...updates }

  /* It's using the optional chaining operator to set the value of `LS_FIELD` in `localStorage` if it
  exists, otherwise it does nothing. */
  ls?.setItem(LS_FIELD, JSON.stringify(newObj))
}
