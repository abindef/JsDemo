import React from 'react'
import { UserService } from '../services/userService'

export const UserList: React.FC = () => {
  const userService = UserService.getInstance()
  const users = userService.getUsers()

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <div>{user.name}</div>
          <div>{user.email}</div>
        </li>
      ))}
    </ul>
  )
}
