import { describe, test, expect, beforeEach } from 'vitest'
import { UserService } from '../userService'

describe('UserService', () => {
  let userService: UserService

  beforeEach(() => {
    userService = UserService.getInstance()
  })

  test('should be a singleton', () => {
    const instance1 = UserService.getInstance()
    const instance2 = UserService.getInstance()
    expect(instance1).toBe(instance2)
  })

  test('should get all users', () => {
    const users = userService.getUsers()
    expect(users).toHaveLength(2)
    expect(users[0]).toHaveProperty('name', 'John Doe')
    expect(users[1]).toHaveProperty('name', 'Jane Smith')
  })

  test('should get user by id', () => {
    const user = userService.getUserById(1)
    expect(user).toBeDefined()
    expect(user?.name).toBe('John Doe')
  })

  test('should return undefined for non-existent user', () => {
    const user = userService.getUserById(999)
    expect(user).toBeUndefined()
  })
})
