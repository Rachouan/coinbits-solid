import BuyBitcoinPage from "@app/pages/buy-bitcoin";
import Dashboard from "@app/pages/dashboard";
import AppShell from "@app/structures/app-shell";
import { Routes, Route } from "@solidjs/router";

export default function Root() {
  return (
    <AppShell>
      <Routes>
        <Route path={["/", "/dashboard"]} element={<Dashboard />} />
        <Route path={"/buy-bitcoin"} element={<BuyBitcoinPage />} />
      </Routes>
    </AppShell>
  );
}
