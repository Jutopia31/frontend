// 1이상 55이하의 모든 3의 배수를 더해서 화면에 출력하는 코드를 반복문으로 구현
let sum = 0;
for (let i = 0; i <= 55; i++) {
    if (i % 3 == 0) {
        sum += i;
    }
}
console.log(sum);