async function buscaEndereco(cep) {

try {
  var mensagemErro = ('CEP inválido, tente novamente')

  const consultaCEP =  await fetch (`https://viacep.com.br/ws/${cep}/json`)
  const consultaCEPConvertida = await consultaCEP.json();
  if (consultaCEPConvertida.erro){
    throw Error ('CEP não existente')
  }
  
  var cidade = document.getElementById("cidade")
  var logradouro = document.getElementById("endereco")
  var estado = document.getElementById("estado")
  var bairro = document.getElementById("bairro");

  cidade.value = consultaCEPConvertida.localidade;
  logradouro.value = consultaCEPConvertida.logradouro;
  estado.value = consultaCEPConvertida.uf;
  bairro.value = consultaCEPConvertida.bairro;


  console.log(consultaCEPConvertida);
  return consultaCEPConvertida;

  } catch (erro) {
    window.alert (mensagemErro)
    console.log(erro);
  }
}

const cep = document.getElementById('cep')
cep.addEventListener('focusout', () => buscaEndereco(cep.value));
