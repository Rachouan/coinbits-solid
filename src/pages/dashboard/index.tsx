import Card from "@app/components/card";

export default function Dashboard() {
  return (
    <div class="flex flex-col gap-y-8">
      <h1 class="text-2xl md:text-4xl font-semibold">Welcome, yousef</h1>
      <Card>
        <h2 class="text-2xl font-semibold">This is a card</h2>
      </Card>
    </div>
  );
}
