// Importa os tipos 'Request' e 'Response' do Express para trabalhar com as solicitações e respostas HTTP.
import { Request, Response } from 'express';

// Importa o modelo 'Order' de um arquivo local que representa uma coleção no banco de dados.
import { Order } from '../../models/Order';

// Define uma função assíncrona chamada 'changeOrderStatus' que lida com a alteração do status de um pedido.
export async function changeOrderStatus(req: Request, res: Response) {
  try {
    // Obtém o parâmetro 'orderId' da solicitação, que representa o ID do pedido cujo status será alterado.
    const { orderId } = req.params;
    
    // Obtém o campo 'status' do corpo (body) da solicitação, que representa o novo status do pedido.
    const { status } = req.body;

    // Verifica se o novo status é válido, ou seja, se está entre 'WAITING', 'IN_PRODUCTION' e 'DONE'.
    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
      // Se não for um status válido, envia uma resposta de erro com status 400 (Bad Request).
      return res.status(400).json({
        error: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE'
      });
    }

    // Utiliza o método 'findByIdAndUpdate' do modelo 'Order' para encontrar o pedido pelo ID e atualizar o campo 'status' com o novo valor.
    await Order.findByIdAndUpdate(orderId, { status });

    // Envia uma resposta com status 204 (No Content) para indicar que a atualização foi bem-sucedida.
    res.sendStatus(204);
  } catch (error) {
    // Em caso de erro, loga o erro no console e envia uma resposta com status 500 (Internal Server Error).
    console.log(error);
    res.sendStatus(500);
  }
}
