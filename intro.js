var div = document.querySelector(".value");
var form = document.querySelector("form");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    var inputElement = form === null || form === void 0 ? void 0 : form.children[0];
    var input = inputElement.value.trim();
    if (input !== "") {
        if (div) {
            div.innerHTML = "";
            for (var i = 1; i <= 10; i++) {
                var value = "".concat(input, " x ").concat(i, " = ").concat(i * Number(input));
                div.innerHTML += "".concat(value, "<br>");
            }
        }
        inputElement.value = "";
    }
    else {
        alert("Please enter a number");
    }
});
