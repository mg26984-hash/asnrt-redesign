import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";
import Education from "./pages/Education";
import Academic from "./pages/Academic";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Societies from "./pages/Societies";
import Membership from "./pages/Membership";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/about/:sub" component={About} />
      <Route path="/members" component={Members} />
      <Route path="/members/:sub" component={Members} />
      <Route path="/education" component={Education} />
      <Route path="/education/:category" component={Education} />
      <Route path="/academic" component={Academic} />
      <Route path="/academic/:sub" component={Academic} />
      <Route path="/news" component={News} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/societies" component={Societies} />
      <Route path="/societies/:sub" component={Societies} />
      <Route path="/membership" component={Membership} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
