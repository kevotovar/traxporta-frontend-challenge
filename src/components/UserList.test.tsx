import { render } from '@testing-library/react'
import UserList from './UserList'
import { User } from '../services/placeholder'

describe('UserList', () => {
  const users = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
    { name: 'Bob Johnson', email: 'bob@example.com' },
  ]

  it('should render a table with user data', () => {
    const { getByText, getByAltText } = render(
      <UserList users={users as User[]} />
    )

    // Check if table headers are rendered
    expect(getByText('Name')).toBeInTheDocument()
    expect(getByText('Email')).toBeInTheDocument()

    // Check if user data is rendered
    users.forEach((user) => {
      expect(getByText(user.name)).toBeInTheDocument()
      expect(getByText(user.email)).toBeInTheDocument()
      expect(getByAltText(user.name)).toBeInTheDocument()
    })
  })
})
