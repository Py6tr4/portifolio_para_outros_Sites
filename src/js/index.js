
document.addEventListener('DOMContentLoaded', () => {    
    const botaoMostrarprojetos = document.querySelector('.btn-mostrar-projetos');
    const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
    console.log(projetosInativos);
    botaoMostrarprojetos.addEventListener('click', () => {
      projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
      });
    });
  });

  let vei;
  vei=64;
  console.log(vei)
