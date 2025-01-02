import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { UserList } from '../../components/UserList'

describe('User Flow Integration', () => {
  test('displays user information correctly', () => {
    render(<UserList />)
    
    // 验证用户列表渲染
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
    
    // 验证用户信息显示
    const users = [
      { name: 'John Doe', email: 'john@example.com' },
      { name: 'Jane Smith', email: 'jane@example.com' }
    ]
    
    users.forEach(user => {
      expect(screen.getByText(user.name)).toBeInTheDocument()
      expect(screen.getByText(user.email)).toBeInTheDocument()
    })
  })
})
