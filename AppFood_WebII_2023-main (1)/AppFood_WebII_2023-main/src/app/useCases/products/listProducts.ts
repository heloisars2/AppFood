// Importa os tipos 'Request' e 'Response' do Express para trabalhar com as solicitações e respostas HTTP.
import { Request, Response } from 'express';

// Importa o modelo 'Product' de um arquivo local que representa uma coleção no banco de dados.
import { Product } from '../../models/Product';

// Define uma função assíncrona chamada 'listProducts' que lida com a obtenção da lista de produtos.
export async function listProducts(req: Request, res: Response) {
  try {
    // Utiliza o método 'find' do modelo 'Product' para buscar todos os produtos no banco de dados.
    const products = await Product.find();

    // Envia uma resposta com os dados dos produtos encontrados em formato JSON.
    res.json(products);
  } catch (error) {
    // Em caso de erro, loga o erro no console e envia uma resposta com status 500 (Internal Server Error).
    console.log(error);
    res.sendStatus(500);
  }
}
