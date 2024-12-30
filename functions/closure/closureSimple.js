// 1. 简单的闭包示例
function createPerson(name) {
    // 外部函数的变量
    let age = 0;
    
    // 返回一个对象，包含多个方法
    return {
        // 这些方法形成闭包，它们可以访问 name 和 age
        getName: function() {
            return name;
        },
        getAge: function() {
            return age;
        },
        setAge: function(newAge) {
            age = newAge;
        }
    };
}

// 创建两个不同的实例
const person1 = createPerson('Alice');
const person2 = createPerson('Bob');

// 每个实例都有自己独立的状态
console.log('Person 1:', person1.getName()); // Alice
person1.setAge(25);
console.log('Person 1 age:', person1.getAge()); // 25

console.log('Person 2:', person2.getName()); // Bob
person2.setAge(30);
console.log('Person 2 age:', person2.getAge()); // 30

// 验证两个实例是独立的
console.log('再次检查 Person 1 age:', person1.getAge()); // 仍然是 25

// 2. 计数器示例
function createCounter(name) {
    let count = 0;
    
    return {
        increment: function() {
            count++;
            console.log(`${name} 的计数: ${count}`);
        },
        getCount: function() {
            return count;
        }
    };
}

// 创建两个独立的计数器
const counter1 = createCounter('计数器1');
const counter2 = createCounter('计数器2');

// 它们的计数是独立的
counter1.increment(); // 计数器1: 1
counter1.increment(); // 计数器1: 2
counter2.increment(); // 计数器2: 1

console.log('Counter 1 最终计数:', counter1.getCount()); // 2
console.log('Counter 2 最终计数:', counter2.getCount()); // 1

// 3. 银行账户示例
function createBankAccount(accountName) {
    let balance = 0;
    
    return {
        deposit: function(amount) {
            balance += amount;
            console.log(`${accountName} 存款 ${amount}, 当前余额: ${balance}`);
        },
        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
                console.log(`${accountName} 取款 ${amount}, 当前余额: ${balance}`);
            } else {
                console.log(`${accountName} 余额不足`);
            }
        },
        getBalance: function() {
            return balance;
        }
    };
}

// 创建两个独立的银行账户
const account1 = createBankAccount('账户1');
const account2 = createBankAccount('账户2');

account1.deposit(1000);
account2.deposit(500);

account1.withdraw(200);
account2.withdraw(300);

console.log('账户1余额:', account1.getBalance());
console.log('账户2余额:', account2.getBalance());
