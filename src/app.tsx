import { ErrorBoundary, LocationProvider, Route, Router } from "preact-iso";
import Article from "./routes/Article";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import About from "./routes/About";
import "./app.css";

export function App() {
  return (
    <LocationProvider>
      <ErrorBoundary>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/article/:article" component={Article} />
          <Route path="/about" component={About} />
          <Route path="/Notfound" component={NotFound} />
          <Route default component={NotFound} />
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  );
}
