
// Heart Count in Header
function increaseHeartCount() {
    const heartInHeader = document.getElementById('header-heart-count');
    const headerHeartNumber = parseInt(heartInHeader.innerText);

    heartInHeader.innerText = headerHeartNumber + 1;
}

const hearts = document.getElementsByClassName('fa-heart');

for (const heart of hearts) {
    heart.classList.add('transition-all', 'duration-200'); // Ensure transitions are set
    heart.addEventListener('click', function () {
        if (heart.classList.contains('fa-regular')) {
            heart.classList.remove('fa-regular', 'text-[#5C5C5C]');
            heart.classList.add('fa-solid', 'text-red-500', 'scale-125');
            increaseHeartCount();
            setTimeout(() => {
                heart.classList.remove('scale-125');
            }, 200);
        } else {
            heart.classList.remove('fa-solid', 'text-red-500');
            heart.classList.add('fa-regular', 'text-[#5C5C5C]');
            const heartInHeader = document.getElementById('header-heart-count');
            const headerHeartNumber = parseInt(heartInHeader.innerText);
            heartInHeader.innerText = Math.max(0, headerHeartNumber - 1);
        }
    })
}

/* ================================================== */

// Coin in Header
function decreaseCoinCount(cardTitle, cardContact) {
    const coinInHeader = document.getElementById('header-coin-count');
    const headerCoinNumber = parseInt(coinInHeader.innerText);

    if (headerCoinNumber < 20) {
        alert('You do not have sufficient coins. You need to at least 20 coins to call.');
        return false;
    }
    else {
        coinInHeader.innerText = headerCoinNumber - 20;

        alert('Calling ' + cardTitle + ' ' + cardContact + '...');
        return true;
    }
}

// function getTime() {
//     const now = new Date();

//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     const dayName = days[now.getDay()];

//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let ampm = hours >= 12 ? "PM" : "AM";

//     hours = hours % 12 || 12;

//     const hh = hours.toString().padStart(2, "0");
//     const mm = minutes.toString().padStart(2, "0");

//     return `${dayName} ${hh}:${mm} ${ampm}`;
// }

function getTime() {
    const now = new Date();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[now.getDay()];
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    return `${hours}:${minutes}:${seconds} ${ampm}`;
}

const cards = document.getElementsByClassName('service-card');
const histories = document.getElementById('histories');

for (const card of cards) {
    const callButton = card.querySelector('.call-btn');

    if (callButton == null) {
        console.log('NULL');
    }
    else {
        callButton.addEventListener('click', function () {
            // Coin Counts and Alert
            const cardTitle = card.querySelector('.card-title').innerText.split('\n').join(' ');
            const cardContact = card.querySelector('.card-contact').innerText;

            if (!decreaseCoinCount(cardTitle, cardContact)) {
                return;
            }

            // Call History
            const historyContainer = document.createElement('div');

            const historyTime =  getTime();

            historyContainer.classList.add(
                "flex",
                "justify-between",
                "items-center",
                "px-4",
                "py-3.5",
                "bg-[#FAFAFA]",
                "border",
                "border-gray-100",
                "rounded-lg",
                "hover:bg-gray-50",
                "transition-colors",
                "duration-150",
                "gap-3"
            );

            historyContainer.innerHTML = `
                <div class="left min-w-0 flex-1">
                    <h4 class="history-title font-semibold text-sm sm:text-base md:text-[18px] text-gray-800 truncate mb-1" title="${cardTitle}">${cardTitle}</h4>
                    <p class="history-contact font-normal text-xs sm:text-sm md:text-[18px] text-[#5C5C5C]">${cardContact}</p>
                </div>
                <div class="history-time right font-normal text-xs sm:text-sm md:text-[18px] text-[#5C5C5C] whitespace-nowrap flex-shrink-0">${historyTime}</div>
            `

            histories.appendChild(historyContainer);
        })
    }
}

// Clear Button
document.getElementById('call-history-clear')
.addEventListener('click', () => {
    histories.innerHTML = '';
})

/* ================================================== */

// Copy in Header
function increaseCopyCount() {
    const copyInHeader = document.getElementById('header-copy-count');
    const headerCopyNumber = parseInt(copyInHeader.innerText);

    copyInHeader.innerText = headerCopyNumber + 1;
}

for (const card of cards) {
    const copyButton = card.querySelector('.copy-btn');

    if (copyButton == null) {
        console.log('NULL');
    }
    else {
        copyButton.addEventListener('click', function () {
            const cardContact = card.querySelector('.card-contact').innerText;

            navigator.clipboard.writeText(cardContact)
            .then (() => {
                alert('Number has been copied: ' + cardContact);

                increaseCopyCount();
            })
            .catch(err => {
                alert('Could not copy: ' + err);
            });
        });
    }
}

/* ================================================== */