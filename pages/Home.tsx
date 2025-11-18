import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import FadeIn from '../components/FadeIn';
import { Layout, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <div className="w-full overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background / Fallback Image */}
        <div className="absolute inset-0 w-full h-full">
           <img 
            src="https://picsum.photos/id/1031/1920/1080" 
            alt="Luxurious Apartment View" 
            className="w-full h-full object-cover animate-pulse-slow"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/30" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center md:items-start md:text-left">
          <FadeIn delay={0.2}>
            <h2 className="text-secondary tracking-[0.2em] uppercase text-sm md:text-base font-bold mb-4">
              Alto Padrão em Cada Detalhe
            </h2>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-white leading-tight mb-6 max-w-3xl">
              Construindo o futuro. <br/>
              <span className="font-light text-gray-200">Realizando seus sonhos.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light">
              Conheça nossos empreendimentos de alto padrão e descubra uma nova forma de viver com exclusividade e sofisticação.
            </p>
          </FadeIn>
          <FadeIn delay={0.8}>
            <Link to="/empreendimentos">
              <Button variant="gold">Ver Empreendimentos</Button>
            </Link>
          </FadeIn>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
        </div>
      </section>

      {/* --- FEATURED PROJECTS --- */}
      <section className="py-24 bg-aura-bg">
        <div className="container mx-auto px-4">
          <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-secondary font-bold uppercase tracking-widest text-sm">Portfólio Exclusivo</span>
              <h2 className="text-4xl font-sans font-bold text-primary mt-2">Nossos Lançamentos</h2>
            </div>
            <Link to="/empreendimentos" className="group flex items-center text-primary font-semibold uppercase tracking-widest text-sm hover:text-secondary transition-colors">
              Ver todos
              <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.2}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- DIFFERENTIATORS --- */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <span className="text-secondary font-bold uppercase tracking-widest text-sm">Nossa Essência</span>
            <h2 className="text-4xl font-sans font-bold text-primary mt-2 mb-16">Por que escolher a Aura?</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FadeIn delay={0.2} direction="up">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-secondary mb-6 shadow-lg">
                  <Layout size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Design Inovador</h3>
                <p className="text-gray-600 leading-relaxed max-w-xs">
                  Projetos assinados por arquitetos renomados que unem estética contemporânea e funcionalidade inteligente.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} direction="up">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-secondary mb-6 shadow-lg">
                  <Award size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Qualidade Construtiva</h3>
                <p className="text-gray-600 leading-relaxed max-w-xs">
                  Materiais de primeira linha e processos rigorosos de controle para garantir a excelência em cada m².
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.6} direction="up">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-secondary mb-6 shadow-lg">
                  <ShieldCheck size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Entrega no Prazo</h3>
                <p className="text-gray-600 leading-relaxed max-w-xs">
                  Compromisso absoluto com o cronograma e transparência total durante todas as etapas da obra.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- ABOUT TEASER --- */}
      <section id="sobre" className="py-0 md:py-24 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative">
              <FadeIn direction="left">
                 <img 
                  src="https://picsum.photos/id/203/800/600" 
                  alt="Sede da Aura" 
                  className="w-full h-auto shadow-2xl"
                 />
                 <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary hidden md:block" />
                 <div className="absolute -top-6 -left-6 w-full h-full border border-secondary/30 hidden md:block -z-10" />
              </FadeIn>
            </div>
            <div className="w-full md:w-1/2 py-12 md:py-0">
              <FadeIn direction="right">
                <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-4">Tradição e Futuro</span>
                <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6">
                  Mais de 20 anos de <span className="text-secondary font-light">história</span>.
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                  A Aura Construtora nasceu do desejo de criar espaços que transcendem o morar. Cada projeto é uma obra de arte habitável, desenhada para quem valoriza a exclusividade e o conforto. Já entregamos mais de 500.000 m² de sonhos realizados.
                </p>
                <Button variant="outline">Conheça Nossa Trajetória</Button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;