import Card from "@app/components/card";
import { For } from "solid-js";

export default function Dashboard() {
  return (
    <div class="flex flex-col gap-y-6">
      <h1 class="text-2xl md:text-4xl font-semibold">Welcome, yousef</h1>
      <div class="grid grid-cols-1 gap-8 xl:grid-cols-6">
        <div class="col-span-1 xl:col-span-4 flex flex-col gap-8">
          <Card>
            <h2 class="text-2xl font-semibold">This is a card</h2>
          </Card>
          <Card>
            <h2 class="text-2xl font-semibold">This is a card</h2>
          </Card>
          <div class="flex flex-col gap-2">
            <h2 class="text-xl font-semibold">Automated Savings</h2>
            <p class="text-stone-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div class="py-4 overflow-x-scroll flex md:grid md:grid-cols-2 gap-6">
              <For each={Array(3)}>
                {(item) => <Card className="w-72 md:w-auto">{item}</Card>}
              </For>
            </div>
          </div>
        </div>
        <div class="col-span-1 xl:col-span-2">
          <Card>
            <h2 class="font-medium">Buy Bitcoin</h2>
          </Card>
        </div>
      </div>
    </div>
  );
}
