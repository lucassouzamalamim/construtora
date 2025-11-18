import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectsList from './pages/ProjectsList';
import ProjectDetail from './pages/ProjectDetail';
import Button from './components/Button';

// Componente auxiliar para gerenciar a rolagem da página nas trocas de rota
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    // Se houver uma hash na URL (ex: /#sobre), rola até o elemento
    if (hash) {
      // Pequeno delay para garantir que a página renderizou
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); 
    } else {
      // Se não houver hash, rola para o topo (comportamento padrão de navegação)
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empreendimentos" element={<ProjectsList />} />
            <Route path="/empreendimentos/:id" element={<ProjectDetail />} />
            <Route path="/contato" element={<div className="pt-40 text-center h-screen">Página de Contato (Em Breve)</div>} />
            
            {/* Rota 404 - Captura qualquer URL não definida */}
            <Route path="*" element={
              <div className="flex items-center justify-center min-h-[60vh] pt-20">
                <div className="text-center px-4">
                  <h1 className="text-6xl font-bold text-primary mb-4 font-sans">404</h1>
                  <p className="text-xl text-gray-600 mb-8 font-light">Página não encontrada.</p>
                  <Link to="/">
                    <Button variant="gold">Voltar para a Home</Button>
                  </Link>
                </div>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;