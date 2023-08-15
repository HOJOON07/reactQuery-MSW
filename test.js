var a = 1; // 전역 컨텍스트
function outer() {
  // outer 컨텍스트
  function inner() {
    // inner 컨텍스트
    console.log("이너위에", a); // undefined
    var a = 3;
    console.log("이너밑에", a); // 3
  }
  inner();
  console.log("아우터", a); // 1
}
outer();
console.log("맨바깥", a); // 1
