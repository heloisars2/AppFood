// Importa os tipos 'Request' e 'Response' do Express para trabalhar com as solicitações e respostas HTTP.
import { Request, Response } from 'express';

// Importa o modelo 'Order' de um arquivo local que representa uma coleção no banco de dados.
import { Order } from '../../models/Order';

// Define uma função assíncrona chamada 'listOrders' que lida com a obtenção da lista de pedidos.
export async function listOrders(req: Request, res: Response) {
  try {
    // Utiliza o método 'find' do modelo 'Order' para buscar todos os pedidos no banco de dados.
    // A função 'sort' é usada para ordenar os pedidos com base na data de criação ('createdAt') em ordem crescente (1).
    // O método 'populate' é usado para preencher os detalhes dos produtos associados aos pedidos.
    const orders = await Order.find()
      .sort({ createdAt: 1 })
      .populate('products.product');

    // Envia uma resposta com os dados dos pedidos encontrados em formato JSON.
    res.json(orders);
  } catch (error) {
    // Em caso de erro, loga o erro no console e envia uma resposta com status 500 (Internal Server Error).
    console.log(error);
    res.sendStatus(500);
  }
}
