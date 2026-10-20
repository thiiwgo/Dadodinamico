fetch('dados.json')
 .then(resposta => resposta.json())
 .then(dados => {
   const lista = document.getElementById('lista');
   dados.forEach(pessoa => {
    const item = document.createElement('li');
    item.textContent = `${pessoa.nome} - ${pessoa.cargo}`;
    lista.appendChild(item);
  });
})
.catch(erro => console.error("Erro ao carregar dados:", erro));
