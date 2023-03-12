import Card from "@app/components/card";

export default function Dashboard() {
  return (
    <div class="flex flex-col gap-y-6">
      <h1 class="text-2xl md:text-4xl font-semibold">Welcome, yousef</h1>
      <div class="grid grid-cols-1 gap-6 xl:grid-cols-6">
        <div class="col-span-1 xl:col-span-4">
          <Card>
            <h2 class="text-2xl font-semibold">This is a card</h2>
          </Card>
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
