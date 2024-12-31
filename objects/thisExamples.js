// 1. 全局上下文中的 this
console.log('1. 全局上下文：');
console.log('全局this:', this);

// 2. 对象方法中的 this
console.log('\n2. 对象方法中的 this：');
const person = {
    name: 'Alice',
    greet: function() {
        console.log('Hello,', this.name);
    },
    // 箭头函数中的 this
    arrowGreet: () => {
        console.log('Arrow Hello,', this?.name);  // undefined，因为箭头函数没有自己的 this
    }
};

person.greet();        // this 指向 person
person.arrowGreet();   // this 指向全局作用域

// 3. 构造函数中的 this
console.log('\n3. 构造函数中的 this：');
function Car(brand) {
    this.brand = brand;
    this.start = function() {
        console.log(this.brand, '启动了');
    };
}

const car = new Car('Tesla');
car.start();

// 4. 事件处理中的 this（浏览器环境）
console.log('\n4. 事件处理中的 this：');
const button = {
    text: 'Click me',
    click: function() {
        console.log('Button', this.text, 'clicked');
    },
    arrowClick: () => {
        console.log('Arrow button', this?.text, 'clicked');
    }
};

button.click();      // this 指向 button
button.arrowClick(); // this 指向全局作用域

// 5. bind, call, apply 改变 this
console.log('\n5. bind, call, apply：');
function introduce(age, city) {
    console.log(`我是 ${this.name}，${age}岁，来自${city}`);
}

const user = { name: 'Bob' };

// 使用 call
introduce.call(user, 25, '北京');

// 使用 apply
introduce.apply(user, [25, '上海']);

// 使用 bind
const boundIntroduce = introduce.bind(user);
boundIntroduce(25, '广州');

// 6. 类中的 this
console.log('\n6. 类中的 this：');
class Animal {
    constructor(name) {
        this.name = name;
        // 绑定方法到实例
        this.boundSpeak = this.speak.bind(this);
        // 箭头函数自动绑定
        this.arrowSpeak = () => {
            console.log(this.name, '使用箭头函数叫了一声');
        };
    }

    speak() {
        console.log(this.name, '叫了一声');
    }
}

const dog = new Animal('狗');
dog.speak();      // 正常工作
console.log('测试解绑方法：');
const { speak } = dog;  // 解构会失去 this 绑定
console.log('使用绑定的方法：');
dog.boundSpeak();     // 正常工作，因为绑定了
console.log('使用箭头函数：');
dog.arrowSpeak();     // 正常工作，因为是箭头函数

// 7. 嵌套函数中的 this
console.log('\n7. 嵌套函数中的 this：');
const manager = {
    name: 'Manager',
    department: {
        name: 'Sales',
        describe: function() {
            console.log('Department:', this.name);
            
            function innerFunction() {
                console.log('Inner:', this?.name);
            }
            
            const arrowFunction = () => {
                console.log('Arrow:', this.name);
            };
            
            innerFunction();     // this 丢失
            arrowFunction();     // this 保持为 department
        }
    }
};

manager.department.describe();

// 8. setTimeout 中的 this
console.log('\n8. setTimeout 中的 this：');
const timer = {
    name: 'Timer',
    regularFunction: function() {
        setTimeout(function() {
            console.log('Regular timeout:', this?.name);
        }, 100);
    },
    arrowFunction: function() {
        setTimeout(() => {
            console.log('Arrow timeout:', this.name);
        }, 100);
    }
};

timer.regularFunction();  // this 丢失
timer.arrowFunction();    // this 正确

// 9. 对象方法中的 this 丢失
console.log('\n9. 方法赋值导致 this 丢失：');
const counter = {
    count: 0,
    increment: function() {
        this.count++;
        console.log('Count:', this.count);
    }
};

const increment = counter.increment;
counter.increment();  // 正常工作
increment();         // this 丢失
