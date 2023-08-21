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
5. Em 'bot permission' de a permissão de administrador, ou para maior segurança, 'Read Messages/Read Channels' + 'Send Messages' + 'Embed links' + 'Add Reactions' + 'Use Slash Commands' + 'Use Embedded Activities' + 'Manage Messages'  devem ser o suficiente.
6. Copie a URL gerada e cole no navegador, agora basta dar permissão para ele entrar no servidor desejado.
7. Dentro da pasta que você clonou, no VSCODE, abra o terminal e instale a dependencia -> npm install discord.js -> npm init -y
8. Crie um arquivo '.env' e insira as chaves {TOKEN, CLIENT_ID, GUILD_ID}
9. O TOKEN você deve obter no mesmo link que o BOT foi criado, na opção 'BOT' em 'reset token'. CLIENT_ID em 'general information'. GUILD_ID é o ID do servidor do discord que o bot vai operar.
10. Rode o comando: node deploy-commands.js -> e depois node index.js
11. Agora o seu bot está UP, basta inserir os comandos no chat do discord
