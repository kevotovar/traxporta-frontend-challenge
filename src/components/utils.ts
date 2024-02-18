import { User } from '../services/placeholder'

export function filterUsers(users: User[], inputValue: string) {
  return users.filter(
    (user) =>
      user.name.toLowerCase().startsWith(inputValue.toLowerCase()) ||
      user.email.toLowerCase().startsWith(inputValue.toLowerCase())
  )
}
