const usuarios = document.getElementById("listaUsuarios")

fetch("https://crudcrud.com/api/6cddd05f48e74aa79970103b8eb0a8f5/usuario")
.then(response => response.json())
.then((listaUsuarios) => {
    listaUsuarios.forEach(usuario => {
        const item = document.createElement("li")
        item.textContent = `${usuario.nome} - ${usuario.email} - ${usuario.tel}`

        const delBtn = document.createElement("button")
        delBtn.textContent = "X";
        delBtn.classList.add("delBtn")
        delBtn.addEventListener("click", () => {
            fetch(`https://crudcrud.com/api/6cddd05f48e74aa79970103b8eb0a8f5/usuario/${usuario._id}`, {
                method: "DELETE"
            })
            .then(() =>{
                item.remove()
            })
        })
        usuarios.appendChild(item)
        item.appendChild(delBtn)
    })
});

document.getElementById("add").addEventListener("click", () => {

    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const tel = document.getElementById("tel").value

    fetch("https://crudcrud.com/api/6cddd05f48e74aa79970103b8eb0a8f5/usuario", {
        method: "POST",

        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            tel: tel
        })
    })
    .then(response => response.json())
.then((listaUsuarios) => {
    listaUsuarios.forEach(usuario => {
        const item = document.createElement("li")
        item.textContent = `${usuario.nome} - ${usuario.email} - ${usuario.tel}`

        const delBtn = document.createElement("button")
        delBtn.textContent = "X";
        delBtn.classList.add = ("delBtn")
        delBtn.addEventListener("click", () => {
            fetch(`https://crudcrud.com/api/6cddd05f48e74aa79970103b8eb0a8f5/usuario/${usuario._id}`, {
                method: "DELETE"
            })
            .then(() =>{
                item.remove()
            })
        })
        usuarios.appendChild(item)
        item.appendChild(delBtn)
    })
});
})