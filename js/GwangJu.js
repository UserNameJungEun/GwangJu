// ----------[전체]----------//
var swiperVertical = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
});

// --------------------------[3p]---//
var swiperHorizontal = new Swiper(".mySwiper1", {
  slidesPerView: 2,
  spaceBetween: 10,
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
});

function showCalendar() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

  const startDateString = formatDate(firstDayOfMonth);
  const endDateString = formatDate(lastDayOfMonth);

  const dateRangeElement = document.getElementById("selectedDates");
  dateRangeElement.textContent = `${startDateString}~${endDateString}`;

  // Flatpickr 초기화
  flatpickr("#selectedDates", {
      mode: "range",
      dateFormat: "d.m.Y",
      locale: "ko",
  });
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${day}.${month}.${year}`;
}
document.getElementById("selectedDates").addEventListener("click", showCalendar);
