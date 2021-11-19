let screen = document.querySelector("body");
let footer = document.querySelector("footer");

let buttonforopen = document.createElement("button");
buttonforopen.textContent = "ABRIR";

buttonforopen.className = "buttonforopen";

screen.appendChild(buttonforopen);

buttonforopen.onclick = function() {
    let walkBox = document.createElement("div");
    walkBox.className = "walkBox";
    screen.appendChild(walkBox);

    let background = document.querySelector("body");
    background.style.backgroundColor = "rgba(0, 0, 0, 0.555)";

    let inputs = document.createElement("div");
    inputs.className = "inputs";
    walkBox.appendChild(inputs);

    let nome = document.createElement("div");
    nome.className = "nomecamp";
    inputs.appendChild(nome);

    let titleInputs = document.createElement("h1");
    titleInputs.className = "titleInputs";
    inputs.appendChild(titleInputs);
    titleInputs.innerText = "Faça seu cadastro! ";

    let inputNome = document.createElement("input");
    inputNome.className = "inputNome";
    nome.appendChild(inputNome);
    inputNome.placeholder = "Nome";

    let inputSobrenome = document.createElement("input");
    inputSobrenome.className = "inputSobrenome";
    nome.appendChild(inputSobrenome);
    inputSobrenome.placeholder = "Sobrenome";

    let inputDatanasc = document.createElement("input");
    inputDatanasc.type = "date";
    inputDatanasc.className = "inputDatanasc";
    nome.appendChild(inputDatanasc);
    inputDatanasc.placeholder = "Data de nascimento";

    let buttonCadastrar = document.createElement("button");
    buttonCadastrar.className = "buttonCadastrar";
    walkBox.appendChild(buttonCadastrar);
    buttonCadastrar.textContent = "Cadastrar";

    let buttonCancelar = document.createElement("button");
    buttonCancelar.className = "buttonCancelar";
    walkBox.appendChild(buttonCancelar);
    buttonCancelar.textContent = "Cancelar";

    buttonCancelar.onclick = function() {
        walkBox.remove();
        background.style.backgroundColor = "transparent";
    };

    buttonCadastrar.onclick = function() {
        let nome = document.querySelector("inputNome");
        nome = inputNome.value;
        let sobrenome = document.querySelector("inputSobrenome");
        sobrenome = inputSobrenome.value;
        let dataNasc = document.querySelector("inputDatanasc");
        dataNasc = inputDatanasc.value;

        if (!nome || nome == "") {
            let mensagemVermelha = document.createElement("div");
            mensagemVermelha.className = "mensagemVermelha";
            screen.appendChild(mensagemVermelha);
            mensagemVermelha.innerText =
                "Preencha todos os campos ou clique em cancelar para sair!";
        } else if (!sobrenome || sobrenome == "") {
            let mensagemVermelha = document.createElement("div");
            mensagemVermelha.className = "mensagemVermelha";
            screen.appendChild(mensagemVermelha);
            mensagemVermelha.innerText =
                "Preencha todos os campos ou clique em cancelar para sair!";
        } else if (!dataNasc || dataNasc == "") {
            let mensagemVermelha = document.createElement("div");
            mensagemVermelha.className = "mensagemVermelha";
            screen.appendChild(mensagemVermelha);
            mensagemVermelha.innerText =
                "Preencha todos os campos ou clique em cancelar para sair!";
        } else {
            let listagemDados = document.createElement("div");
            listagemDados.className = "listagemDados";
            screen.appendChild(listagemDados);
            let mensagemVerde = document.createElement("div");
            mensagemVerde.className = "mensagemVerde";
            screen.appendChild(mensagemVerde);
            mensagemVerde.innerText = "Cadastro realizado!";
            setTimeout(function() {
                mensagemVerde.remove();
                walkBox.remove();
                background.style.backgroundColor = "transparent";
            }, 3000);

            cadastroPessoa = function() {
                nome = document.querySelector(".inputNome");
                valorNome = nome.value;

                sobrenome = document.querySelector(".inputSobrenome");
                valorSobrenome = sobrenome.value;

                data = document.querySelector(".inputDatanasc");
                valorData = data.value;
                let pessoa = {
                    nome: valorNome,
                    sobrenome: valorSobrenome,
                    data: valorData,
                };
                listaPessoa = [pessoa];
            };
        }
    };
};