# JSON Formatter

Este projeto é um formatador de JSON que permite colar uma string JSON, remover caracteres indesejados e exibir o JSON formatado corretamente. O editor utiliza a biblioteca **CodeMirror** para fornecer uma interface rica com funcionalidades como coloração de sintaxe, numeração de linhas e dobramento de código.

## Funcionalidades

- Colar e formatar JSON diretamente na página.
- Substitui caracteres específicos para corrigir problemas de formatação.
- Exibe o JSON formatado com coloração de sintaxe e dobramento de código usando CodeMirror.
- Interface simples e intuitiva.

## Modificações

Foram feitas adaptações no código para realizar substituições específicas no JSON:

```javascript
jsonString = jsonString
    .replace(/\\"/g, '"')
    .replace(/\]"/g, ']')
    .replace(/\"\$\"\: \"\[/g, '"$": [');
```

Estas substituições ajustam corretamente a formatação do JSON para os casos específicos deste projeto.

## Estrutura de Pastas

O projeto está organizado da seguinte forma:
```
/json-formatter
│
├── /css
│   └── style.css         # Estilos da página
│
├── /img
│                         # Imagens da página
|
├── /js
│   └── script.js         # Função de formatação de JSON e lógica de interação
│
├── index.html            # Página principal do projeto
└── README.md             # Documentação do projeto
```

## Tecnologias Utilizadas

**HTML5**: Para a estrutura da página.

**CSS3**: Para o design e estilos.

**JavaScript**: Para a lógica de manipulação do JSON.

**CodeMirror**: Biblioteca para fornecer um editor com recursos avançados de coloração de sintaxe e manipulação de código.

## Como Usar
1. Clone o repositório para sua máquina local:
```
git clone https://github.com/seu-usuario/json-formatter.git
```

2. Abra o arquivo `index.html` em seu navegador.

3. Cole uma string JSON no campo de entrada e clique em "Format JSON".

4. O JSON formatado será exibido no editor CodeMirror com coloração de sintaxe e dobramento de código.

## Melhorias Futuras

Estou constantemente adaptando e melhorando o código, com planos de adicionar as seguintes funcionalidades:

- Validação automática de JSON para destacar erros em tempo real.
- Suporte para diferentes formatos de arquivo (ex.: exportar JSON formatado como arquivo).
- Temas customizados para o editor CodeMirror.

Sinta-se à vontade para contribuir ou sugerir melhorias!

## Contribuição
1. Faça um fork do projeto.
2. Crie uma branch para suas alterações: `git checkout -b minha-branch`.
3. Commit suas mudanças: `git commit -m 'Minha contribuição'`.
4. Faça push para a branch: `git push origin minha-branch`.
5. Abra um Pull Request.

## Licença
Este projeto está licenciado sob a MIT License.
