const form = document.getElementById('form-contatos');
const contato = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaCadastroTotal();
});

function adicionaLinha () {
    const inputNomeContato = document.getElementById('nome-contatos');
    const inputTelefone = document.getElementById('telefone-contato'); 

    if (contato.includes(inputNomeContato.value)) {
        alert(`Contato: ${inputNomeContato.value} já foi cadastrado.`);
    } else {
        contato.push(inputNomeContato.value);
  
    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '<tr>'; 

    linhas += linha;
    }    
    
    inputNomeContato.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}




  