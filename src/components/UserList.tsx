export interface User {
  name: string
  email: string
  avatar: string
}

export interface UserListProps {
  users: User[]
}

export function UserList({ users }: UserListProps) {
  return (
    <div>
      {users.map((user) => (
        <div key={user.email}>
          <img src={user.avatar} alt={user.name} />
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}
