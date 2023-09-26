// Importa os tipos 'Request' e 'Response' do Express para trabalhar com as solicitações e respostas HTTP.
import { Request, Response } from 'express';

// Importa o modelo 'Category' de um arquivo local que representa uma coleção no banco de dados.
import { Category } from '../../models/Category';

// Define uma função assíncrona chamada 'listCategories' que lida com a obtenção de uma lista de categorias.
export async function listCategories(req: Request, res: Response) {
  try {
    // Usa o método 'find' do modelo 'Category' para buscar todas as categorias no banco de dados.
    const categories = await Category.find();

    // Envia uma resposta com os dados das categorias encontradas em formato JSON.
    res.json(categories);
  } catch (error) {
    // Em caso de erro, loga o erro no console e envia uma resposta com status 500 (Internal Server Error).
    console.log(error);
    res.sendStatus(500);
  }
}
