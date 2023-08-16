            Nosso projeto foi desenvolvido para facilitar a criação de blogs usuando API
Bem-vindo à API de Gestão de Usuários e Posts, desenvolvida para facilitar a administração de um sistema de blog simples. Nossa API oferece uma solução eficiente e flexível para criar, atualizar e gerenciar tanto os usuários quanto os posts de forma integrada. Se você está construindo um blog pessoal, um projeto colaborativo ou qualquer plataforma que envolva a interação entre autores e conteúdos.

Com uma estrutura sólida e intuitiva, a API permite que os desenvolvedores interajam com o banco de dados para criar perfis de usuários, autenticar logins, criar novos posts e atualizar informações existentes.


                                                                                     Rotas de APIS



Usuários:

1 - GET Retorna todas os usuários com paginação e ordenação decrecente.
Localhost:8081/Usuarios

2 - GET Consulta uma usuário pelo ID.
Localhost:8081/Usuarios/:id

3 - POST Cria um usuário no banco de dados.
Localhost:8081/Usuarios

4 - PUT Atualiza uma usuário pelo ID.
Localhost:8081/Usuarios/:id

5 - DELETE Deleta um usuário pelo ID.
Localhost:8081/Usuarios/:id
________________________________________________________________________________________________________________________________________________________________________________________________________

Postagens:

1 - GET Retorna todas Postagens com paginação e ordenação decrecente. 

Localhost:8081/Posts

2 - GET Consulta uma postagem pelo ID.

Localhost:8081/Posts/:id

3 - POST Cria uma Postagem.

Localhost:8081/Posts

4 - PUT Atualiza uma Postagem pelo ID.

Localhost:8081/Posts/:id

5 - DELETE Deleta uma Postagem pelo ID.

Localhost:8081/Posts/:id


