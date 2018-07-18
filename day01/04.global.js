/*
  浏览器的全局对象 window
  node的全局对象 global
 */

// console.log(window);

// console.log(global);

/*
  console
  setTimeout
  setInterval
  setImmediate   立即执行回调函数
  Buffer
  process.nextTick   立即执行回调函数
  
  
  事件轮询机制：6个阶段
    ** timers   定时器阶段：开始计时，执行到点的定时器的回调函数
    pending callbacks  系统阶段：执行系统的任务，TCP错误处理
    idle, prepare 准备阶段
    ** poll 轮询阶段
      如果轮询队列不为空
        轮询轮询队列中的第一个回调函数，取出执行。一直轮询下去，直到轮询队列为空或者达到系统的最大限制
      如果轮询队列为空
        如果之前设置过setImmediate函数
          直接进入下一个check阶段
        如果之前没有设置过setImmediate函数
          在当前阶段等待，等待轮询队列添加进来回调函数，然后取出执行（如果定时器到点了，也会进入下一个check阶段）
    ** check 检查阶段： 执行setImmediate设置的回调函数
    close callbacks  关闭阶段
    
    process.nextTick回调函数能在任意阶段优先执行
 */



setImmediate(() => {
  console.log('setImmediate()');
})

setTimeout(() => {
  console.log('setTimeout()');
}, 0)

process.nextTick(() => {
  console.log('process.nextTick()');
})