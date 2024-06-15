async function adicionarCena(caminho) {
    const cenaPrincipal = document.querySelector('a-scene');
    
    try {
      const response = await fetch(caminho);
      const htmlStr = await response.text();
      const html = parserStringToHtml(htmlStr);
      const novaCena = html.querySelector('a-entity');
      cenaPrincipal.appendChild(novaCena);
    } catch (error) {
      console.error('Erro ao carregar a cena:', caminho, 'erro:', error);
    }
  }