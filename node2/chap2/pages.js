// 학생 수 가 31, 한페이지에 10명 씩 출력
let studentCount = 31;
let pageSize = 10;
let pageCount = Math.ceil(studentCount / pageSize);

console.log(pageCount);