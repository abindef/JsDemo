// 1. 基本的原型继承
console.log('1. 基本的原型继承示例：');
function Animal(name) {
    this.name = name;
}

// 在原型上添加方法
Animal.prototype.speak = function() {
    return `${this.name} makes a sound`;
};

const cat = new Animal('Cat');
const dog = new Animal('Dog');

console.log(cat.speak()); // Cat makes a sound
console.log(dog.speak()); // Dog makes a sound

// 验证方法共享
console.log('cat.speak === dog.speak:', cat.speak === dog.speak); // true，因为它们共享同一个方法

// 2. 原型链继承
console.log('\n2. 原型链继承示例：');
function Dog(name, breed) {
    Animal.call(this, name); // 调用父类构造函数
    this.breed = breed;
}

// 建立原型链
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// 在 Dog 的原型上添加新方法
Dog.prototype.bark = function() {
    return `${this.name} (${this.breed}) barks loudly!`;
};

const husky = new Dog('Max', 'Husky');
console.log(husky.speak()); // 继承自 Animal
console.log(husky.bark());  // Dog 特有的方法

// 3. 动态修改原型
console.log('\n3. 动态修改原型示例：');
Animal.prototype.eat = function(food) {
    return `${this.name} eats ${food}`;
};

// 所有实例都能访问新添加的方法
console.log(cat.eat('fish'));
console.log(husky.eat('meat'));

// 4. 实例属性 vs 原型属性
console.log('\n4. 实例属性 vs 原型属性：');
Animal.prototype.type = 'Unknown';

const bird = new Animal('Bird');
console.log('Default type:', bird.type); // Unknown

bird.type = 'Avian'; // 创建实例属性
console.log('Instance type:', bird.type); // Avian
console.log('Prototype type:', Animal.prototype.type); // Unknown

// 5. 检查原型链
console.log('\n5. 检查原型链：');
console.log('husky instanceof Dog:', husky instanceof Dog);
console.log('husky instanceof Animal:', husky instanceof Animal);
console.log('cat instanceof Dog:', cat instanceof Dog);

// 6. 使用 Object.getPrototypeOf
console.log('\n6. 获取对象的原型：');
console.log('husky的原型是Dog.prototype:', 
    Object.getPrototypeOf(husky) === Dog.prototype);
console.log('Dog.prototype的原型是Animal.prototype:', 
    Object.getPrototypeOf(Dog.prototype) === Animal.prototype);

// 7. 属性查找过程
console.log('\n7. 属性查找过程示例：');
function Shape() {}
Shape.prototype.color = 'red';

const circle = new Shape();
console.log('默认颜色:', circle.color); // red
circle.color = 'blue';
console.log('修改后的颜色:', circle.color); // blue
console.log('原型中的颜色:', Shape.prototype.color); // red
