const onButton = document.querySelector("#btn") as HTMLButtonElement;

onButton.addEventListener("click", (e: Event) => {
  e.preventDefault();
  const num1 = parseFloat(
    (document.querySelector("#inputOne") as HTMLInputElement).value
  );
  const num2 = parseFloat(
    (document.querySelector("#inputTwo") as HTMLInputElement).value
  );
  const method = (document.querySelector("#method") as HTMLSelectElement).value;
  const output = document.querySelector("#output") as HTMLParagraphElement;
  output.innerHTML = !isNaN(calc(num1, num2, method))
    ? `Output: ${calc(num1, num2, method)}`
    : "Output: Please input numbers";
});

function calc(num1: number, num2: number, method: string): number {
  let output: number;
  if (method === "*") {
    output = num1 * num2;
  } else if (method === "/") {
    output = num1 / num2;
  } else if (method === "+") {
    output = num1 + num2;
  } else if (method === "-") {
    output = num1 - num2;
  }
  return output;
}
