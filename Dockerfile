# Use uma imagem Node.js oficial como base
FROM node:16-alpine

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie o arquivo package.json e package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código do projeto para o diretório de trabalho
COPY . .

# Execute o comando de build do Vite
RUN npm run build

# Exponha a porta que o Vite utiliza (geralmente 3000)
EXPOSE 3000

# Comando para rodar o servidor de produção
CMD ["npx", "vite", "preview", "--host"]
