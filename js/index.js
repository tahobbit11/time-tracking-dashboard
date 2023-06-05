const dailyButton = document.getElementById("daily");
const weeklyButton = document.getElementById("weekly");
const monthlyButton = document.getElementById("monthly");

const currentData = document.querySelectorAll(".data");
const previousData = document.querySelectorAll(".previous-data");



import data from './data.json' assert { type: 'json'};

const dailyData = () => {
    data.forEach((e,i) => { //e is element. i is index position
        currentData[i].innerHTML = e.timeframes.daily.current + ' ';
        previousData[i].innerHTML = 'Yesterday - ' + e.timeframes.daily.previous + ' hrs';
    });
    dailyButton.style.color = "white" // This could be changed into a toggleable setting instead
    weeklyButton.style.color = "hsl(235, 45%, 61%)"
    monthlyButton.style.color = "hsl(235, 45%, 61%)"
}

const weeklyData = () => {
    data.forEach((e,i) => { //e is element. i is index position
        currentData[i].innerHTML = e.timeframes.weekly.current + ' ';
        previousData[i].innerHTML = 'Last Week - ' + e.timeframes.weekly.previous + ' hrs';
    });
    dailyButton.style.color = "hsl(235, 45%, 61%)"
    weeklyButton.style.color = "white"
    monthlyButton.style.color = "hsl(235, 45%, 61%)"
}

const monthlyData = () => {
    data.forEach((e,i) => { //e is element. i is index position
        currentData[i].innerHTML = e.timeframes.monthly.current + ' ';
        previousData[i].innerHTML = 'Last Month - ' + e.timeframes.monthly.previous + ' hrs';
    });
    dailyButton.style.color = "hsl(235, 45%, 61%)"
    weeklyButton.style.color = "hsl(235, 45%, 61%)"
    monthlyButton.style.color = "white"
}

dailyButton.addEventListener("click", dailyData)

weeklyButton.addEventListener("click", weeklyData)

monthlyButton.addEventListener("click", monthlyData)