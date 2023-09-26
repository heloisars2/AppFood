// Importa os tipos 'Request' e 'Response' do Express para trabalhar com as solicitações e respostas HTTP.
import { Request, Response } from 'express';

// Importa o modelo 'Product' de um arquivo local que representa uma coleção no banco de dados.
import { Product } from '../../models/Product';

// Define uma função assíncrona chamada 'createProduct' que lida com a criação de um novo produto.
export async function createProduct(req: Request, res: Response) {
  try {
    // Obtém o caminho da imagem do produto a partir do campo 'filename' do arquivo enviado na solicitação.
    const imagePath = req.file?.filename;

    // Obtém os campos 'name', 'description', 'price', 'category' e 'ingredients' do corpo (body) da solicitação HTTP.
    const { name, description, price, category, ingredients } = req.body;

    // Cria uma nova instância de produto no banco de dados usando o modelo 'Product', com os campos fornecidos.
    const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price), // Converte o preço para um número.
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [], // Converte os ingredientes para um array (se fornecidos).
    });

    // Envia uma resposta com status 201 (Created) e retorna os detalhes do produto criado em formato JSON.
    res.status(201).json(product);
  } catch (error) {
    // Em caso de erro, loga o erro no console e envia uma resposta com status 500 (Internal Server Error).
    console.log(error);
    res.sendStatus(500);
  }
}
