let count = 0;
const gap = 4;

/*const cards = {
  card1: {
    image: "img-1",
    description:
      "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, facilis minima harum expedita tenetur",
  },
  card2: {
    image: "img-2",
    description:
      "2. Explicabo quisquam atque molestiae consequuntur voluptas! Dolorem, voluptatibus aperiam",
  },
  card2: {
    image: "img-3",
    description:
      "3. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, facilis minima harum expedita tenetur",
  },
  card4: {
    image: "img-4",
    description:
      "4. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, facilis minima harum expedita tenetur",
  },
  card5: {
    image: "img-5",
    description:
      "5. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, facilis minima harum expedita tenetur",
  },
  card6: {
    image: "img-6",
    description:
      "6. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, facilis minima harum expedita tenetur",
  },
};

const displayCards = function () {
  const listElement = document.getElementById("cards-list");
  console.log(listElement);
  const l1 = `<li class="card">
                <img src="./images/img-`;
  const l2 = `.png" alt="img1">
                <div class="card-body">
                  <p>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, facilis minima harum expedita
                        tenetur
                  </p>
                  <p>$34.99</p>
                </div>`;
  // for(let i=1;i<5;i++){

  // }
};
function swipeLeft() {
  count++;
  console.log(count);
  cardI = document.getElementById(`c${count}`);
  console.log(cardI);
  console.log(gap + count);
  cardII = document.getElementById(
    `c${(gap + count) % 6 !== 0 ? (gap + count) % 6 : 6}`
  );
  console.log(cardII);
  cardI.classList.toggle("hidden-card");
  cardII.classList.toggle("hidden-card");
  // cardII.style.order = 10;
  if (count === 6) count = 0;
}*/

function swipeRight() {
  // count = 1;
  /*cards = document.getElementsByClassName("card");
  for (card of cards) {
    console.log(card.id);
    display = window.getComputedStyle(card).display;

    if (display != "none") {
      card.style.display = "none";
    } else {
      card.style.display = "flex";
    }
  }*/
}

function swipeLeft() {
  count++;
  console.log(gap + count);
  const card1 = document.getElementById(`c${count}`);
  console.log(card1);
  const card2 = document.getElementById(
    `c${(gap + count) % 6 == 0 ? 6 : (gap + count) % 6}`
  );
  console.log(card2);

  card1.classList.add("hidden-card");
  card2.classList.remove("hidden-card");

  if (count == 6) count = 0;
}
