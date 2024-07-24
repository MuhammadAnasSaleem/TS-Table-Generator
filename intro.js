"use strict";
const div = document.querySelector(".value");
const form = document.querySelector("form");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputElement = form === null || form === void 0 ? void 0 : form.children[0];
    const input = inputElement.value;
    if (input !== "" && Number(input) > 0) {
        if (div) {
            div.innerHTML = "";
            for (let i = 1; i <= 10; i++) {
                const value = `${input} x ${i} = ${i * Number(input)}`;
                div.innerHTML += `${value}<br>`;
            }
        }
        inputElement.value = "";
    }
    else {
        alert("Please enter a valid number");
    }
});
