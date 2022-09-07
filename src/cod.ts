let contraseña = document.getElementById("contraseña");
let btn = document.getElementById("btn");
let b = "eureka";

function contador() {
  let i = 1;
  let intentos = 2;
  while (i <= 3) {
    i++;
    console.log("contraseña incorrecta, te quedan", intentos--, "intentos");
    if (intentos === 3) {
    }
  }
  console.log("Lo sentimos, no pudimos verficar que la cuenta sea tuya.");
}

btn?.addEventListener("click", () => {
  if (contraseña.value === b) {
    console.log("Iniciando sesion");
  }

  if (contraseña.value !== "") {
    if (contraseña.value !== b) {
      contador();
    }
  }
  if (contraseña.value === "") {
    contador();
  }
});
