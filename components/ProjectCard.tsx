import React from 'react';
import { Project } from '../types';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link to={`/empreendimentos/${project.id}`} className="group block h-full">
      <div className="bg-white h-full shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col">
        <div className="relative overflow-hidden aspect-[4/3]">
          {/* Image */}
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-500" />
          
          {/* Status Badge */}
          <div className="absolute top-4 left-4 bg-secondary text-primary text-xs font-bold px-3 py-1 uppercase tracking-wider">
            {project.status}
          </div>
          
          {/* Hover Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30 backdrop-blur-[2px]">
            <span className="bg-white text-primary px-6 py-2 text-sm font-semibold uppercase tracking-widest flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              Saiba Mais <ArrowRight size={16} />
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow border-b-2 border-transparent group-hover:border-secondary transition-colors duration-300">
          <div className="mb-2 flex items-center text-xs text-gray-500 font-medium uppercase tracking-wide">
            <MapPin size={14} className="mr-1 text-secondary" />
            {project.city} • {project.neighborhood}
          </div>
          <h3 className="text-xl font-bold text-primary font-sans mb-2 group-hover:text-secondary transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 font-body mb-4 flex-grow">
            {project.description}
          </p>
          <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
            <span className="text-xs font-semibold text-gray-400">
              {project.details.area}
            </span>
            <span className="text-xs font-semibold text-gray-400">
              {project.details.dorms} Dorms
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;