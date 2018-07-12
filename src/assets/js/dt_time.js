/**
*
* @param fn {Function}   实际要执行的函数
* @param wait {Number}  延迟时间，也就是阈值，单位是毫秒（ms）
*
* @return {Function}     返回一个“去弹跳”了的函数
*/
export const debounce  =(fn,wait)=> {
  // 定时器，用来 setTimeout
  var timer;
  return function(...args){
    clearTimeout(timer)
    // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
    // 再过 wait 毫秒就执行 fn
    timer = setTimeout(function () {
      fn.apply(this, args)
    }, wait)
  }
}

/**
 *
 * @param fn {Function}   实际要执行的函数
 * @param delay {Number}  执行间隔，单位是毫秒（ms）
 *
 * @return {Function}     返回一个“节流”函数
 */

export const  throttle=(fn, threshhold=250)=> {
  // 记录上次执行的时间
  var last
  // 定时器
  var timer
  // 返回的函数，每过 threshhold 毫秒就执行一次 fn 函数
  return function (...args) {
    // 保存函数调用时的上下文和参数，传递给 fn
    var now = +new Date()
    // 如果距离上次执行 fn 函数的时间小于 threshhold，那么就放弃
    // 执行 fn，并重新计时
    if (last && now < last + threshhold) {
      clearTimeout(timer)
      // 保证在当前时间区间结束后，再执行一次 fn
      timer = setTimeout(function () {
        last = now
        fn.apply(this, args)
      }, threshhold)

      // 在时间区间的最开始和到达指定间隔的时候执行一次 fn
    } else {
      last = now
      fn.apply(this, args)
    }
  }
}
