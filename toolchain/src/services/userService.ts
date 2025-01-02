interface User {
  id: number
  name: string
  email: string
}

export class UserService {
  private static instance: UserService
  private users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ]

  private constructor() {}

  static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService()
    }
    return UserService.instance
  }

  getUsers(): User[] {
    return [...this.users]
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id)
  }
}
