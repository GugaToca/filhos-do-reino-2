// Futuramente: carregar versículo do dia dinamicamente
console.log("Bem-vindo ao Clube da Bíblia Kids!");

function mostrarMensagem(mensagem, elementoId, velocidade = 50) {
  const elemento = document.getElementById(elementoId);
  elemento.textContent = "";
  let i = 0;
}


  document.addEventListener("DOMContentLoaded", function () {
    const devocionais = {
      0: { titulo: "JESUS NOS AMA!", versiculo: "João 3:16" },
      1: { titulo: "ORAR É FALAR COM DEUS!", versiculo: "Mateus 6:6" },
      2: { titulo: "A PALAVRA DE DEUS É LUZ!", versiculo: "Salmos 119:105" },
      3: { titulo: "LOUVAR A DEUS É BOM!", versiculo: "Salmos 100:1" },
      4: { titulo: "AMAR É O MANDAMENTO MAIOR!", versiculo: "Marcos 12:30-31" },
      5: { titulo: "DEUS É FIEL!", versiculo: "Lamentações 3:22-23" },
      6: { titulo: "DEUS CRIOU TUDO COM AMOR!", versiculo: "Gênesis 1:31" }
    };

    const hoje = new Date();
    const diaSemana = hoje.getDay(); // 0=Dom, ..., 6=Sab
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');

    const devocional = devocionais[diaSemana];

    const conteudo = `
      <p><strong>DIA: ${dia}/${mes}</strong></p>
      <p><strong>DEVOCIONAL:</strong> ${devocional.titulo}</p>
      <p>${devocional.versiculo}</p>
    `;

    document.getElementById("conteudo-destaque").innerHTML = conteudo;
  });