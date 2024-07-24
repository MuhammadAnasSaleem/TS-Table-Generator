const div = document.querySelector<HTMLDivElement>(".value");
const form = document.querySelector<HTMLFormElement>("form");

form?.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const inputElement = form?.children[0] as HTMLInputElement;
  const input = inputElement.value!;

  if (input !== "" && Number(input) > 0) {
    if (div) {
      div.innerHTML = "";
      for (let i = 1; i <= 10; i++) {
        const value = `${input} x ${i} = ${i * Number(input)}`;
        div.innerHTML += `${value}<br>`;
      }
    }

    inputElement.value = "";
  } else {
    alert("Please enter a valid number");
  }
});
