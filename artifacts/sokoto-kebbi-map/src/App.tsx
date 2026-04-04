import { Switch, Route, Router as WouterRouter } from "wouter";
import MapPage from "@/pages/MapPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={MapPage} />
    </Switch>
  );
}

export default function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}
