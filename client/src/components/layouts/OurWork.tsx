import React, { useState } from 'react';
import { ArrowDown, ExternalLink, FolderOpen } from 'lucide-react';

type View = 'ourWork' | 'album';

interface SubImage {
  id: number;
  url: string;
  title: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  subImages: SubImage[];
  liveDemo?: string; // optional now
  fullProject: string;
}

const OurWork = () => {
  const [view, setView] = useState<View>('ourWork');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showMore, setShowMore] = useState(false);

  const projects: Project[] = [
    // --- First Look Projects (always with links) ---
    {
      id: 1,
      title: 'Capturing City Life',
      description: 'The bustling streets of New York.',
      image: 'https://picsum.photos/600/400?random=1',
      subImages: [
        { id: 1, url: 'https://picsum.photos/600/400?random=11', title: 'Street View' },
        { id: 2, url: 'https://picsum.photos/600/400?random=12', title: 'Cafe Life' },
        { id: 3, url: 'https://picsum.photos/600/400?random=13', title: 'Night Lights' },
        { id: 4, url: 'https://picsum.photos/600/400?random=14', title: 'Subway' },
        { id: 5, url: 'https://picsum.photos/600/400?random=15', title: 'Skyline' },
      ],
      liveDemo: 'https://payverge-pv.vercel.app',
      fullProject: '#',
    },
    {
      id: 2,
      title: 'Nature Wonders',
      description: 'Explore the untouched beauty of nature.',
      image: 'https://picsum.photos/600/400?random=2',
      subImages: [
        { id: 1, url: 'https://picsum.photos/600/400?random=21', title: 'Waterfall' },
        { id: 2, url: 'https://picsum.photos/600/400?random=22', title: 'Forest' },
        { id: 3, url: 'https://picsum.photos/600/400?random=23', title: 'Mountains' },
        { id: 4, url: 'https://picsum.photos/600/400?random=24', title: 'River' },
        { id: 5, url: 'https://picsum.photos/600/400?random=25', title: 'Valley' },
      ],
      liveDemo: 'https://payverge-pv.vercel.app',
      fullProject: '#',
    },
    {
      id: 3,
      title: 'Architectural Marvels',
      description: 'From ancient structures to modern designs.',
      image: 'https://picsum.photos/600/400?random=3',
      subImages: [
        { id: 1, url: 'https://picsum.photos/600/400?random=31', title: 'Old Castle' },
        { id: 2, url: 'https://picsum.photos/600/400?random=32', title: 'Modern Skyscraper' },
        { id: 3, url: 'https://picsum.photos/600/400?random=33', title: 'Bridge' },
        { id: 4, url: 'https://picsum.photos/600/400?random=34', title: 'Temple' },
        { id: 5, url: 'https://picsum.photos/600/400?random=35', title: 'Tower' },
      ],
      liveDemo: 'https://payverge-pv.vercel.app',
      fullProject: '#',
    },

    // --- Bottom Projects (alternating link / no-link) ---
    {
      id: 4,
      title: 'Ocean Vibes',
      description: 'Diving into the blue depths.',
      image: 'https://picsum.photos/600/400?random=4',
      subImages: [
        { id: 1, url: 'https://picsum.photos/600/400?random=41', title: 'Corals' },
        { id: 2, url: 'https://picsum.photos/600/400?random=42', title: 'Fish' },
        { id: 3, url: 'https://picsum.photos/600/400?random=43', title: 'Waves' },
        { id: 4, url: 'https://picsum.photos/600/400?random=44', title: 'Shore' },
        { id: 5, url: 'https://picsum.photos/600/400?random=45', title: 'Sunset' },
      ],
      // has live link
      liveDemo: 'https://payverge-pv.vercel.app',
      fullProject: '#',
    },
    {
      id: 5,
      title: 'Wildlife Adventures',
      description: 'Capturing life in the wild.',
      image: 'https://picsum.photos/600/400?random=5',
      subImages: [
        { id: 1, url: 'https://picsum.photos/600/400?random=51', title: 'Lion' },
        { id: 2, url: 'https://picsum.photos/600/400?random=52', title: 'Elephant' },
        { id: 3, url: 'https://picsum.photos/600/400?random=53', title: 'Birds' },
        { id: 4, url: 'https://picsum.photos/600/400?random=54', title: 'Tiger' },
        { id: 5, url: 'https://picsum.photos/600/400?random=55', title: 'Deer' },
      ],
      // NO live link (design only)
      fullProject: '#',
    },

    {
      id: 6,
      title: 'Wildlife Adventures',
      description: 'Capturing life in the wild.',
      image: 'https://picsum.photos/600/400?random=5',
      subImages: [
        { id: 1, url: 'https://picsum.photos/600/400?random=51', title: 'Lion' },
        { id: 2, url: 'https://picsum.photos/600/400?random=52', title: 'Elephant' },
        { id: 3, url: 'https://picsum.photos/600/400?random=53', title: 'Birds' },
        { id: 4, url: 'https://picsum.photos/600/400?random=54', title: 'Tiger' },
        { id: 5, url: 'https://picsum.photos/600/400?random=55', title: 'Deer' },
      ],
      // NO live link (design only)
      fullProject: '#',
    },
    // you can keep adding more with the same alternating pattern
  ];

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setView('album');
  };

  if (view === 'album' && selectedProject) {
    return (
      <div className="bg-[#EEEEEE] text-[#1E1E1E] p-8 min-h-screen">
        <h2 className="text-2xl font-bold mb-6 font-[Poppins] text-center">
          {selectedProject.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {selectedProject.subImages.map((img) => (
            <div key={img.id} className="relative group">
              <img
                src={img.url}
                alt={img.title}
                className="rounded-2xl shadow-lg w-full h-64 object-cover border border-[#1E1E1E]"
              />
              <div className="absolute inset-0 bg-[#1E1E1E]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <p className="text-[#EEEEEE] text-lg font-semibold font-[Arimo]">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Centered Back Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setView('ourWork')}
            className="px-6 py-2 bg-[#1E1E1E] text-[#EEEEEE] rounded-2xl font-semibold"
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-[#EEEEEE] text-[#1E1E1E] py-16 px-6">
      {/* Main Heading */}
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 font-[Poppins]">
        Our Work
      </h2>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 justify-items-center">
        {projects.slice(0, showMore ? projects.length : 3).map((project) => (
          <div
            key={project.id}
            className="relative w-full sm:w-[300px] lg:w-[320px] bg-[#EEEEEE] border border-[#1E1E1E] rounded-2xl p-4"
          >
            {/* Card Image */}
            <div
              className="relative group cursor-pointer"
              onClick={() => handleCardClick(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-2xl shadow-lg w-full h-64 object-cover border border-[#1E1E1E]"
              />
              <div className="absolute inset-0 bg-[#1E1E1E]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition rounded-2xl">
                <p className="text-[#EEEEEE] text-lg font-semibold font-[Arimo]">View Album</p>
              </div>
            </div>

            {/* Card Content */}
            <div className="mt-3 text-center">
              <h3 className="text-xl font-semibold font-[Poppins]">{project.title}</h3>
              <p className="text-sm mt-2 font-[Arimo]">{project.description}</p>
              <div className="flex justify-center gap-3 mt-3 flex-wrap">
                <button
                  onClick={() => handleCardClick(project)}
                  className="px-4 py-2 bg-[#1E1E1E] text-[#EEEEEE] rounded-2xl flex items-center gap-2 font-semibold text-sm"
                >
                  <FolderOpen size={16} /> Full Project
                </button>
                {/* Only render Live Demo if available */}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#1E1E1E] text-[#EEEEEE] rounded-2xl flex items-center gap-2 font-semibold text-sm"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowMore(!showMore)}
          className="flex items-center gap-2 px-6 py-2 bg-[#1E1E1E] text-[#EEEEEE] rounded-2xl font-semibold font-[Poppins]"
        >
          View {showMore ? 'Less' : 'More'}{' '}
          <ArrowDown className={`transition ${showMore ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </section>
  );
};

export default OurWork;
