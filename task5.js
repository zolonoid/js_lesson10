// Hеобходимо объединить массивы en и ru,
// чтобы значения первого массива были ключами, а значения второго массива — значениями.

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

weekDays = {};
for (let i = 0; i < 7; i++) {
    weekDays[en[i]] = ru[i];
}
console.log(weekDays);
