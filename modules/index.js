// 主入口文件 - 统一导出模块
export * from './constants.js';
export { default as ValidationUtils } from './utils/validation.js';
export { userService, default as UserService } from './services/userService.js';

// 示例用法
import { userService, USER_ROLES, ValidationUtils } from './index.js';

async function example() {
    try {
        // 创建新用户
        const newUser = await userService.createUser({
            email: 'test@example.com',
            password: 'password123',
            name: 'Test User'
        });
        console.log('Created user:', newUser);

        // 获取用户
        const user = await userService.getUser('test@example.com');
        console.log('Retrieved user:', user);

        // 使用工具函数
        console.log('Email validation:', ValidationUtils.isValidEmail('test@example.com'));
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// 运行示例
example();
