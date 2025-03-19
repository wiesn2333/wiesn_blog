import { ErrorBoundary, LocationProvider, Route, Router } from "preact-iso";
import Article from "./routes/Article";
import Home from "./routes/Home";
import "./app.css";
import NotFound from "./routes/NotFound";

export function App() {
  return (
    <LocationProvider>
      <ErrorBoundary>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/article/:article" component={Article} />
          <Route path="/Notfound" component={NotFound} />
          <Route default component={NotFound} />
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  );
}
