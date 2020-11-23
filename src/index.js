const onButton = document.querySelector("#btn");
onButton.addEventListener("click", (e) => {
    e.preventDefault();
    const num1 = parseFloat(document.querySelector("#inputOne").value);
    const num2 = parseFloat(document.querySelector("#inputTwo").value);
    const method = document.querySelector("#method").value;
    const output = document.querySelector("#output");
    output.innerHTML = !isNaN(calc(num1, num2, method))
        ? `Output: ${calc(num1, num2, method)}`
        : "Output: Please input numbers";
});
function calc(num1, num2, method) {
    let output;
    if (method === "*") {
        output = num1 * num2;
    }
    else if (method === "/") {
        output = num1 / num2;
    }
    else if (method === "+") {
        output = num1 + num2;
    }
    else if (method === "-") {
        output = num1 - num2;
    }
    return output;
}
