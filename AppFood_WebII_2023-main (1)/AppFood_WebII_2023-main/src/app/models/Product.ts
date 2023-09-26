// Importa as funções 'model' e 'Schema' do pacote 'mongoose'.
import { model, Schema } from 'mongoose';

// Define um modelo chamado 'Product' usando a função 'model' do Mongoose.
// O modelo 'Product' representa documentos que serão armazenados em uma coleção no MongoDB.

// Aqui está a definição do esquema (schema) para o modelo 'Product' dentro de uma chamada para 'model':
export const Product = model('Product', new Schema({
  // Define um campo 'name' no esquema, que deve ser uma string e é obrigatório (required).
  name: {
    type: String,
    required: true,
  },
  // Define um campo 'description' no esquema, que deve ser uma string e é obrigatório.
  description: {
    type: String,
    required: true,
  },
  // Define um campo 'imagePath' no esquema, que deve ser uma string e é obrigatório.
  imagePath: {
    type: String,
    required: true,
  },
  // Define um campo 'price' no esquema, que deve ser um número (float/int) e é obrigatório.
  price: {
    type: Number,
    required: true,
  },
  // Define um campo 'ingredients' no esquema, que deve ser um array de objetos.
  // Cada objeto no array tem dois campos: 'name' e 'icon'.
  ingredients: {
    required: true,
    type: [{
      // Define o campo 'name' dentro do objeto como uma string e é obrigatório.
      type: String,
      required: true,
    }, {
      // Define o campo 'icon' dentro do objeto como uma string e é obrigatório.
      type: String,
      required: true,
    }],
  },
  // Define um campo 'category' no esquema, que é um ObjectId que faz referência ao modelo 'Category'.
  // É obrigatório especificar a categoria a que este produto pertence.
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category',
  },
}));
