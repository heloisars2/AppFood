// Importa o módulo 'path' do Node.js para lidar com caminhos de arquivos.
import path from 'node:path';

// Importa o framework 'express' para criar um servidor web.
import express from 'express';

// Importa o pacote 'mongoose' para interagir com o MongoDB.
import mongoose from 'mongoose';

// Importa o módulo 'router' de um arquivo local (presumivelmente um arquivo de roteamento).
import { router } from './router';

// Conecta-se ao banco de dados MongoDB local na porta 27017.
mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    // Cria uma instância do aplicativo Express.
    const app = express();

    // Define a porta em que o servidor web irá ouvir.
    const port = 3000;

    // Configura um middleware para servir arquivos estáticos da pasta 'uploads'.
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

    // Configura o middleware para analisar solicitações JSON.
    app.use(express.json());

    // Configura o middleware 'router', que lida com as rotas da aplicação.
    app.use(router);

    // Inicia o servidor web na porta especificada.
    app.listen(port, () => {
      console.log(`🚗Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log('Erro ao conectar no MongoDB'));
