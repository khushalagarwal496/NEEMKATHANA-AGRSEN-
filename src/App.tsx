import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutMaharaja from "./pages/AboutMaharaja";
import GotraPage from "./pages/GotraPage";
import AartiPage from "./pages/AartiPage";
import NeemKaThanaPage from "./pages/NeemKaThanaPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/maharaja-agrasen" element={<AboutMaharaja />} />
          <Route path="/gotra" element={<GotraPage />} />
          <Route path="/aarti" element={<AartiPage />} />
          <Route path="/neem-ka-thana" element={<NeemKaThanaPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
