import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import Button from '../components/Button';
import FadeIn from '../components/FadeIn';
import { Bed, Ruler, Car, CheckCircle, MapPin, Bath, Maximize } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);
  const [activeTab, setActiveTab] = useState<'planta1' | 'planta2'>('planta1');

  if (!project) {
    return <div className="pt-40 text-center">Projeto não encontrado. <Link to="/empreendimentos" className="text-secondary">Voltar</Link></div>;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO / GALLERY HEADER --- */}
      <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden bg-black">
        <img 
          src={project.gallery[0]} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-end">
            <div>
              <span className="bg-secondary text-primary px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                {project.status}
              </span>
              <h1 className="text-4xl md:text-6xl font-sans font-bold mb-2">{project.title}</h1>
              <p className="text-xl text-gray-300 flex items-center gap-2 font-light">
                <MapPin size={20} className="text-secondary" /> {project.neighborhood}, {project.city}
              </p>
            </div>
            <button className="mt-6 md:mt-0 flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all border border-white/30">
              <Maximize size={16} /> Ver Galeria
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT CONTENT */}
          <div className="lg:w-2/3 space-y-12">
            
            {/* Quick Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-gray-100 pb-12">
              <div className="flex items-center gap-3">
                <Bed size={28} className="text-secondary" strokeWidth={1.5} />
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-wider">Dormitórios</span>
                  <span className="text-lg font-bold text-primary">{project.details.dorms}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Ruler size={28} className="text-secondary" strokeWidth={1.5} />
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-wider">Área Privativa</span>
                  <span className="text-lg font-bold text-primary">{project.details.area}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Bath size={28} className="text-secondary" strokeWidth={1.5} />
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-wider">Suítes</span>
                  <span className="text-lg font-bold text-primary">{project.details.suites}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Car size={28} className="text-secondary" strokeWidth={1.5} />
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-wider">Vagas</span>
                  <span className="text-lg font-bold text-primary">{project.details.parking}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <FadeIn>
              <h2 className="text-2xl font-bold font-sans text-primary mb-6">Sobre o Empreendimento</h2>
              <p className="text-gray-600 leading-loose text-lg font-light">
                {project.description} Projetado para elevar sua experiência de moradia, cada detalhe foi cuidadosamente pensado para oferecer conforto, exclusividade e funcionalidade.
              </p>
            </FadeIn>

            {/* Features Grid */}
            <FadeIn delay={0.2}>
              <h2 className="text-2xl font-bold font-sans text-primary mb-6">Diferenciais</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-aura-bg rounded-md">
                    <CheckCircle size={20} className="text-secondary" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Floor Plans */}
            <FadeIn delay={0.3}>
              <h2 className="text-2xl font-bold font-sans text-primary mb-6">Plantas</h2>
              <div className="bg-aura-bg p-8 rounded-xl">
                <div className="flex gap-4 mb-8 border-b border-gray-200">
                  <button 
                    onClick={() => setActiveTab('planta1')}
                    className={`pb-4 text-sm font-bold uppercase tracking-widest transition-colors border-b-2 ${activeTab === 'planta1' ? 'border-secondary text-primary' : 'border-transparent text-gray-400 hover:text-primary'}`}
                  >
                    Tipo 1 - {project.details.area}
                  </button>
                  <button 
                    onClick={() => setActiveTab('planta2')}
                    className={`pb-4 text-sm font-bold uppercase tracking-widest transition-colors border-b-2 ${activeTab === 'planta2' ? 'border-secondary text-primary' : 'border-transparent text-gray-400 hover:text-primary'}`}
                  >
                    Tipo 2 - Cobertura
                  </button>
                </div>
                <div className="aspect-[16/9] bg-white flex items-center justify-center border border-gray-100">
                  {/* Placeholder for Blueprint */}
                  <div className="text-center">
                    <p className="text-gray-300 font-light text-sm mb-2">Ilustração da Planta</p>
                    <div className="w-64 h-40 border-2 border-gray-200 border-dashed rounded flex items-center justify-center text-gray-200">
                      {activeTab === 'planta1' ? 'Planta Tipo' : 'Planta Cobertura'}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

             {/* Location (Static Map Placeholder) */}
            <FadeIn delay={0.4}>
               <h2 className="text-2xl font-bold font-sans text-primary mb-6">Localização</h2>
               <div className="relative w-full h-80 bg-gray-200 rounded-xl overflow-hidden group">
                  <img 
                    src="https://picsum.photos/id/1015/1200/600" 
                    alt="Map Placeholder" 
                    className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                      <MapPin className="text-secondary" />
                      <span className="font-bold text-primary">{project.neighborhood}</span>
                    </div>
                  </div>
               </div>
            </FadeIn>
          </div>

          {/* RIGHT SIDEBAR (Form) */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <div className="bg-primary p-8 rounded-none shadow-2xl text-white">
                <h3 className="text-2xl font-sans font-bold mb-2">Interessado?</h3>
                <p className="text-gray-400 text-sm mb-6">Preencha o formulário abaixo e um de nossos consultores entrará em contato.</p>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-1">Nome</label>
                    <input type="text" className="w-full bg-white/10 border border-white/20 p-3 text-white focus:border-secondary outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-1">E-mail</label>
                    <input type="email" className="w-full bg-white/10 border border-white/20 p-3 text-white focus:border-secondary outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-1">Telefone</label>
                    <input type="tel" className="w-full bg-white/10 border border-white/20 p-3 text-white focus:border-secondary outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-400 mb-1">Mensagem</label>
                    <textarea rows={3} className="w-full bg-white/10 border border-white/20 p-3 text-white focus:border-secondary outline-none transition-colors"></textarea>
                  </div>
                  <Button variant="gold" fullWidth className="mt-4">
                    Solicitar Contato
                  </Button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-white/10 text-center">
                  <p className="text-xs text-gray-400 mb-2">Ou ligue agora:</p>
                  <p className="text-xl font-bold text-secondary">+55 (11) 3022-9000</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;