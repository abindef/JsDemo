// 1. JavaScript 对象的动态性
console.log('1. 动态添加属性示例：');
const person = {
    name: 'Alice'
};
console.log('初始对象：', person);

// 动态添加属性
person.age = 25;
person['occupation'] = 'Engineer';
console.log('添加属性后：', person);

// 2. 原型继承
console.log('\n2. 原型继承示例：');
function Animal(name) {
    this.name = name;
}

// 动态添加方法到原型
Animal.prototype.speak = function() {
    return `${this.name} makes a sound`;
};

const dog = new Animal('Dog');
console.log(dog.speak());

// 在运行时添加新方法
Animal.prototype.eat = function() {
    return `${this.name} is eating`;
};

console.log(dog.eat());

// 3. 对象的属性描述符
console.log('\n3. 属性描述符示例：');
const user = {};

// 使用属性描述符添加属性
Object.defineProperty(user, 'name', {
    value: 'Bob',
    writable: true,
    enumerable: true,
    configurable: true
});

// 添加带有getter和setter的属性
let _age = 20;
Object.defineProperty(user, 'age', {
    get: function() {
        return _age;
    },
    set: function(value) {
        if (value < 0) {
            throw new Error('Age cannot be negative');
        }
        _age = value;
    }
});
user.name="abc"
console.log('用户名：', user.name);
user.age = 25;
console.log('年龄：', user.age);

// 4. 对象封闭和冻结
console.log('\n4. 对象封闭和冻结示例：');
const frozenObj = Object.freeze({
    prop: 42
});

try {
    if (Object.isFrozen(frozenObj)) {
        console.log('警告：对象已被冻结，无法添加或修改属性');
    }
    frozenObj.newProp = 123;
    console.log('尝试修改冻结对象：', frozenObj);
} catch (e) {
    console.log('错误类型：', e.name);
    console.log('错误信息：', e.message);
}

// 5. 对比其他语言（伪代码注释）
console.log('\n5. 与其他语言的对比：');
/*
// Java中的类（静态类型）：
public class Person {
    private String name;  // 必须预先声明
    private int age;      // 必须预先声明
    
    // 不能随意添加新属性
}

// Python中的类：
class Person:
    def __init__(self):
        self.name = None  // 虽然可以动态添加，但通常在初始化时定义
        # Python也支持动态添加，但不像JavaScript那么普遍
*/
