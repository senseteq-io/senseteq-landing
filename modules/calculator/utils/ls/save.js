import { LS_FIELD } from './__constants__'

export default function save(type, value) {
  const ls = window?.localStorage
  const json = ls?.getItem(LS_FIELD) || '{}'
  const obj = JSON.parse(json)

  if (type && value) {
    obj[type] = value
  }

  ls?.setItem(LS_FIELD, JSON.stringify(obj))
}
