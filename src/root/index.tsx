import AppLoader from "@app/components/app-loader";
import AuthPage from "@app/pages/auth";
import BuyBitcoinPage from "@app/pages/buy-bitcoin";
import Dashboard from "@app/pages/dashboard";
import AppShell from "@app/structures/app-shell";
import { Routes, Route, Navigate } from "@solidjs/router";

const RootShell = () => {
  return (
    <AppShell>
      <Routes>
        <Route path={["/", "/dashboard"]} element={<Dashboard />} />
        <Route path={"/buy-bitcoin"} element={<BuyBitcoinPage />} />
      </Routes>
    </AppShell>
  );
};

export default function Root() {
  let content;

  const status: { state: "unauthed" | "authed" } = { state: "unauthed" };

  switch (status.state) {
    case "unauthed":
      content = (
        <Routes>
          <Route path="/auth/*" element={<AuthPage />} />
          <Route path="/" element={<Navigate href="/auth" />} />
        </Routes>
      );
      break;
    default:
      content = <RootShell />;
      break;
  }

  return <AppLoader>{content}</AppLoader>;
}
