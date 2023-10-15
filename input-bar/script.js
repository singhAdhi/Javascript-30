function fetchData() {
  console.log("data fetched");
}

function outer(func, d) {
  let timer;
  function inner() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, d);
  }
  return inner;
}

let one = outer(fetchData, 2000);
