let screen = document.querySelector("body");
let footer = document.querySelector("footer");
let listaPessoa = [];
let buttonforopen = document.createElement("button");
buttonforopen.textContent = "ABRIR";

buttonforopen.className = "buttonforopen";
screen.appendChild(buttonforopen);

function criarTabela() {
    let listagemDados = document.createElement("table");
    listagemDados.className = "listagemDados";
    screen.appendChild(listagemDados);
    let tabelahead = document.createElement("thead");
    tabelahead.className = "tabelahead";
    listagemDados.appendChild(tabelahead);
    tabelahead.innerText = "LISTAGEM DE CADASTROS";
    let tabelabody = document.createElement("tbody");
    tabelabody.className = "tabelabody";
    listagemDados.appendChild(tabelabody);
    let tabela = document.createElement("table");

    let linhaTitulos = document.createElement("tr");

    let titulo_1 = document.createElement("th");
    linhaTitulos.appendChild(titulo_1);
    let titulo_2 = document.createElement("th");
    linhaTitulos.appendChild(titulo_2);
    let titulo_3 = document.createElement("th");
    linhaTitulos.appendChild(titulo_3);

    tabela.appendChild(linhaTitulos);

    titulo_1.innerText = "Nome";
    titulo_2.innerText = "Sobrenome";
    titulo_3.innerText = "Data de Nascimento";

    listaInfo.forEach(function(e) {
        linha = tabela.appendChild(
            criarLinha(e.nome, e.sobreNome, e.dataNascimento)
        );
    });

    let tabelafooter = document.createElement("tfoot");
    tabelafooter.className = "tabelafooter";
    listagemDados.appendChild(tabelafooter);
    tabelafooter.innerText = "FINAL DA TABELA";
    return;
}
console.log(criarTabela);

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
        walkBox.style.animationName = "slideout";
        walkBox.style.animationDuration = "2s";
        setTimeout(function() {
            walkBox.remove();
            background.style.backgroundColor = "transparent";
        }, 2000);
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
            setTimeout(function() {
                mensagemVermelha.remove();
                walkBox.remove();
                background.style.backgroundColor = "transparent";
            }, 1000);
        } else if (!sobrenome || sobrenome == "") {
            let mensagemVermelha = document.createElement("div");
            mensagemVermelha.className = "mensagemVermelha";
            screen.appendChild(mensagemVermelha);
            mensagemVermelha.innerText =
                "Preencha todos os campos ou clique em cancelar para sair!";
            setTimeout(function() {
                mensagemVermelha.remove();
                walkBox.remove();
                background.style.backgroundColor = "transparent";
            }, 1000);
        } else if (!dataNasc || dataNasc == "") {
            let mensagemVermelha = document.createElement("div");
            mensagemVermelha.className = "mensagemVermelha";
            screen.appendChild(mensagemVermelha);
            mensagemVermelha.innerText =
                "Preencha todos os campos ou clique em cancelar para sair!";
            setTimeout(function() {
                mensagemVermelha.remove();
                walkBox.remove();
                background.style.backgroundColor = "transparent";
            }, 1000);
        } else {
            nome = document.querySelector(".inputNome");
            valorNome = nome.value;

            sobrenome = document.querySelector(".inputSobrenome");
            valorSobrenome = sobrenome.value;

            data = document.querySelector(".inputDatanasc");
            valorData = data.value;

            criarTabela();
            let mensagemVerde = document.createElement("div");
            mensagemVerde.className = "mensagemVerde";
            screen.appendChild(mensagemVerde);
            mensagemVerde.innerText = "Cadastro realizado!";
            walkBox.remove();
            background.style.backgroundColor = "transparent";
            setTimeout(function() {
                mensagemVerde.remove();
            }, 3000);

            let pessoa = {
                nome: valorNome,
                sobrenome: valorSobrenome,
                data: valorData,
            };
            listaPessoa.push(pessoa);
            listaPessoa.value;

            listaInfo.forEach(function(e) {
                linha = tabela.appendChild(criarLinha(e.nome, e.sobreNome, e.dataNascimento));
            });
        }
    };
};