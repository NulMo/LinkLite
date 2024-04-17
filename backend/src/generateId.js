import { nanoid } from "nanoid"

export default function generateId() {
  let randomId = nanoid(5)
  return randomId
}