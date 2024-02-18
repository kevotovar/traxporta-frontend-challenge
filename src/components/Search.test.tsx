import { User } from '../services/placeholder'
import { filterUsers } from './utils'

describe('filterUsers', () => {
  const users = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
    { name: 'Bob Johnson', email: 'bob@example.com' },
  ]

  it('should filter users based on name', () => {
    const filteredUsers = filterUsers(users as User[], 'John')
    expect(filteredUsers).toEqual([
      { name: 'John Doe', email: 'john@example.com' },
    ])
  })

  it('should filter users based on email', () => {
    const filteredUsers = filterUsers(users as User[], 'jane')
    expect(filteredUsers).toEqual([
      { name: 'Jane Smith', email: 'jane@example.com' },
    ])
  })

  it('should filter users case-insensitively', () => {
    const filteredUsers = filterUsers(users as User[], 'BOB')
    expect(filteredUsers).toEqual([
      { name: 'Bob Johnson', email: 'bob@example.com' },
    ])
  })

  it('should return an empty array if no matching users found', () => {
    const filteredUsers = filterUsers(users as User[], 'Alice')
    expect(filteredUsers).toEqual([])
  })
})
