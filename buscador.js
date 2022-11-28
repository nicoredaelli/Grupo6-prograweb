document.addEventListener("keyup", e=> {
    if (e.target.matches("#buscador")){
        document.querySelectorAll(".carta1").forEach(cartas=>{
            cartas.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?cartas.classList.remove("filtro")
            :cartas.classList.add("filtro")
        } )
    }
    
}  )

