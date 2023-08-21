# DiscordBot
O BOT foi criado com o intuito de corrigir comandos SQL, afim de evitar erros de UPDATE sem where e afins.
Iniciei o projeto recentemente, no momento ele apenas corrige uma sentença de UPDATE.
Posteriormente adicionarei a validação de outros comandos, como INSERT e DELETE.
Também planejo criar uma conexão com banco de dados, e os comandos rodarem direto pelo discord.

Como utilizar este BOT?

1. Faça o clone do projeto
2. Acesse o link: https://discord.com/developers/applications
3. Faça seu login com sua conta do discord, na página principal clique em 'New Application' para criar seu bot.
4. Em seguida, abra o perfil do BOT criado, clique na opção 'OAUTH2'->'URL GENERATOR', selecione as flags 'bot' e 'applications.commands'.
5. Em 'bot permission' de a permissão de administrador, ou para maior segurança, 'Read Messages/Read Channels' + 'Send Messages' + 'Embed links' + 'Add Reactions' + 'Use Slash Commands' + 'Use Embedded Activities' devem ser o suficiente.
6. Copie a URL gerada e cole no navegador, agora basta dar permissão para ele entrar no servidor desejado.
7. Dentro da pasta que você clonou, no VSCODE, abra o terminal e instale a dependencia -> npm install discord.js
8. execute o comando: node deploy-commands.js e em seguida inicie o bot com o comando: node index.js
9. Agora é só usar os comandos no canal do discord.
