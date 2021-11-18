
let screen = document.querySelector('body');

//Criação e estilização do botão para abrir o modal

let buttonforopen = document.createElement('button');
buttonforopen.textContent = 'ABRIR';

buttonforopen.className = 'buttonforopen';

screen.appendChild(buttonforopen);

//Fazendo o botão ter a função de abrir o modal com transicão
buttonforopen.onclick = function () {

    //Criação e estilização do quadrado do modal
    let walkBox = document.createElement('div');
    walkBox.className = 'walkBox';
    screen.appendChild(walkBox);
    document.querySelector('html').clientHeight
    document.querySelector('html').clientWidth

    //Criando uma variável para selecionar a tela e dar um background mais escuro
    let background = document.querySelector('body');
    buttonforopen.style.top = '-33.6vh';
    buttonforopen.style.zIndex = '-1';
    background.style.backgroundColor = 'rgba(0, 0, 0, 0.555)';

    //Criando as divs para dentro do modal 
    let inputs = document.createElement('div')
    inputs.className = 'inputs';
    walkBox.appendChild(inputs);

    let nome = document.createElement('div');
    nome.className = 'nomecamp';
    inputs.appendChild(nome);

    let titleInputs = document.createElement('h1')
    titleInputs.className = 'titleInputs';
    inputs.appendChild(titleInputs);
    titleInputs.innerText = 'Faça seu cadastro! '

    let inputNome = document.createElement('input');
    inputNome.className = 'inputNome';
    nome.appendChild(inputNome);
    inputNome.placeholder = 'Nome';

    let inputSobrenome = document.createElement('input');
    inputSobrenome.className = 'inputSobrenome';
    nome.appendChild(inputSobrenome);
    inputSobrenome.placeholder = 'Sobrenome';

    let inputDatanasc = document.createElement('input');
    inputDatanasc.className = 'inputDatanasc';
    nome.appendChild(inputDatanasc);
    inputDatanasc.placeholder = 'Data de nascimento';

    let buttonCadastrar = document.createElement('button');
    buttonCadastrar.className = 'buttonCadastrar';
    walkBox.appendChild(buttonCadastrar);
    buttonCadastrar.textContent = 'Cadastrar'

    let buttonCancelar = document.createElement('button');
    buttonCancelar.className = 'buttonCancelar';
    walkBox.appendChild(buttonCancelar);
    buttonCancelar.textContent = 'Cancelar'


    buttonCancelar.onclick = function () {
        walkBox.remove();
        background.remove();

        let buttonforopenDENOVO = document.createElement('button');
        buttonforopenDENOVO.textContent = 'ABRIR';
        buttonforopenDENOVO.className = 'buttonforopenDENOVO';
        screen.appendChild(buttonforopenDENOVO);
    }
}


