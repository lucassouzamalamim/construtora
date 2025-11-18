import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import FadeIn from '../components/FadeIn';
import { FilterState } from '../types';

const ProjectsList: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({ status: 'Todos', city: 'Todas' });

  // Extract unique cities for filter
  const cities = ['Todas', ...Array.from(new Set(PROJECTS.map(p => p.city)))];
  const statuses = ['Todos', 'Lançamento', 'Em Obras', 'Entregue'];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const statusMatch = filters.status === 'Todos' || project.status === filters.status;
      const cityMatch = filters.city === 'Todas' || project.city === filters.city;
      return statusMatch && cityMatch;
    });
  }, [filters]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-aura-bg">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
           <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-sans mb-4">Nossos Empreendimentos</h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
              Descubra o imóvel perfeito para o seu estilo de vida em nossa seleção exclusiva.
            </p>
           </FadeIn>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 shadow-sm rounded-lg mb-12 max-w-4xl mx-auto border border-gray-100">
          <div className="flex flex-col md:flex-row gap-6 items-end md:items-center justify-center">
             <div className="w-full md:w-auto flex-1">
               <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Cidade</label>
               <select 
                className="w-full bg-gray-50 border border-gray-200 p-3 text-primary focus:border-secondary outline-none transition-colors"
                value={filters.city || 'Todas'}
                onChange={(e) => setFilters(prev => ({ ...prev, city: e.target.value }))}
               >
                 {cities.map(city => <option key={city} value={city}>{city}</option>)}
               </select>
             </div>
             <div className="w-full md:w-auto flex-1">
               <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Estágio da Obra</label>
               <div className="flex flex-wrap gap-2">
                 {statuses.map(status => (
                   <button
                    key={status}
                    onClick={() => setFilters(prev => ({ ...prev, status }))}
                    className={`px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                      filters.status === status 
                      ? 'bg-primary text-white shadow-md' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                   >
                     {status}
                   </button>
                 ))}
               </div>
             </div>
          </div>
        </div>

        {/* Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.1}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">Nenhum empreendimento encontrado com os filtros selecionados.</p>
            <button 
              onClick={() => setFilters({ status: 'Todos', city: 'Todas' })}
              className="mt-4 text-secondary font-bold underline"
            >
              Limpar Filtros
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProjectsList;