import { LS_FIELD } from "./__constants__";

export default function clear() {
  window?.localStorage?.setItem(LS_FIELD, JSON.stringify({}))
}