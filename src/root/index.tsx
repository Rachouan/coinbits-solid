import Dashboard from "@app/pages/dashboard";
import AppShell from "@app/structures/shell";
import { Routes, Route } from "@solidjs/router";

export default function Root() {
  return (
    <AppShell
      navigation={
        <div>
          <h1>This is the navigation</h1>
        </div>
      }
    >
      <Routes>
        <Route path={["/", "/dashboard"]} element={<Dashboard />} />
      </Routes>
    </AppShell>
  );
}
