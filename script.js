const btnPaginas = document.getElementById("btnPaginas");
const btnProgramas = document.getElementById("btnProgramas");

const menuPaginas = document.getElementById("menuPaginas");
const menuProgramas = document.getElementById("menuProgramas");

btnPaginas.addEventListener("click", () => {
    menuPaginas.classList.toggle("oculto");
    menuProgramas.classList.add("oculto");
});

btnProgramas.addEventListener("click", () => {
    menuProgramas.classList.toggle("oculto");
    menuPaginas.classList.add("oculto");
});
