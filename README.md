<div align="center">
  <img src="https://user-images.githubusercontent.com/99055008/233121388-1ace793d-5a26-483b-852a-319c2bd76f0b.png" alt="Logo">
</div>

<br>

# Ultracar lite

O objetivo deste projeto foi criar um software de gestão de uma oficina em um prazo de 32 horas. A inspiração veio da empresa Ultracar e do seu site [Ultracarweb](https://ultracarweb.com/). Com isso em mente, desenvolvi o [Ultracar Lite](https://ultracar-lite.vercel.app/), uma versão simplificada e mais leve do software de gestão original.

Devido ao curto prazo, não pude implementar todas as funcionalidades que gostaria. Minha ideia inicial era criar um back-end com cinco tabelas (Carros, Clientes, Colaboradores, Ordens de Serviço e Produtos) e relacioná-las entre si usando TypeScript, Node, MySQL e Express. Para o front-end, pensei em usar TypeScript e React como ferramentas principais.

Embora minha ideia inicial fosse criar um software fullstack, percebi que seria impossível desenvolver um back-end completo com as cinco tabelas no prazo estipulado. Decidi então focar no desenvolvimento do front-end e uma das escolhas estratégicas que fiz foi optar por JavaScript em vez de TypeScript. Embora tenha perdido as vantagens da tipagem estática, considerei que essa escolha estratégica foi necessária para cumprir o prazo.

Para simular um banco de dados, utilizei mocks, mas infelizmente, não consegui implementar o armazenamento de dados no localStorage a tempo. Apesar disso, o Ultracar Lite é um projeto em andamento e pretendo continuar trabalhando nele após o término do processo seletivo.

<br>

## Sobre o Ultracar lite

O [UltraCar lite](https://ultracar-lite.vercel.app/) é uma solução completa e simples para a gestão de oficinas mecânicas de pequeno e médio porte. Desenvolvido com o objetivo de atender às necessidades específicas desse tipo de negócio, o [UltraCar lite](https://ultracar-lite.vercel.app/) oferece recursos fáceis de usar e intuitivos para gerenciar clientes, produtos, colaboradores e ordens de serviço.

Com o [UltraCar lite](https://ultracar-lite.vercel.app/), você pode adicionar clientes e produtos de forma rápida e fácil. A área de ordens de serviço permite que você gerencie suas atividades de maneira organizada e eficiente, com a visualização do status das ordens de serviço, peças utilizadas, preço e outras informações importantes.

Além disso, o [UltraCar lite](https://ultracar-lite.vercel.app/) possui uma área dedicada aos colaboradores da oficina, onde é possível gerenciar as atividades de cada um deles. Com isso, é possível garantir que todas as tarefas sejam realizadas de maneira eficiente e dentro do prazo estabelecido.

O [UltraCar lite](https://ultracar-lite.vercel.app/) é um software fácil de usar e com uma interface intuitiva. Compatível com dispositivos móveis e desktop, você pode acessar e gerenciar suas informações de qualquer lugar e a qualquer momento.

Experimente agora mesmo o [UltraCar lite](https://ultracar-lite.vercel.app/) e descubra como ele pode ajudá-lo a gerenciar sua oficina mecânica de maneira eficiente e completa.

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

## Por que escolhi JavaScript em vez de TypeScript?

Para o desenvolvimento do front-end, optei pelo JavaScript devido ao prazo limitado para o desenvolvimento. Embora TypeScript ofereça vantagens em relação à tipagem estática, que ajuda a evitar erros comuns e aumenta a qualidade do código, optei por JavaScript por ser uma linguagem mais ágil, o que permitiu desenvolver e entregar o projeto dentro do prazo. Além disso, a simplicidade do JavaScript se encaixa bem com a proposta do  [UltraCar lite](https://ultracar-lite.vercel.app/), que é uma solução simples e eficiente para gestão de oficinas mecânicas de pequeno e médio porte.

<br>

## Sobre o React

O React é uma biblioteca JavaScript amplamente utilizada no desenvolvimento de interfaces de usuário. Ele possui uma série de recursos que facilitam a criação de aplicativos web modernos e eficientes. Uma das principais vantagens do React é sua capacidade de dividir o aplicativo em componentes reutilizáveis, tornando o código mais organizado e fácil de manter.

Além disso, o React oferece uma série de recursos que melhoram a experiência do usuário, como a renderização rápida de componentes e a atualização dinâmica de dados. A renderização rápida é possível porque o React utiliza uma abordagem de virtual DOM, em que apenas as partes da página que precisam ser atualizadas são modificadas, em vez de renderizar a página inteira.

Outro recurso importante do React é a possibilidade de criar componentes personalizados. Isso permite que os desenvolvedores criem elementos customizados que podem ser usados em vários lugares do aplicativo, economizando tempo e reduzindo a redundância de código.

No geral, o React é uma biblioteca poderosa que oferece muitas ferramentas úteis para criar interfaces de usuário eficientes e intuitivas.

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

## QR Code

O [UltraCar lite](https://ultracar-lite.vercel.app/) possui uma funcionalidade de QR Codes que visa facilitar o acesso às informações das ordens de serviço por meio de dispositivos móveis. Cada página de busca de dados possui um QR Code exclusivo que pode ser escaneado pelo celular, direcionando o usuário para a página específica da ordem de serviço.

Embora essa funcionalidade ainda não esteja completa, devido ao prazo limitado de desenvolvimento, a ideia é que futuramente os QR Codes contenham informações adicionais, como o status e as informações específicas de cada área. Isso seria muito útil para oficinas mecânicas que desejam ter mais agilidade no serviço e compartilhar informações com seus clientes de maneira rápida e fácil.

É importante ressaltar que, apesar dos QR Codes ainda não estarem totalmente funcionais, a funcionalidade de busca através de um dispositivo móvel já está ativa. Com essa funcionalidade, os usuários podem fazer a busca por meio de seus dispositivos móveis através do QR Code, o que ajuda as oficinas a organizarem seus serviços de maneira simples e rápida. A ideia é continuar aprimorando a plataforma, incluindo novas funcionalidades que possam facilitar ainda mais a vida dos usuários.

<br>

## Estilização

Para a estilização, utilizei o framework Tailwind de forma estratégica para deixar o site estilizado e responsivo em pouco tempo. O Tailwind é um framework CSS utilitário que permite criar estilos customizados rapidamente, sendo essencial para atender às demandas de prazo do projeto.

Os campos de input, por sua vez, foram estilizados utilizando o Material UI, conjunto de componentes React pré-construídos que foram personalizados para atender às necessidades específicas do projeto. Neles, implementei máscaras para CPF, telefones e datas, permitindo que o preenchimento desses campos seja feito automaticamente, evitando erros comuns de digitação e tornando a experiência do usuário mais ágil e intuitiva.

Além disso, utilizei o CSS nativo em alguns casos para complementar o estilo dos componentes.

Com a combinação dessas ferramentas, foi possível criar uma interface web responsiva, atraente e funcional em um curto período de tempo.

<br>
<br>

<details>
  <summary><strong>INSTALAÇÃO DO SOFTWARE ULTRACAR LITE</strong></summary><br />

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

- Instale as depëndencias com `npm install`:

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

Abra [http://localhost:5173](http://localhost:5173/) no seu navegador para visualiza-lo.

<hr>
<br>

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

## Deploy
Este projeto implantado no [Vercel](https://vercel.com/). Você pode acessar o link do site aqui: [UltraCar lite](https://ultracar-lite.vercel.app/)

<br>

## Preview

https://user-images.githubusercontent.com/99055008/233128997-e9bef20a-b771-4110-9b7c-3087b8b26955.mp4

<hr>
