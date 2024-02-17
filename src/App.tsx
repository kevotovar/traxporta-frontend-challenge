import { useQuery } from 'react-query'
import { fetchUsers } from './services/placeholder'

function App() {
  const query = useQuery('fetch', fetchUsers)

  if (query.isLoading) return <p>Loading...</p>
  if (query.isError) return <p>Error</p>
  return (
    <div>
      {query.data?.map((user) => (
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
