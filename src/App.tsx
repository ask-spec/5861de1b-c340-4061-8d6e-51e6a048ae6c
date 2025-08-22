import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Szolgaltatasok from "./pages/Szolgaltatasok";
import Arlista from "./pages/Arlista";
import Kapcsolat from "./pages/Kapcsolat";
import ThankYou from "./pages/ThankYou";
import Cikkek from "./pages/Cikkek";
import Webinariumok from "./pages/Webinariumok";
import Rolunk from "./pages/Rolunk";
import Hirek from "./pages/Hirek";
import GDPR from "./pages/GDPR";
import CookiePolicy from "./pages/CookiePolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/szolgaltatasok" element={<Szolgaltatasok />} />
          <Route path="/arlista" element={<Arlista />} />
          <Route path="/kapcsolat" element={<Kapcsolat />} />
          <Route path="/koszonjuk" element={<ThankYou />} />
          <Route path="/cikkek" element={<Cikkek />} />
          <Route path="/webinariumok" element={<Webinariumok />} />
          <Route path="/rolunk" element={<Rolunk />} />
          <Route path="/hirek" element={<Hirek />} />
          <Route path="/gdpr" element={<GDPR />} />
          <Route path="/cookie-szabalyzat" element={<CookiePolicy />} />
          <Route path="/felhasznalasi-feltetelek" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
