let count = 0;

const countArea = document.querySelector("h2");

countArea.innerHTML = count;

const handleClick = () => {
  count = count + 1;
  countArea.innerHTML = count;
  console.log(count);
};
