const box = document.querySelector(".box");
const modal = document.querySelector(".modal");
const open = document.querySelector(".open");
const form = document.querySelector(".form");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const btn = document.querySelector(".modal__btn");

// box.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (e.target.className === "open") {
//     getData();
//   }
// });

update.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.className === "update__btn") {
  }
});
const render = (data) => {
  box.innerHTML = data
    .map(
      (item) => `<div class="block">
    <h1>${item.title}</h1>
    <button class="delete__btn">delete</button>
    <button class="update__btn">edit</button>
    </div>`
    )
    .join("");
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.className === "modal__btn") {
    let obj = { title: input1.value, description: input2.value };
    input1.value = "";
    input2.value = "";
    createData(obj);
  }
});

const getData = async () => {
  try {
    const res = await fetch(" http://localhost:3000/todos");
    const data = await res.json();
    render(data);
  } catch (error) {
    alert(error.message);
  }
};

const createData = async (data) => {
  try {
    const res = await fetch(" http://localhost:3000/todos", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        ...data,
      }),
    });

    getData();
  } catch (error) {
    console.log(error.message);
  }
};

const updateData = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/todos/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ data }),
    });
    getData();
  } catch (error) {}
};

getData();
