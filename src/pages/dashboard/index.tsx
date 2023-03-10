import Card from "@app/components/card";
import Modal from "@app/components/modal";
import { createSignal } from "solid-js";

export default function Dashboard() {
  const [opened, setOpened] = createSignal(false);

  return (
    <div class="flex flex-col gap-y-8">
      <h1 class="text-2xl md:text-4xl font-semibold">Welcome, yousef</h1>
      <button onClick={() => setOpened(true)}>Open modal</button>
      <Card>
        <h2 class="text-2xl font-semibold">This is a card</h2>
      </Card>
      <Modal opened>
        <h2 class="text-2xl font-semibold">This is a modal</h2>
      </Modal>
    </div>
  );
}
