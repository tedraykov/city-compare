// Databyte Toaster [v0.0.1]

'use client';

import { useToast } from 'lib/useToast';

import { Toast, ToastProvider, ToastViewport } from './toast';

const Toaster = () => {
  const { toasts } = useToast();

  return (
    <ToastProvider swipeDirection="right">
      {toasts.map(({ id, ...props }) => {
        return <Toast key={id} {...props} />;
      })}
      <ToastViewport />
    </ToastProvider>
  );
};

export { Toaster };
