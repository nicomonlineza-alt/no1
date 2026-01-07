import { Toaster as Sonner, ToasterProps } from "sonner@2.0.3";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        style: {
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(0, 255, 127, 0.2)',
          color: 'white',
        },
        className: 'glass-card',
      }}
      {...props}
    />
  );
};

export { Toaster };
