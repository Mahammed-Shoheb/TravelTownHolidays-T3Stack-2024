import { ModalProvider } from "../_components/context/ModalContext";
import { TRPCReactProvider } from "~/trpc/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TRPCReactProvider>
      <ModalProvider>{children}</ModalProvider>
    </TRPCReactProvider>
  );
}
