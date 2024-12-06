import { Language } from '../types';

export const translations = {
  fa: {
    common: {
      dashboard: 'داشبورد',
      orders: 'سفارشات',
      settings: 'تنظیمات',
      logout: 'خروج',
      search: 'جستجو...',
      loading: 'در حال بارگذاری...',
      error: 'خطا',
      success: 'موفقیت',
    },
    fulfillment: {
      title: 'سیستم تکمیل سفارشات',
      uploadFile: 'آپلود فایل',
      viewOrders: 'مشاهده سفارشات',
      scanOrders: 'اسکن سفارشات',
      transfer: 'حمل و نقل',
      downloadUpdated: 'دانلود فایل بروزرسانی شده',
      viewLogs: 'مشاهده لاگ‌ها',
      reset: 'بازنشانی سیستم',
      scanOrderId: 'اسکن شماره سفارش',
      scanSku: 'اسکن کد محصول',
      orderDetails: 'جزئیات سفارش',
      transferTypes: {
        post: 'پست',
        snapbox: 'اسنپ باکس',
        mahex: 'ماهکس',
      },
    },
    user: {
      profile: 'کاربر سیستم',
      role: 'مدیر',
    },
  },
  en: {
    common: {
      dashboard: 'Dashboard',
      orders: 'Orders',
      settings: 'Settings',
      logout: 'Logout',
      search: 'Search...',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
    },
    fulfillment: {
      title: 'Order Fulfillment System',
      uploadFile: 'Upload File',
      viewOrders: 'View Orders',
      scanOrders: 'Scan Orders',
      transfer: 'Transfer',
      downloadUpdated: 'Download Updated File',
      viewLogs: 'View Logs',
      reset: 'Reset System',
      scanOrderId: 'Scan Order ID',
      scanSku: 'Scan SKU',
      orderDetails: 'Order Details',
      transferTypes: {
        post: 'Post',
        snapbox: 'Snapbox',
        mahex: 'Mahex',
      },
    },
    user: {
      profile: 'System User',
      role: 'Admin',
    },
  },
} as const;

export function useTranslations(language: Language) {
  return translations[language];
}