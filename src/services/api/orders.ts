import { api } from './config';
import { Order, OrderStatus } from '../../types';

export const ordersApi = {
  getAll: async () => {
    const response = await api.get<{ data: Order[] }>('/orders');
    return response.data;
  },

  getById: async (orderId: string) => {
    const response = await api.get<{ data: Order }>(`/orders/${orderId}`);
    return response.data;
  },

  updateStatus: async (orderId: string, status: OrderStatus) => {
    const response = await api.put(`/orders/${orderId}/status`, { status });
    return response.data;
  },

  scan: async (orderId: string, sku: string) => {
    const response = await api.post('/scan', { orderId, sku });
    return response.data;
  }
};