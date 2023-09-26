// Importa os tipos 'Request' e 'Response' do Express para trabalhar com as solicitações e respostas HTTP.
import { Request, Response } from 'express';

// Importa o modelo 'Product' de um arquivo local que representa uma coleção no banco de dados.
import { Product } from '../../models/Product';

// Define uma função assíncrona chamada 'listProductsByCategory' que lida com a obtenção de produtos por categoria.
export async function listProductsByCategory(req: Request, res: Response) {
  try {
    // Obtém o parâmetro 'categoryId' da solicitação, que representa a categoria pela qual os produtos serão filtrados.
    const { categoryId } = req.params;

    // Utiliza o método 'find' do modelo 'Product' com a condição de igualdade 'category' igual a 'categoryId' para buscar produtos na categoria especificada.
    const products = await Product.find().where('category').equals(categoryId);

    // Envia uma resposta com os dados dos produtos encontrados em formato JSON.
    res.json(products);
  } catch (error) {
    // Em caso de erro, loga o erro no console e envia uma resposta com status 500 (Internal Server Error).
    console.log(error);
    res.sendStatus(500);
  }
}
