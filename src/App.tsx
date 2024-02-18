import { useState } from 'react'
import { useQuery } from 'react-query'
import { User, fetchUsers } from './services/placeholder'
import Search from './components/Search'
import UserList from './components/UserList'

function App() {
  const query = useQuery('fetch', fetchUsers)
  const [selectedUser, setSelectedUser] = useState<User>()

  const users = selectedUser ? [selectedUser] : query.data ?? []

  if (query.isLoading) return <p>Loading...</p>
  if (query.isError) return <p>Error</p>
  return (
    <main className="my-4 max-w-2xl mx-auto flex flex-col justify-center pt-10 border-[1px] border-gray-300 bg-white rounded-xl">
      <h1 className="text-3xl font-bold text-center mb-4">Users</h1>
      <Search
        users={query.data ?? []}
        onSelect={(user) => setSelectedUser(user)}
        selectedItem={selectedUser}
      />
      <UserList users={users} />
    </main>
  )
}

export default App
