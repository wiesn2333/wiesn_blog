import { ErrorBoundary, LocationProvider, Route, Router } from "preact-iso";
import Home from "./routes/Home";
import Article from "./routes/Article";
import Project from "./routes/Project";
import About from "./routes/About";
import NotFound from "./routes/NotFound";
import "./app.css";

export function App() {
  return (
    <LocationProvider>
      <ErrorBoundary>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/article/:article" component={Article} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Project} />
          <Route path="/notfound" component={NotFound} />
          <Route default component={NotFound} />
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  );
}
