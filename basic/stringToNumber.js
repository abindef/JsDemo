function stringToNumber(str) {
    // 去除空白字符
    str = str.trim();
    
    // 处理正负号
    let isNegative = false;
    if (str[0] === '-') {
        isNegative = true;
        str = str.slice(1);
    } else if (str[0] === '+') {
        str = str.slice(1);
    }

    // 检查是否是有效数字
    if (!/^[\d.]+$/.test(str)) {
        return NaN;
    }

    let result = 0;
    let hasDecimal = str.includes('.');

    if (!hasDecimal) {
        // 整数处理
        for (let i = 0; i < str.length; i++) {
            const digit = str[i].charCodeAt(0) - '0'.charCodeAt(0);
            result = result * 10 + digit;
        }
    } else {
        // 小数处理
        const parts = str.split('.');
        if (parts.length > 2) return NaN; // 多个小数点

        // 处理整数部分
        for (let i = 0; i < parts[0].length; i++) {
            const digit = parts[0][i].charCodeAt(0) - '0'.charCodeAt(0);
            result = result * 10 + digit;
        }

        // 处理小数部分
        let decimal = 0;
        for (let i = parts[1].length - 1; i >= 0; i--) {
            const digit = parts[1][i].charCodeAt(0) - '0'.charCodeAt(0);
            decimal = (decimal + digit) / 10;
        }
        result += decimal;
    }

    return isNegative ? -result : result;
}

// 测试用例
const testCases = [
    "123",      // 整数
    "-456",     // 负数
    "0.789",    // 小数
    "-1.234",   // 负小数
    "abc",      // 非数字
    "12.34.56", // 多个小数点
    "  42  ",   // 包含空格
    "+999",     // 带正号
    "0",        // 零
    ".5"        // 以小数点开始
];

console.log("测试结果：");
testCases.forEach(test => {
    console.log(`"${test}" => ${stringToNumber(test)}`);
});

// 对比原生 Number 转换结果
console.log("\n对比原生 Number 转换结果：");
testCases.forEach(test => {
    const customResult = stringToNumber(test);
    const nativeResult = Number(test);
    console.log(`"${test}": 自定义转换 = ${customResult}, 原生转换 = ${nativeResult}`);
});
