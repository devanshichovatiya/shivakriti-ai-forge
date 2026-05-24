import { HelmetProvider } from 'react-helmet-async';
import { Button } from './components/ui/button';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Chatbot from './components/Chatbot';
import SmokeyCursor from './components/lightswind/smokey-cursor';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Sitemap from './pages/Sitemap';
import ScrollToTop from './components/hooks/use-scroll-to-top';

function App() {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <SmokeyCursor />
      <Router>
        <ScrollToTop />
        {/* <Chatbot /> */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
