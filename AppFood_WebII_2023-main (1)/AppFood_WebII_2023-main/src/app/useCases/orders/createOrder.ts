// Importa os tipos 'Request' e 'Response' do Express para trabalhar com as solicitações e respostas HTTP.
import { Request, Response } from 'express';

// Importa o modelo 'Order' de um arquivo local que representa uma coleção no banco de dados.
import { Order } from '../../models/Order';

// Define uma função assíncrona chamada 'createOrder' que lida com a criação de um novo pedido.
export async function createOrder(req: Request, res: Response) {
  try {
    // Obtém os campos 'table' e 'products' do corpo (body) da solicitação HTTP.
    const { table, products } = req.body;

    // Cria uma nova instância de pedido no banco de dados usando o modelo 'Order', com os campos fornecidos.
    const order = await Order.create({ table, products });

    // Envia uma resposta com status 201 (Created) e retorna os detalhes do pedido criado em formato JSON.
    res.status(201).json(order);
  } catch (error) {
    // Em caso de erro, loga o erro no console e envia uma resposta com status 500 (Internal Server Error).
    console.log(error);
    res.sendStatus(500);
  }
}
