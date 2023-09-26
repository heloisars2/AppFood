// Importa o módulo 'path' do Node.js para lidar com caminhos de arquivos.
import path from 'node:path';

// Importa o módulo 'Router' do Express para criar um objeto de roteamento.
import { Router } from 'express';

// Importa o middleware 'multer' para lidar com o upload de arquivos.
import multer from 'multer';

// Importa várias funções de casos de uso para lidar com categorias, produtos e pedidos.
import { 
  listCategories,
  createCategory,
  listProducts,
  createProduct,
  listProductsByCategory,
  listOrders,
  createOrder,
  changeOrderStatus,
  cancelOrder,
} from './app/useCases';

// Cria um objeto de roteamento usando o Express.
export const router = Router();

// Configuração do multer para processar o upload de arquivos.
const upload = multer({
  storage: multer.diskStorage({
    // Define a pasta de destino para os arquivos enviados.
    destination(req, file, callback){
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    // Define o nome do arquivo baseado na data e no nome original.
    filename(req, file, callback){
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  })
});

// Define as rotas e associa cada rota a uma função de tratamento.

// Rota para listar categorias.
router.get('/categories', listCategories);

// Rota para criar uma nova categoria.
router.post('/categories', createCategory);

// Rota para listar produtos.
router.get('/products', listProducts);

// Rota para criar um novo produto, que inclui o middleware 'multer' para processar o upload da imagem.
router.post('/products', upload.single('image'), createProduct);

// Rota para listar produtos com base na categoria.
router.get('/categories/:categoryId/products', listProductsByCategory);

// Rota para listar pedidos.
router.get('/orders', listOrders);

// Rota para criar um novo pedido.
router.post('/orders', createOrder);

// Rota para alterar o status de um pedido (usando PATCH, que é adequado para atualizações parciais).
router.patch('/orders/:orderId', changeOrderStatus);

// Rota para cancelar um pedido (exclusão).
router.delete('/orders/:orderId', cancelOrder);
