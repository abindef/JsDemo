// 用户服务模块
import { USER_ROLES, API_ENDPOINTS } from '../constants.js';
import ValidationUtils from '../utils/validation.js';

class UserService {
    constructor() {
        this.users = new Map();
    }

    async createUser(userData) {
        const { email, password } = userData;
        
        // 使用导入的验证工具
        if (!ValidationUtils.isValidEmail(email)) {
            throw new Error('Invalid email format');
        }
        
        if (!ValidationUtils.isValidPassword(password)) {
            throw new Error('Invalid password format');
        }

        const user = {
            ...userData,
            role: USER_ROLES.USER,
            createdAt: new Date()
        };

        this.users.set(email, user);
        return user;
    }

    async getUser(email) {
        return this.users.get(email);
    }
}

// 导出单例实例
export const userService = new UserService();

// 同时导出类，以便需要时可以创建新实例
export default UserService;
