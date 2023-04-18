# UltraCar lite

Desenvolvido com o objetivo de atender as necessidades de oficinas mecânicas de pequeno e médio porte, o [UltraCar lite](https://ultracar-lite.vercel.app/) é uma solução completa e simples para a gestão de seus clientes, produtos e colaboradores.

Com o [UltraCar lite](https://ultracar-lite.vercel.app/), você pode adicionar clientes e produtos de forma rápida e fácil. Além disso, a área de ordens de serviço permite que você gerencie suas atividades de maneira organizada e eficiente. Você pode visualizar o status das ordens de serviço, as peças utilizadas, o preço e outras informações importantes.

O UltraCar Lite também possui uma área dedicada aos colaboradores da oficina, onde é possível gerenciar as atividades de cada um deles. Assim, você pode garantir que todas as tarefas sejam realizadas de maneira eficiente e dentro do prazo estabelecido. Alem disso, o [UltraCar lite](https://ultracar-lite.vercel.app/) é um software fácil de usar e com uma interface intuitiva. Compatível com dispositivos móveis e desktop, você pode acessar e gerenciar suas informações de qualquer lugar e a qualquer momento.

Não perca mais tempo com gestão manual de sua oficina mecânica. Experimente agora mesmo o UltraCar Lite e veja como ele pode ajudá-lo a gerenciar sua oficina de maneira eficiente e completa.
<br>

## Rotas

O software possui as seguintes rotas:

- `/`: Página inicial da aplicação.

- `/client`: Página para pesquisa de clientes. O técnico pode pesquisar informações de clientes e ordens de serviço específicas. Também pode ver uma lista com todas as informações do banco de dados de clientes.

- `/client/:id`: Página para informações específicas do cliente.

- `/allclients`: Página para ver uma lista com todas as informações do banco de dados de clientes.

- `/product`: Página para pesquisa de produtos. O técnico pode pesquisar informações de produtos específicos. Também pode ver uma lista com todas as informações do banco de dados de produtos.

- `/product/:id`: Página para informações específicas do produto.

- `/allproducts`: Página para ver uma lista com todas as informações do banco de dados de produtos.

- `/service`: Página para pesquisa de ordens de serviço. O técnico pode pesquisar informações de ordens de serviço específicas. Também pode ver uma lista com todas as informações do banco de dados de ordens de serviço.

- `/service/:id`: Página para informações específicas da ordem de serviço.

- `/allservices`: Página para ver uma lista com todas as informações do banco de dados de ordens de serviço.

- `/employee`: Página para pesquisa de colaboradores. O técnico pode pesquisar informações de colaboradores específicos. Também pode ver uma lista com todas as informações do banco de dados de colaboradores.

- `/employee/:id`: Página para informações específicas do colaborador.

- `/allemployees`: Página para ver uma lista com todas as informações do banco de dados de colaboradores.

- `/register/client`: Página para registro de novos clientes.

- `/register/product`: Página para registro de novos produtos.

- `/register/employee`: Página para registro de novos colaboradores.

- `/register/service`: Página para registro de novas ordens de serviço.

- `/suport`: Página para suporte técnico.

- `*`: Página de erro, caso a rota não exista.

<br>

## Context API
O [ContextAPI](https://reactjs.org/docs/context.html) é uma das funcionalidades do [React](https://pt-br.reactjs.org/) que permite compartilhar dados entre componentes sem precisar passar `props` manualmente em cada nível da árvore de componentes. Vantagens do [ContextAPI](https://reactjs.org/docs/context.html):

- Reduz a necessidade de passar `props` manualmente em cada nível da árvore de componentes, tornando o código mais limpo e fácil de ler.
- Permite compartilhar dados em toda a árvore de componentes sem precisar se preocupar com a hierarquia dos componentes.
- Facilita a criação de temas personalizados, permitindo que os componentes tenham acesso a um tema global sem a necessidade de passá-lo manualmente em cada componente.
- Ajuda a manter o estado da aplicação em um único lugar, tornando mais fácil a manipulação e a atualização dos dados.
- Permite o uso de múltiplos contextos em uma única aplicação, tornando a organização e a estruturação da aplicação mais flexíveis.
- Melhora a performance da aplicação, uma vez que reduz a necessidade de atualizar vários componentes ao mesmo tempo.

<br>

## Estilização

No software UltraCar Lite, foi utilizado três ferramentas para estilizar a aplicação web: [Tailwind](https://tailwindcss.com/), [Material UI](https://mui.com/) e [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS). O [Tailwind](https://tailwindcss.com/) é um framework [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS) utilitário que nos permite criar estilos customizados rapidamente, enquanto o [Material UI](https://mui.com/) é um conjunto de componentes React pré-construídos que seguem as diretrizes de design do Google. Além disso, o [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS) nativo foi utilizado em alguns casos para complementar o estilo dos componentes.

Utilzei o [Tailwind](https://tailwindcss.com/) principalmente para estilizar os componentes criados do zero, enquanto [Material UI](https://mui.com/) foi utilizado para os campos de input. Ambos foram customizados para atender às necessidades de design e experiência do usuário específicas do projeto.

No geral, a combinação dessas ferramentas nos permitiu criar uma interface web responsiva, atraente e funcional.

<br>
<br>

<details>
  <summary><strong>INSTALAÇÃO DO SOFTWARE UlTRACAR LITE</strong></summary><br />

## Instalação 

<br>

- Clone o repositório `git@github.com:Rafael-Souza-97/ultracar-lite.git`:

```bash
git clone git@github.com:Rafael-Souza-97/ultracar-lite.git
```

<br>

- Entre na pasta do repositório que você acabou de clonar:

```bash
cd ultracar-lite
```

<br>

- Instale as depëndencias, caso necessário, com `npm install`:

```bash
npm install
```

- Instale as depëndencias do Front-end com `npm install`:

```bash
npm install
```

<hr>
<br>

### Executando a aplicação:


- Execute a aplicação com  com `npm start` na raiz do projeto:
> Executará a aplicação em modo de desenvolvimento.
 
```bash
npm start
```

Abra [http://localhost:3000](http://localhost:5173/) no seu navegador para visualiza-lo.

<hr>
<br>
<hr>

</details>

<br>

## Autor

- [Rafael Souza](https://github.com/Rafael-Souza-97)

## Referências

 - [UltraCar](https://ultracarweb.com/)

## Tecnologias e Ferramentas

- Linguagem: [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- Framework de Front-end: [React](https://pt-br.reactjs.org/)
- Gerenciamento de estado: [ContextAPI](https://reactjs.org/docs/context.html)
- Linter de código: [ESLint](https://eslint.org/)
- Editor de código: [Visual Studio Code](https://code.visualstudio.com/)
- Sistema de controle de versão: [Git](https://git-scm.com/) e [GitHub](https://github.com/)
- Sistema operacional: [Linux - Ubuntu](https://ubuntu.com/)

## Estilização

- Framework CSS: [Tailwind](https://tailwindcss.com/)
- Biblioteca de componentes: [Material UI](https://mui.com/)
- Linguagem de Estilização: [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

<br>
<hr>

## Deploy
Este projeto implantado no [Vercel](https://vercel.com/). Você pode acessar o link do site aqui: [UltraCar lite](https://ultracar-lite.vercel.app/)
<br>
<hr>
