function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function spin() {
  // Play the sound
  wheel.play();
  // Inisialisasi variabel
  const box = document.getElementById("box");
  const element = document.getElementById("mainbox");
  const spin_button = document.getElementById("spin");
  let SelectedItem = "";

  // Shuffle 450 karena class box1 sudah ditambah 90 derajat diawal. minus 40 per item agar posisi panah pas ditengah.
  // Setiap item memiliki 12.5% kemenangan kecuali item helicopter yang hanya memiliki sekitar 4% peluang untuk menang.
  // Item berupa ipad dan samsung tab tidak akan pernah menang.
  // let helicopter = shuffle([2210]); //Kemungkinan : 33% atau 1/3
  let ain_dubai = shuffle([1890, 2250, 2610]);
  let helicopter = shuffle([1850, 2210, 2570]); //Kemungkinan : 100%
  let dubai_cruise = shuffle([1810, 2170, 2530]);
  let la_perle = shuffle([1770, 2130, 2490]);
  let wild_wadi = shuffle([1750, 2110, 2470]);
  let air_ballon = shuffle([1630, 1990, 2350]);
  let free_expo = shuffle([1570, 1930, 2290]);

  // Bentuk acak
  let Hasil = shuffle([
    ain_dubai[0],
    helicopter[0],
    dubai_cruise[0],
    la_perle[0],
    wild_wadi[0],
    air_ballon[0],
    free_expo[0],
  ]);
  // console.log(Hasil[0]);

  // Ambil value item yang terpilih
  if (ain_dubai.includes(Hasil[0])) SelectedItem = "10% Off Ain Dubai";
  if (helicopter.includes(Hasil[0])) SelectedItem = "20% Off Helicopter Tour";
  if (dubai_cruise.includes(Hasil[0])) SelectedItem = "10% Off Dubai Criuse";
  if (la_perle.includes(Hasil[0])) SelectedItem = "10% off La Perle";
  if (wild_wadi.includes(Hasil[0])) SelectedItem = "10% Off Wild Wadi";
  if (air_ballon.includes(Hasil[0])) SelectedItem = "10% Hot Air Balloon";
  if (free_expo.includes(Hasil[0])) SelectedItem = "Free Expo Ticket";

  // Proses
  box.style.setProperty("transition", "all ease 5s");
  box.style.transform = "rotate(" + Hasil[0] + "deg)";
  element.classList.remove("animate");
  setTimeout(function () {
    element.classList.add("animate");
  }, 5000);

  // Munculkan Alert
  setTimeout(function () {
    applause.play();
    swal(
      "Congratulations",
      "You Won The " + SelectedItem + ".",
      "success"
    );
  }, 5500);

  // Delay and set to normal state
  setTimeout(function () {
    box.style.setProperty("transition", "initial");
    box.style.transform = "rotate(90deg)";
  }, 6000);
  setTimeout(function () {
    spin_button.setAttribute("disabled", true);
  }, 6000);
}
$(document).ready(function(){
  var disbledBtn = localStorage.getItem('disabled'); // get the id from localStorage
  $(disbledBtn).attr("disabled", true); // set the attribute by the id

  $('.spin').click(function () {
    $(".spin").attr("disabled", true);
    localStorage.setItem('disabled', '.spin'); // store the id in localStorage
  });
})