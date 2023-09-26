// Importa as funções 'model' e 'Schema' do pacote 'mongoose'.
import { model, Schema } from 'mongoose';

// Define um modelo chamado 'Order' usando a função 'model' do Mongoose.
// O modelo 'Order' representa documentos que serão armazenados em uma coleção no MongoDB.

// Aqui está a definição do esquema (schema) para o modelo 'Order' dentro de uma chamada para 'model':
export const Order = model('Order', new Schema({
  // Define um campo 'table' no esquema, que deve ser uma string e é obrigatório (required).
  table: {
    type: String,
    required: true,
  },
  // Define um campo 'status' no esquema, que deve ser uma string com valores enumerados.
  // O valor padrão é 'WAITING' se nenhum valor for especificado.
  status: {
    type: String,
    enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
    default: 'WAITING',
  },
  // Define um campo 'createdAt' no esquema, que deve ser uma data.
  // O valor padrão é a data atual se nenhum valor for especificado.
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Define um campo 'products' no esquema, que deve ser um array de objetos.
  // Cada objeto no array tem dois campos: 'product' e 'quantity'.
  products: {
    required: true,
    type: [{
      // Define o campo 'product' dentro do objeto como um ObjectId que referencia o modelo 'Product'.
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Product',
    }],
  },
}));
