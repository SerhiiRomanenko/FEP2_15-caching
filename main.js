// Вам потрібно написати функцію, яка як параметр приймає функцію і додає їй можливість кешувати дзвінки.
// Ідея полягає в тому, що при виклику функції з однаковими аргументами немає сенсу викликати функцію щоразу,
// достатньо зберігати дані про результати виклику.
//
// Зберігати потрібно останні 10 дзвінків.

function callback(phone) {
  return `tel: ${phone}`; // random для удобства тестирования
}

function cachePhone(funk) {
  let cache = {
    "+380-00-579-74-23": "tel: +380-00-579-74-23",
  };

  return function (phone) {
    // console.log(Object.keys(cache));
    console.log(cache);
    if (Object.keys(cache).length === 10) {
      delete cache[Object.keys(cache)[0]];
    }
    if (!(phone in cache)) {
      cache[phone] = funk.call(this, phone);
    }
    return cache[phone];
  };
}

let caching = cachePhone(callback);

let a = caching("+380-00-579-74-23");
let aa = caching("+380-00-579-74-23");
let aaa = caching("+380-00-579-74-23");
let c = caching("+380-22-579-74-23");
let d = caching("+380-33-579-74-23");
let e = caching("+380-44-579-74-23");
let g = caching("+380-55-333-74-23");

// let h = caching("+380-66-579-23-23");
// let i = caching("+380-77-579-74-00");
// let k = caching("+380-88-235-96-12");
// let l = caching("+380-99-579-74-23");
// let m = caching("+380-10-333-74-23");
// let t = caching("+380-11-579-23-23");
// let w = caching("+380-12-579-74-00");
// let q = caching("+380-13-235-96-12");
