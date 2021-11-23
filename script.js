// const notOccupiedSeats = document.querySelectorAll('.row .seat:not(.occupied)');
// // console.log(notOccupiedSeats);
// const movieSelectBox = document.querySelector('#movie');
// const count = document.getElementById('count');
// const film = document.getElementById('film');
// const total = document.getElementById('total');
// const container = document.querySelector('.container');
// let price = movieSelectBox.options[movieSelectBox.selectedIndex].value;

// window.addEventListener('load', () => {
//   //get last selectedindexes, and last selected movie index and price
//   displayUI();
//   updateMovieInfo(price);
//   //set last selected movie index and price
//   // setMovieDataToStorage(movieSelectBox.selectedIndex, price);
// });
// const displayUI = () => {
//   const selectedSeatsFromStorage = JSON.parse(
//     localStorage.getItem('selectedSeats')
//   );
//   if (
//     selectedSeatsFromStorage !== null &&
//     selectedSeatsFromStorage.length > 0
//   ) {
//     notOccupiedSeats.forEach((seat, index) => {
//       if (selectedSeatsFromStorage.indexOf(index) > -1) {
//         seat.classList.add('selected');
//       }
//     });
//   }
//   // console.log(selectedSeatsFromStorage);
// };

// // movieSelectBox.onchange = () =>{}
// movieSelectBox.addEventListener('change', (e) => {
//   let price = e.target.value;
//   updateMovieInfo(price);
//   // console.log(e.target.value);
// });

// const updateMovieInfo = (filmPrice) => {
//   let selectedSeats = document.querySelectorAll('.row .seat.selected');
//   console.log(selectedSeats.length);
//   // console.log(selectedSeats);

//   // occupied olamayanlara göre selected seat lerin indexlerini tutan array
//   const seatsIndexArray = [...selectedSeats].map((seat) =>
//     [...notOccupiedSeats].indexOf(seat)
//   );
//   localStorage.setItem('selectedSeats', JSON.stringify(seatsIndexArray));

//   const selectedSeatCount = selectedSeats.length;
//   count.innerText = selectedSeatCount;
//   film.innerText =
//     movieSelectBox.options[movieSelectBox.selectedIndex].innerText.split(
//       '('
//     )[0];
//   // film.innerText = movieSelectBox[e.target.selectedIndex].innerText.split('(')[0];
//   total.innerText = selectedSeatCount * parseFloat(filmPrice);
// };

// container.addEventListener('click', (e) => {
//   // console.log(e.target);
//   if (
//     e.target.classList.contains('seat') &&
//     !e.target.classList.contains('occupied')
//   ) {
//     e.target.classList.toggle('selected');
//   }
//   let price = movieSelectBox.options[movieSelectBox.selectedIndex].value;
//   // console.log(price);
//   updateMovieInfo(price);
// });

/******************************************************************* */

const movieSelectBox = document.querySelector('#movie');
const container = document.querySelector('.container');
const notOccupiedSeats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const film = document.getElementById('film');
const total = document.getElementById('total');

window.addEventListener('load', () => {
  displayUI();
  updateMovieInfo();
});

const displayUI = () => {
  const selectedSeatsFromStorage = JSON.parse(
    localStorage.getItem('seatsIndexArray')
  );
  if (
    selectedSeatsFromStorage !== null &&
    selectedSeatsFromStorage.length > 0
  ) {
    notOccupiedSeats.forEach((seat, index) => {
      if (selectedSeatsFromStorage.indexOf(index) !== -1) {
        seat.classList.add('selected');
      }
    });
  }
};

movieSelectBox.addEventListener('change', (e) => {
  let price = e.target.value;
  updateMovieInfo(price);
});

const updateMovieInfo = () => {
  let selectedSeats = document.querySelectorAll('.row .seat.selected');
  console.log(selectedSeats.length);

  const seatsIndexArray = [...selectedSeats].map((item) =>
    [...notOccupiedSeats].indexOf(item)
  );
  localStorage.setItem('seatsIndexArray', JSON.stringify(seatsIndexArray));

  const selectedSeatCount = selectedSeats.length;
  count.innerText = selectedSeatCount;
  film.innerText =
    movieSelectBox.options[movieSelectBox.selectedIndex].innerText.split(
      '('
    )[0];
  total.innerText =
    selectedSeatCount *
    movieSelectBox.options[movieSelectBox.selectedIndex].value;
};

container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
  }
  updateMovieInfo();
});
