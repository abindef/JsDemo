// 1. 基本的生成器函数
console.log('1. 基本生成器：');
function* basicGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen1 = basicGenerator();
console.log(gen1.next()); // { value: 1, done: false }
console.log(gen1.next()); // { value: 2, done: false }
console.log(gen1.next()); // { value: 3, done: false }
console.log(gen1.next()); // { value: undefined, done: true }

// 2. 使用 for...of 遍历生成器
console.log('\n2. 使用 for...of：');
function* colors() {
    yield '红';
    yield '绿';
    yield '蓝';
}

for (const color of colors()) {
    console.log('颜色:', color);
}

// 3. 生成无限序列
console.log('\n3. 无限序列：');
function* infiniteNumbers() {
    let n = 1;
    while (true) {
        yield n++;
    }
}

const numbers = infiniteNumbers();
console.log(numbers.next().value); // 1
console.log(numbers.next().value); // 2
console.log(numbers.next().value); // 3
console.log(numbers.next().value); // 4

// 4. yield 接收值
console.log('\n4. yield 接收值：');
function* twoWayGenerator() {
    const a = yield '请输入第一个数字';
    const b = yield '请输入第二个数字';
    yield `结果是: ${a + b}`;
}

const gen2 = twoWayGenerator();
console.log(gen2.next());        // 第一个 yield
console.log(gen2.next(10));      // 发送 10 给第一个 yield
console.log(gen2.next(20));      // 发送 20 给第二个 yield

// 5. 生成器委托
console.log('\n5. 生成器委托：');
function* gen3() {
    yield 'a';
    yield 'b';
}

function* gen4() {
    yield 1;
    yield* gen3();    // 委托给 gen3
    yield 2;
}

for (const value of gen4()) {
    console.log('委托值:', value);
}

// 6. 使用生成器实现迭代器
console.log('\n6. 自定义迭代器：');
class Range {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    *[Symbol.iterator]() {
        for (let i = this.start; i <= this.end; i++) {
            yield i;
        }
    }
}

const range = new Range(1, 3);
for (const num of range) {
    console.log('范围内的数字:', num);
}

// 7. 异步生成器
console.log('\n7. 异步生成器：');
async function* asyncGenerator() {
    yield await Promise.resolve('First');
    yield await Promise.resolve('Second');
    yield await Promise.resolve('Third');
}

async function runAsync() {
    const gen = asyncGenerator();
    for await (const value of gen) {
        console.log('异步值:', value);
    }
}

runAsync();

// 8. 使用 yield 进行状态管理
console.log('\n8. 状态管理：');
function* taskManager() {
    let task = yield '准备开始';
    
    while (true) {
        if (task === 'exit') {
            break;
        }
        task = yield `执行任务: ${task}`;
    }
    
    return '所有任务完成';
}

const manager = taskManager();
console.log(manager.next());           // 开始
console.log(manager.next('任务A'));    // 执行任务A
console.log(manager.next('任务B'));    // 执行任务B
console.log(manager.next('exit'));     // 结束

// 9. 错误处理
console.log('\n9. 错误处理：');
function* errorGenerator() {
    try {
        yield '正常操作';
        yield '可能出错的操作';
    } catch (e) {
        yield `捕获错误: ${e.message}`;
    }
    yield '继续执行';
}

const errorGen = errorGenerator();
console.log(errorGen.next());
console.log(errorGen.throw(new Error('测试错误')));
console.log(errorGen.next());
