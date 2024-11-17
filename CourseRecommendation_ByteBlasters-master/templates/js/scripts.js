document.addEventListener("DOMContentLoaded", function() {
    // Add your Chart.js initialization code here
    var valuecounts = JSON.parse(document.getElementById('valuecounts').textContent);
    var levelcounts = JSON.parse(document.getElementById('levelcounts').textContent);
    var subjectsperlevel = JSON.parse(document.getElementById('subjectsperlevel').textContent);
    var subscriberscountmap = JSON.parse(document.getElementById('subscriberscountmap').textContent);
    var yearwiseprofitmap = JSON.parse(document.getElementById('yearwiseprofitmap').textContent);
    var profitmonthwisemap = JSON.parse(document.getElementById('profitmonthwisemap').textContent);
    var monthwisesubmap = JSON.parse(document.getElementById('monthwisesubmap').textContent);

    var domainname = [], countdomain = [];
    var levelname = [], levelcount = [];
    var levelname2 = [], levelcount2 = [];
    var years = [], profitcount = [], subscriberscount = [];
    var months = [], profitmonthwise = [], subscriberscountmonth = [];

    for (const item in valuecounts) {
        domainname.push(item);
        countdomain.push(valuecounts[item]);
    }

    for (const item in levelcounts) {
        levelname.push(item);
        levelcount.push(levelcounts[item]);
    }

    for (const item in subjectsperlevel) {
        levelname2.push(item);
        levelcount2.push(subjectsperlevel[item]);
    }

    for (const item in yearwiseprofitmap) {
        years.push(item);
        profitcount.push(yearwiseprofitmap[item]);
    }

    for (const item in subscriberscountmap) {
        subscriberscount.push(subscriberscountmap[item]);
    }

    for (const item in profitmonthwisemap) {
        months.push(item);
        profitmonthwise.push(profitmonthwisemap[item]);
    }

    for (const item in monthwisesubmap) {
        subscriberscountmonth.push(monthwisesubmap[item]);
    }

    var ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: domainname,
            datasets: [{
                data: countdomain,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(75, 192, 192)',
                    'rgb(255, 205, 86)',
                    'rgb(201, 203, 207)',
                    'rgb(54, 162, 235)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)',
                    'rgba(250, 157, 60)'
                ],
                hoverOffset: 4
            }]
        }
    });

    var ctx2 = document.getElementById('chart2').getContext('2d');
    new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: levelname,
            datasets: [{
                data: levelcount,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(75, 192, 192)',
                    'rgb(255, 205, 86)',
                    'rgb(201, 203, 207)',
                    'rgb(54, 162, 235)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)',
                    'rgba(250, 157, 60)'
                ],
                hoverOffset: 4
            }]
        }
    });

    var ctx3 = document.getElementById('chart3').getContext('2d');
    new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: years,
            datasets: [{
                label: "Number of Subscribers",
                data: subscriberscount,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(250, 157, 60, 0.1)',
                    'rgba(250, 157, 62, 0.6)',
                    'rgba(250, 157, 50, 0.4)',
                    'rgba(250, 157, 40, 0.5)',
                    'rgba(250, 157, 10, 0.2)',
                    'rgba(250, 157, 30, 0.3)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(250, 157, 60, 0.1)'
                ],
                borderWidth: 2.5
            }]
        }
    });

    var ctx4 = document.getElementById('chart4').getContext('2d');
    new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: years,
            datasets: [{
                label: "Profit Earned Year Wise",
                data: profitcount,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(250, 157, 60, 0.1)',
                    'rgba(250, 157, 62, 0.6)',
                    'rgba(250, 157, 50, 0.4)',
                    'rgba(250, 157, 40, 0.5)',
                    'rgba(250, 157, 10, 0.2)',
                    'rgba(250, 157, 30, 0.3)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(250, 157, 60, 0.1)'
                ],
                borderWidth: 2.5
            }]
        }
    });

    var ctx5 = document.getElementById('chart5').getContext('2d');
    new Chart(ctx5, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [{
                label: "Profit Earned Month Wise",
                data: profitmonthwise,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(250, 157, 60, 0.1)',
                    'rgba(250, 157, 62, 0.6)',
                    'rgba(250, 157, 50, 0.4)',
                    'rgba(250, 157, 40, 0.5)',
                    'rgba(250, 157, 10, 0.2)',
                    'rgba(250, 157, 30, 0.3)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(250, 157, 60, 0.1)'
                ],
                borderWidth: 2.5
            }]
        }
    });
    
    var ctx6 = document.getElementById('chart6').getContext('2d');
    new Chart(ctx6, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [{
                label: "Subscriber count Month Wise",
                data: subscriberscountmonth,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(250, 157, 60, 0.1)',
                    'rgba(250, 157, 62, 0.6)',
                    'rgba(250, 157, 50, 0.4)',
                    'rgba(250, 157, 40, 0.5)',
                    'rgba(250, 157, 10, 0.2)',
                    'rgba(250, 157, 30, 0.3)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(250, 157, 60, 0.1)'
                ],
                borderWidth: 2.5
            }]
        }
    });
    
    var ctx7 = document.getElementById('chart7').getContext('2d');
    new Chart(ctx7, {
        type: 'line',
        data: {
            labels: levelname2,
            datasets: [{
                label: "Number of Subscribers enrolled per subject category",
                data: levelcount2,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(250, 157, 60, 0.1)',
                    'rgba(250, 157, 62, 0.6)',
                    'rgba(250, 157, 50, 0.4)',
                    'rgba(250, 157, 40, 0.5)',
                    'rgba(250, 157, 10, 0.2)',
                    'rgba(250, 157, 30, 0.3)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(250, 157, 60, 0.1)'
                ],
                borderWidth: 2.5
            }]
        }
    });
});