import { User } from '../services/placeholder'
export interface UserListProps {
  users: User[]
}

export default function UserList({ users }: UserListProps) {
  return (
    <table className="mt-[40px]">
      <thead>
        <tr className="border-b-[1px]">
          <th></th>
          <th className="text-start font-light text-gray-300 pb-4">Name</th>
          <th className="text-start font-light text-gray-300 pb-4">Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.email} className="border-b-[1px] last:border-b-0">
            <th className="flex justify-end p-4">
              <img
                src={`https://i.pravatar.cc/150?u=${user.email}`}
                alt={user.name}
                width="50"
                height="50"
                className="rounded-md border-2"
              />
            </th>
            <th className="text-start">
              <p>{user.name}</p>
            </th>
            <th className="text-start">
              <p>{user.email}</p>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
