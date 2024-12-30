// 1. 创建基本的 Symbol
const sym1 = Symbol('my symbol');
const sym2 = Symbol('my symbol');
console.log('sym1 === sym2:', sym1 === sym2); // false，因为每个 Symbol 都是唯一的

// 2. Symbol 作为对象属性
const user = {
    name: 'Alice',
    age: 25,
    [Symbol('id')]: 12345
};

// 常规的属性遍历不会显示 Symbol 属性
console.log('\n普通属性遍历:');
for (let key in user) {
    console.log(key + ':', user[key]);
}

// 获取对象的 Symbol 属性
const symbols = Object.getOwnPropertySymbols(user);
console.log('\nSymbol 属性:');
symbols.forEach(sym => {
    console.log(sym.description + ':', user[sym]);
});

// 3. Symbol.for() - 全局 Symbol 注册
const globalSym1 = Symbol.for('globalSymbol');
const globalSym2 = Symbol.for('globalSymbol');
console.log('\n全局 Symbol 比较:');
console.log('globalSym1 === globalSym2:', globalSym1 === globalSym2); // true

// 4. Symbol 用作常量
const PERMISSIONS = {
    READ: Symbol('read'),
    WRITE: Symbol('write'),
    EXECUTE: Symbol('execute')
};

// 使用 Symbol 常量
function checkPermission(permission) {
    switch(permission) {
        case PERMISSIONS.READ:
            console.log('有读取权限');
            break;
        case PERMISSIONS.WRITE:
            console.log('有写入权限');
            break;
        case PERMISSIONS.EXECUTE:
            console.log('有执行权限');
            break;
        default:
            console.log('未知权限');
    }
}

console.log('\n权限检查示例:');
checkPermission(PERMISSIONS.READ);
checkPermission(PERMISSIONS.WRITE);
