const ctx = document.getElementById("ConsumptionChartCanvas").getContext("2d");

const colors = {
    yellow: {
        fill: '#ffe994',
        stroke: '#ffc500',
    },
    blue: {
        stroke: '#00daff',
        fill: '#a7efff'
    },

    white: {
        stroke: '#ffffff',
        fill: '#c9c9c9'
    },

    green: {
        stroke: '#7aff29',
        fill: '#b8ff9c'
    },
};

const solar = [0, 0, 0, 0, 0, 0, 2, 6, 18, 38, 29, 45, 56, 68, 94, 95, 92, 84, 62, 51, 20, 5, 2, 0];
const wind = [12, 2, 9, 5, 8, 4, 12, 12, 48, 19, 19, 18, 37, 39, 10, 43, 19, 10, 29, 20, 48, 58, 12, 28];
const hydro = [19, 38, 38, 19, 43, 18, 48, 10, 48, 10, 67, 18, 50, 8, 18, 50, 47, 12, 57, 17, 46, 19, 19, 35];
const xData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

const bebras = new Chart(ctx, {
    type: 'line',
    data: {
        labels: xData,
        datasets: [{
            label: "Solar",
            fill: true,
            backgroundColor: colors.yellow.fill,
            pointBackgroundColor: colors.yellow.stroke,
            borderColor: colors.yellow.stroke,
            pointHighlightStroke: colors.yellow.stroke,
            data: solar,
        },
        {
            label: "Wind",
            fill: true,
            backgroundColor: colors.white.fill,
            pointBackgroundColor: colors.white.stroke,
            borderColor: colors.white.stroke,
            pointHighlightStroke: colors.white.stroke,
            data: wind,
        },
        {
            label: "Hydro",
            fill: true,
            backgroundColor: colors.blue.fill,
            pointBackgroundColor: colors.blue.stroke,
            borderColor: colors.blue.stroke,
            pointHighlightStroke: colors.blue.stroke,
            data: hydro,
        }]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                stacked: true,
            }]
        },
        animation: {
            duration: 1000,
        },
    }
});

const ctx2 = document.getElementById("UsageChartCanvas").getContext("2d");

const bebras2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: xData,
        datasets: [{
            label: "Consumption",
            fill: true,
            backgroundColor: colors.green.fill,
            pointBackgroundColor: colors.green.stroke,
            borderColor: colors.green.stroke,
            pointHighlightStroke: colors.green.stroke,
            data: [438, 1839, 591, 480, 489, 480, 471, 580, 378, 384, 180, 4193, 1883, 1874, 3874, 4894, 820, 1734, 8741, 1843, 1903, 2874, 1874, 1017]
        }]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                stacked: true,
            }]
        },
        animation: {
            duration: 1000,
        },
    }
});