// Export individual APIs
export * from './config';
export * from './orders';
export * from './transfer';
export * from './upload';
export * from './products';

// Export combined API object
import { ordersApi } from './orders';
import { transferApi } from './transfer';
import { uploadApi } from './upload';
import { productsApi } from './products';

export const fulfillmentApi = {
  orders: ordersApi,
  transfer: transferApi,
  upload: uploadApi,
  products: productsApi,
};