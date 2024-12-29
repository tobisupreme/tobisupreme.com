const taglines = [
  "Software Engineer",
  "Problem Solver",
  "Learner",
  "Value Provider",
  "Sponsor Daddy",
  "Big Brother",
  "Occasional Bad Boy",
];

const tagline = document.getElementById("tagline");
let previousIndex = -1;

setInterval(() => {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * taglines.length);
  } while (randomIndex === previousIndex);

  setTimeout(() => {
    previousIndex = randomIndex;
    tagline.innerHTML = taglines[randomIndex];
  }, 500);
}, 7000);
