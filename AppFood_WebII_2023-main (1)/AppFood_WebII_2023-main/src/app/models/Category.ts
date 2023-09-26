// Importa as funções 'model' e 'Schema' do pacote 'mongoose'.
import { model, Schema } from 'mongoose';

// Define um modelo chamado 'Category' usando a função 'model' do Mongoose.
// O modelo 'Category' representa documentos que serão armazenados em uma coleção no MongoDB.

// Aqui está a definição do esquema (schema) para o modelo 'Category' dentro de uma chamada para 'model':
export const Category = model('Category', new Schema({
  // Define um campo 'name' no esquema, que deve ser uma string e é obrigatório (required).
  name: {
    type: String,
    required: true,
  },
  // Define um campo 'icon' no esquema, que também deve ser uma string e é obrigatório.
  icon: {
    type: String,
    required: true,
  }
}));
