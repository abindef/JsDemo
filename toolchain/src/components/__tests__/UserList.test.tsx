import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { UserList } from '../UserList'

describe('UserList Component', () => {
  test('renders user list', () => {
    render(<UserList />)
    
    // 验证列表元素存在
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
    
    // 验证用户名和邮箱显示
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('john@example.com')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.getByText('jane@example.com')).toBeInTheDocument()
  })
})
