import { useState } from 'react'
import { useQuery } from 'react-query'
import { User, fetchUsers } from './services/placeholder'
import Search from './components/Search'

function App() {
  const query = useQuery('fetch', fetchUsers)
  const [selectedUser, setSelectedUser] = useState<User>()

  const users = selectedUser ? [selectedUser] : query.data ?? []

  if (query.isLoading) return <p>Loading...</p>
  if (query.isError) return <p>Error</p>
  return (
    <div>
      <Search
        users={query.data ?? []}
        onSelect={(user) => setSelectedUser(user)}
        selectedItem={selectedUser}
      />
      {users.map((user) => (
        <div key={user.email}>
          <img
            src={`https://i.pravatar.cc/150?u=${user.email}`}
            alt={user.name}
          />
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default App
