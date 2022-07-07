import { COLORS } from '@themes/colors';
import Router from 'next/router';

const RANDOM_COLORS = [
  COLORS.SUCCESS,
  COLORS.PINK,
  COLORS.WARNING,
  COLORS.BLUE,
];

const STATUS_CODE = 400;

export const getRandomColors = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return RANDOM_COLORS[Math.floor(Math.random() * (max - min + 1)) + min];
};

const colors = {
  blue: COLORS.BLUE,
  pink: COLORS.PINK,
  white: COLORS.WHITE,
  yellow: COLORS.QUATERNARY,
  gray: COLORS.GRAY,
};

export const getColorByTest = (color: string) => {
  return (colors as any)[color];
};

export const handleRedirect = (route: string) => {
  Router.push(route);
};

export const checkError = (value: number) => {
  return value >= STATUS_CODE;
};

const CLOSE_NOTIFICATION = 3;

export const openNotification = (message: string) => {
  return {
    open: true,
    autoClose: CLOSE_NOTIFICATION,
    message,
  };
};

export const openErrorNotification = (message: string) => {
  return {
    open: true,
    autoClose: CLOSE_NOTIFICATION,
    message,
    error: true,
  };
};

export const closeNotification = () => {
  return {
    open: false,
    autoClose: CLOSE_NOTIFICATION,
    message: '',
  };
};

export const toBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const formatBaseToRequest = (base: any) => {
  if (base) {
    return base?.split('base64,');
  }
};
