const clientsEstimations = [];
const askClientToGiveEstimation = () => {
    const rating = prompt("Как вы оцениваете нашу кофейню от 1 до 10?")
    if (isNaN(Number(rating)) || rating < 0 || rating > 10)
        return;
    clientsEstimations.push(rating);
}

for (let i = 0; i < 5; i++)
    askClientToGiveEstimation();

const goodEstimations = clientsEstimations.filter(i => i > 5).length;
const notGoodEstimations = clientsEstimations.filter(i => i <= 5).length;

alert(`Всего положительных оценок: ${goodEstimations};
Всего отрицательных оценок: ${notGoodEstimations}`);

