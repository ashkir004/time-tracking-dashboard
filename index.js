
let activities = document.querySelector('.activities');
let timeframeOptions = document.querySelectorAll('.timeframe');

let activeTimeframe = 'weekly';

let data = '';


fetch('/data.json').then((response) => {
    if (!response.ok) return alert("No data");

    return response.json();
}).then((json) => {
    data = json;
    updateUI(data);
});


function updateUI(data, selectedTimeframe = 'weekly') {

    timeframeOptions.forEach((option) => {
        if (option.dataset.timeframe === activeTimeframe) {
            option.dataset.active = true;
        } else {
            option.dataset.active = false;
        }
    });

    activities.innerHTML = '';

    for (const item of data) {
        appendItem(item, selectedTimeframe);
    }
}

function appendItem(item, selectedTimeframe = 'weekly') {
    let title = item.title.toLowerCase().replace(' ', '-');
    let timeframe = item.timeframes[selectedTimeframe];

    activities.innerHTML += `<div class="activity-card ${title}">
        <div class="activity">
          <div class="activity-header">
            <h2 class="activity-title">${item.title}</h2>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>
          </div>
          <div class="activity-stat">
            <p class="current-time">${timeframe.current}hrs</p>
            <p class="previous-time metadata">Previous - ${timeframe.previous} hrs</p>
          </div>
        </div>
      </div>`;
}

timeframeOptions.forEach((option) => {

    option.addEventListener('click', (e) => {
        el = e.target;
        updateSelectedTimeframe(el.dataset.timeframe);
    })
})

function updateSelectedTimeframe(timeframe) {
    activeTimeframe = timeframe;
    updateUI(data, timeframe);
}