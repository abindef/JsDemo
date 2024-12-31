// 工具函数 - 数据验证
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isValidPassword = (password) => {
    return password && password.length >= 8;
};

// 导出验证相关的工具函数集合
export default {
    isValidEmail,
    isValidPassword
};
