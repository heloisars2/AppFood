// Importa os tipos 'Request' e 'Response' do Express para trabalhar com as solicitações e respostas HTTP.
import { Request, Response } from 'express';

// Importa o modelo 'Category' de um arquivo local que representa uma coleção no banco de dados.
import { Category } from '../../models/Category';

// Define uma função assíncrona chamada 'createCategory' que lida com a criação de uma nova categoria.
export async function createCategory(req: Request, res: Response) {
  try {
    // Desestrutura os campos 'icon' e 'name' do corpo (body) da solicitação HTTP.
    const { icon, name } = req.body;

    // Cria uma nova instância de categoria no banco de dados usando o modelo 'Category'.
    const category = await Category.create({ icon, name });

    // Envia uma resposta com status 201 (Created) e retorna a categoria criada em formato JSON.
    res.status(201).json(category);
  } catch (error) {
    // Em caso de erro, loga o erro no console e envia uma resposta com status 500 (Internal Server Error).
    console.log(error);
    res.sendStatus(500);
  }
}
