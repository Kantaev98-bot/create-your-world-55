import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center glass-card p-8 max-w-md mx-4 neon-glow">
        <AlertTriangle className="w-16 h-16 text-neon-pink mx-auto mb-4 animate-pulse" />
        <h1 className="mb-4 text-4xl font-bold gradient-text">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! This page doesn't exist in the neon realm</p>
        <Button variant="neon" asChild className="animate-pulse-glow">
          <a href="/">
            <Home className="w-4 h-4 mr-2" />
            Return to NeonSwap
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
