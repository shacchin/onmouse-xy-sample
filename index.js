const showParam = (id, x, y) => {
  const element = document.getElementById(`${id}`);
  element.innerText = `(${x}, ${y})`;
};

const handleClick = (e) => {
  showParam("offset-param", e.offsetX, e.offsetY);
  showParam("client-param", e.clientX, e.clientY);
  showParam("page-param", e.pageX, e.pageY);
  showParam("screen-param", e.screenX, e.screenY);
};

const clickableElement = document.getElementsByClassName("click-area")[0];
if (clickableElement) {
  console.log("ok!");
  clickableElement.addEventListener("click", handleClick, false);
  clickableElement.addEventListener("tourch", handleClick, false);
}
