import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Index from "@/pages/Index";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Book from "@/pages/Book";
import AdminDashboard from "@/pages/AdminDashboard";
import NotFound from "@/pages/NotFound";
import PlaceholderPage from "@/pages/PlaceholderPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<Book />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
            <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
