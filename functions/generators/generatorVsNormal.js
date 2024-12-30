// 1. 普通函数
function normalFunction() {
    console.log('第一步');
    console.log('第二步');
    console.log('第三步');
    return '完成';
}

// 2. 生成器函数
function* generatorFunction() {
    console.log('开始第一步');
    yield '第一步完成';
    
    console.log('开始第二步');
    yield '第二步完成';
    
    console.log('开始第三步');
    yield '第三步完成';
    
    return '全部完成';
}

// 测试普通函数
console.log('1. 执行普通函数：');
const result = normalFunction();
console.log('普通函数返回值:', result);

// 测试生成器函数
console.log('\n2. 执行生成器函数：');
const generator = generatorFunction();

// 生成器需要通过next()逐步执行
console.log('第一次调用next():');
console.log(generator.next());

console.log('\n第二次调用next():');
console.log(generator.next());

console.log('\n第三次调用next():');
console.log(generator.next());

console.log('\n第四次调用next():');
console.log(generator.next());

// 3. 展示生成器函数的特殊属性
console.log('\n3. 生成器函数的特殊属性：');
console.log('是否是生成器函数:', generatorFunction.constructor.name);
console.log('生成器对象:', generator);

// 4. 验证生成器的可迭代性
console.log('\n4. 生成器的可迭代性：');
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

console.log('使用for...of遍历生成器：');
for (const num of numberGenerator()) {
    console.log(num);
}

// 5. 展示生成器的暂停和恢复特性
console.log('\n5. 生成器的暂停和恢复：');
function* counter() {
    let count = 0;
    while (true) {
        const reset = yield count++;
        if (reset) {
            count = 0;
        }
    }
}

const counterGen = counter();
console.log('计数:', counterGen.next().value);    // 0
console.log('计数:', counterGen.next().value);    // 1
console.log('重置:', counterGen.next(true).value);// 0
console.log('计数:', counterGen.next().value);    // 1
