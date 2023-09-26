// Importa os tipos 'Request' e 'Response' do Express para trabalhar com as solicitações e respostas HTTP.
import { Request, Response } from 'express';

// Importa o modelo 'Order' de um arquivo local que representa uma coleção no banco de dados.
import { Order } from '../../models/Order';

// Define uma função assíncrona chamada 'cancelOrder' que lida com o cancelamento de um pedido.
export async function cancelOrder(req: Request, res: Response) {
  try {
    // Obtém o parâmetro 'orderId' da solicitação, que representa o ID do pedido a ser cancelado.
    const { orderId } = req.params;

    // Utiliza o método 'findByIdAndDelete' do modelo 'Order' para encontrar e excluir o pedido com o ID especificado.
    await Order.findByIdAndDelete(orderId);

    // Envia uma resposta com status 204 (No Content) para indicar que o pedido foi cancelado com sucesso.
    res.sendStatus(204);
  } catch (error) {
    // Em caso de erro, loga o erro no console e envia uma resposta com status 500 (Internal Server Error).
    console.log(error);
    res.sendStatus(500);
  }
}
