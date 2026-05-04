
document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.vehicle-showcase').forEach((container) => {

    let vehicleData = [];

    // 🔹 INDIVIDUAL
    if (container.classList.contains('vehicle-showcase--individual')) {
      vehicleData = [
        {
          title: "Executive Sedan",
          passengers: "Up to 2 passengers",
          bags: "Up to 2 bags",
          description: "The standard for individual executive travel. The executive sedan provides a quiet, private ride suited for airport transfers, point-to-point business trips, and any itinerary where efficiency and professionalism are the priority. Executives and VIPs can work in transit, take confidential calls, and arrive composed, without the regular friction of travel.",
          bestFor: "EXECUTIVE ARRIVALS | AIRPORT TRANSFERS",
          cta: "Book Executive Sedan"
        },
        {
          title: "Premium Sedan",
          passengers: "Up to 2 passengers",
          bags: "Up to 2 bags",
          description: "An elevated cabin experience for senior executives and VIP travel. The premium sedan delivers higher-grade models and a refined interior for those occasions where the standard vehicle class isn't the right choice. Ideal for board-level travel, high-profile trips, and moments where every detail is expected to reflect the highest standards.",
          bestFor: "VIP TRAVEL | CLIENT TRANSPORT",
          cta: "Book Premium Sedan"
        }
      ];
    }

    // 🔹 GROUPS
    if (container.classList.contains('vehicle-showcase--groups')) {
      vehicleData = [
        {
          title: "Executive SUV",
          passengers: "Up to 5 passengers",
          bags: "Up to 6 bags",
          description: "Ideal for small group travel, the executive SUV offers additional space and flexibility for coordinated movements, airport transfers, and multi-stop itineraries. It allows teams to stay together without sacrificing comfort or timing, making it a practical solution for executives traveling in pairs or small groups.",
          bestFor: "SMALL GROUP TRAVEL | FLEXIBLE SCHEDULING",
          cta: "Book Executive SUV"
        },
        {
          title: "Luxury Sprinter Van",
          passengers: "Up to 14 passengers",
          bags: "Up to 20 bags",
          description: "Designed for team transportation, the luxury sprinter van supports efficient group movement for events, airport transfers, and scheduled routes with added comfort. It simplifies coordination by consolidating passengers into a single vehicle while maintaining a premium experience, making it ideal for corporate teams and organized travel groups.",
          bestFor: "GROUP TRANSPORT | EVENT SHUTTLES",
          cta: "Book Sprinter Van"
        }
      ];
    }

    // 🔹 EVENTS
    if (container.classList.contains('vehicle-showcase--events')) {
      vehicleData = [
        {
          title: "Mini Bus",
          passengers: "Up to 40 passengers",
          bags: "Up to 28 bags",
          description: "When the head count outgrows a Sprinter, the mini bus is the right step-up in size. Comfortable seating for larger groups, it supports coordinated transportation across multiple stops while maintaining reliability and timing. Ideal for conference shuttle operations, multi-venue event logistics, and group itineraries that require structured, on-schedule movement.",
          bestFor: "CONFERENCE SHUTTLE | CORPORATE TRANSFERS",
          cta: "Book Mini Bus"
        },
        {
          title: "Coach Bus",
          passengers: "Up to 50 passengers",
          bags: "Large Cargo Hold",
          description: "Full-group transportation without compromise. The coach bus handles large-scale corporate events, conference transportation, and any occasion where the entire team moves together. By consolidating movement into a single vehicle, it removes the complexity of coordinating multiple departures while maintaining a consistent, high-quality travel experience.",
          bestFor: "LARGE CONFERENCES | MULTI-DAY EVENTS",
          cta: "Book Coach Bus"
        }
      ];
    }

    // 🔹 INIT SWIPER
    const swiperEl = container.querySelector('.swiper-autos');
    if (!swiperEl) return;

    const swiper = new Swiper(swiperEl, {
      slidesPerView: 'auto',
      spaceBetween: 8,
      autoHeight: true,
      grabCursor: true,
      loop: true,

      navigation: {
        prevEl: container.querySelector('.swiper-autos-button-prev'),
        nextEl: container.querySelector('.swiper-autos-button-next'),
      }
    });

    // 🔹 THUMBS
    const items = container.querySelectorAll('.vehicle-selector__item');

    items.forEach((item, index) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        swiper.slideToLoop(index);
      });
    });

    // 🔹 UPDATE CONTENT
    function updateContent(index) {
      const data = vehicleData[index];
      if (!data) return;

      container.querySelector('.vehicle-title').textContent = data.title;
      container.querySelector('.vehicle-meta-passengers').textContent = data.passengers;
      container.querySelector('.vehicle-meta-bags').textContent = data.bags;
      container.querySelector('.vehicle-description').textContent = data.description;
      container.querySelector('.vehicle-best-for').textContent = data.bestFor;
      container.querySelector('.vehicle-cta .btn-txt').textContent = data.cta;
    }

    function updateUI() {
      const realIndex = swiper.realIndex;

      items.forEach(item => item.classList.remove('is-active'));

      if (items[realIndex]) {
        items[realIndex].classList.add('is-active');
      }

      updateContent(realIndex);
    }

    swiper.on('slideChange', updateUI);

    updateUI();

  });

});
