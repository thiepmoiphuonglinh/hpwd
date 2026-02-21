import {data} from "../assets/data/data.js";
import {monthNameToNumber} from "../utils/helper.js";

export const home = () => {
    const homeContainer = document.querySelector('.home');
    const [_, figureElement, timeElement, homeTime, calendarAnchor] = homeContainer.children;

    const generateFigureContent = ({bride}) => {
        const {L: {name: brideLName}, P: {name: bridePName}, couple: coupleImage} = bride;
        return `
            <img src="${coupleImage}" alt="couple animation">
        <figcaption class="couple-name">
               <span class="groom_tl">${brideLName}</span>
               <span class="and">&</span>
               <span class="bride_tp">${bridePName}</span>
           </figcaption>`;
    };

    const updateCountdown = (endTime, homeTime) => {
        const now = new Date().getTime();
        const distance = endTime - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
            clearInterval(intervalId);
        }
    };

    const startCountdown = (homeTime, timeData) => {
        const {year, month, date} = timeData.marriage;
        const endTime = new Date(2026, 2, 7, 8, 0, 0).getTime();

        updateCountdown(endTime, homeTime);
        setInterval(() => updateCountdown(endTime, homeTime), 1000);
    };

    const initializeHome = () => {
        const {bride, time, link} = data;
        figureElement.innerHTML = generateFigureContent({bride});
        startCountdown(homeTime, time);
    };

    const WEDDING_DATE = {
        year: 2026,
        month: 2,
        day: 7
    };

    const createCalendar = () => {
        const { year, month } = WEDDING_DATE;

        const firstDay = new Date(year, month, 1).getDay(); // 0 = CN
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const weekDays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

        // Chuyển CN về cuối (chuẩn lịch VN)
        const startOffset = firstDay === 0 ? 6 : firstDay - 1;

        let daysHTML = '';

        // Ô trống đầu tháng
        for (let i = 0; i < startOffset; i++) {
            daysHTML += `<span class="empty"></span>`;
        }

        for (let i = 1; i <= daysInMonth; i++) {
           let content = i;
           let className = '';

           if (i === 7) {
               className = 'wedding-day bride-day';
               content = `👰<br>${i}`;
           }
       
           if (i === 8) {
               className = 'wedding-day groom-day';
               content = `🤵<br>${i}`;
           }
       
           daysHTML += `
               <span class="${className}">
                   ${content}
               </span>
           `;
        }

        return `
            <div class="calendar-box">
                <h3>Tháng 3 · ${year}</h3>

                <div class="calendar-weekdays">
                    ${weekDays.map(d => `<span>${d}</span>`).join('')}
                </div>

                <div class="calendar-days">
                    ${daysHTML}
                </div>

                <p class="calendar-note">
                    👰 7/3: Nhà gái · 🤵 8/3: Nhà trai
                </p>
                
                <button class="close-calendar">Đóng</button>
            </div>
        `;
    };
    initializeHome();
    createCalendar();
    const openCalendarBtn = document.querySelector('.open-calendar');

    const calendarModal = document.createElement('div');
    calendarModal.className = 'calendar-modal';

    calendarModal.innerHTML = createCalendar();
    document.body.appendChild(calendarModal);

    // mở lịch
    openCalendarBtn.addEventListener('click', () => {
        calendarModal.classList.add('active');
    });

    // đóng lịch
    calendarModal.addEventListener('click', (e) => {
        if (
            e.target === calendarModal ||
            e.target.classList.contains('close-calendar')
        ) {
            calendarModal.classList.remove('active');
        }
    });
};
