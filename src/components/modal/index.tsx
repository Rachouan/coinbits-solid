import { Component, createEffect, createSignal, JSX } from "solid-js";
import Card from "@app/components/card";
import Container from "@app/components/container";
import { Motion } from "@motionone/solid";

interface ModalProps {
  children: JSX.Element | JSX.Element[];
  opened?: boolean;
  onClose?: () => void;
}

export const Modal: Component<ModalProps> = ({
  children,
  opened = false,
  onClose,
}) => {
  const [open, setOpened] = createSignal<boolean>(opened);
  createEffect(() => setOpened(opened), [opened]);
  const close = () => {
    setOpened(false);
    onClose && onClose();
  };
  if (!open()) return null;

  return (
    <div class="fixed flex items-center justify-center z-10 left-0 top-0 w-full h-full overflow-y-auto">
      <Motion.div
        initial={{ background: 0 }}
        animate={{ background: Number(open()) }}
        transition={{ duration: 0.1, easing: "ease-in-out" }}
        class="bg-black opacity-75 absolute w-full h-full"
        onClick={close}
      />
      <Motion.div
        class="relative w-full"
        initial={{ scale: 0 }}
        animate={{
          scale: Number(open()),
        }}
        transition={{ duration: 0.1, easing: "ease-in-out" }}
      >
        <Container>
          <Card>{children}</Card>
        </Container>
      </Motion.div>
    </div>
  );
};

export default Modal;
