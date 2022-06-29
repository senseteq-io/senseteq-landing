import { LS_FIELD } from "./__constants__";

export default function get(type) {
  const ls = window?.localStorage
  const json = ls?.getItem(LS_FIELD)
  const obj = JSON.parse(json)

  return obj?.[type]
}