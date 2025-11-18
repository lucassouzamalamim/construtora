import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
             <div className="flex flex-col leading-none mb-6">
              <span className="text-3xl font-bold tracking-widest text-white font-sans">
                AURA
              </span>
              <span className="text-xs tracking-[0.4em] text-secondary uppercase">
                Construtora
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Construindo o futuro com sofisticação, inovação e respeito ao seu estilo de vida. Mais de 20 anos transformando sonhos em realidade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-6">Navegação</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/empreendimentos" className="hover:text-secondary transition-colors">Empreendimentos</Link></li>
              <li><Link to="/#sobre" className="hover:text-secondary transition-colors">Quem Somos</Link></li>
              <li><Link to="/contato" className="hover:text-secondary transition-colors">Fale Conosco</Link></li>
              <li><Link to="#" className="hover:text-secondary transition-colors">Portal do Cliente</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary flex-shrink-0" />
                <span>Av. Faria Lima, 4500, Andar 22<br />São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <span>+55 (11) 3022-9000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <span>contato@auraconstrutora.com.br</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-6">Newsletter</h4>
            <p className="text-xs text-gray-400 mb-4">Receba novidades sobre nossos lançamentos exclusivos.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-white/5 border border-white/10 px-4 py-2 text-sm text-white focus:outline-none focus:border-secondary transition-colors"
              />
              <button type="submit" className="bg-secondary text-primary px-4 py-2 text-xs font-bold uppercase hover:bg-white transition-colors">
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Aura Construtora. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-secondary transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;