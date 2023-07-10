const cadastros = [];

function exibirMensagem(mensagem) {
  alert(mensagem);
}

function cadastrarUsuario() {
    const nome = prompt("Digite seu nome:");
    const idade = prompt("Digite sua idade:");
    const email = prompt("Digite seu email:");
    const senha = prompt("Digite sua senha:");

  const usuario = {
    nome: nome,
    idade: idade,
    email: email,
    senha: senha
  };
 

  cadastros.push(usuario);

  executarSistema()

  console.log(cadastros)

}

function exibirCadastros() {
  let mensagem = "Cadastros realizados:\n";

  if (cadastros.length === 0) {
    return mensagem += "Nenhum cadastro encontrado.";
  } else {
    cadastros.forEach(function(usuario, indice) {
      mensagem += "\nCadastro " + (indice + 1) + ":\n";
      mensagem += "Nome: " + usuario.nome + "\n";
      mensagem += "Idade: " + usuario.idade + "\n";
      mensagem += "Email: " + usuario.email + "\n";
      mensagem += "Senha: " + usuario.senha + "\n";
    });
  }

  exibirMensagem(mensagem);
}

function executarSistema() {
  let continuar = true;

  while (continuar) {
    const opcao = prompt("Selecione uma opção:\n1. Cadastrar usuário\n2. Exibir cadastros\n3. Sair");

    switch (opcao) {
      case "1":
        cadastrarUsuario();
        break;
      case "2":
        exibirCadastros();
        break;
      case "3":
        continuar = false;
        break;
      default:
        exibirMensagem("Opção inválida. Tente novamente.");
    }
  }
}