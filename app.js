const form = document.querySelector(".form");
const input1 = document.querySelector(".input-1");
const list = document.querySelector(".list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let li = document.createElement("li");
  li.textContent = input1.value;
  input1.value = "";
  list.appendChild(li);
  let img = document.createElement("img");
  img.setAttribute("src", "./images/delete.svg");
  img.style = `width:16px; height:16px;`;
  li.appendChild(img);
  img.addEventListener("click", () => {
    li.remove();
  });
  li.addEventListener("dblclick", () => {
    if (li.style.backgroundColor == "bisque") {
      li.style.backgroundColor = "cornflowerblue";
      li.style.color = "red";
    } else {
      li.style.backgroundColor = "bisque";
      li.style.color = "darkgreen";
    }
  });
});
