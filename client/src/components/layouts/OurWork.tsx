import React, { useState, useRef } from 'react';
import { ArrowRight, ExternalLink, FolderOpen, ArrowLeft, Eye } from 'lucide-react';

type View = 'ourWork' | 'gallery' | 'album';

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
  liveUrl: string;
  category: string;
  subImages: SubImage[];
}

const GallerySystem: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('ourWork');
  const [selectedAlbum, setSelectedAlbum] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<(SubImage & { index: number }) | null>(null);

  // Separate refs for gallery and album scroll containers
  const galleryScrollRef = useRef<HTMLDivElement | null>(null);
  const albumScrollRef = useRef<HTMLDivElement | null>(null);

  // Mock data for demonstration
  const projects: Project[] = [
    {
      id: 1,
      title: "Capturing City Life",
      description:
        "",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
      liveUrl: "https://payverge-pv.vercel.app",
      category: "PayVerge",
      subImages: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
          title: "NYC Skyline",
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop",
          title: "City Streets",
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&h=400&fit=crop",
          title: "Urban Life",
        },
        {
          id: 4,
          url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=600&h=400&fit=crop",
          title: "Architecture",
        },
        {
          id: 5,
          url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
          title: "City Lights",
        },
        {
          id: 6,
          url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&h=400&fit=crop",
          title: "Metropolitan",
        },
      ],
    },
    {
      id: 2,
      title: "The Tranquility of Wilderness",
      description:
        "",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      liveUrl: "https://payverge-pv.vercel.app",
      category: "SkyNetic",
      subImages: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
          title: "Forest Path",
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
          title: "Mountain Vista",
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&h=400&fit=crop",
          title: "Lake Reflection",
        },
        {
          id: 4,
          url: "https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?w=600&h=400&fit=crop",
          title: "Sunset Hills",
        },
        {
          id: 5,
          url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
          title: "Wild Flowers",
        },
        {
          id: 6,
          url: "https://images.unsplash.com/photo-1482192505345-5655af888989?w=600&h=400&fit=crop",
          title: "Peaceful Stream",
        },
      ],
    },
    {
      id: 3,
      title: "Urban Architecture",
      description:
        "",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      liveUrl: "https://payverge-pv.vercel.app",
      category: "ChronoCommerce",
      subImages: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
          title: "Glass Tower",
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
          title: "Modern Design",
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
          title: "Geometric Patterns",
        },
        {
          id: 4,
          url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop",
          title: "Structural Beauty",
        },
        {
          id: 5,
          url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&h=400&fit=crop",
          title: "Urban Planning",
        },
        {
          id: 6,
          url: "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?w=600&h=400&fit=crop",
          title: "Skyline View",
        },
      ],
    },
    {
      id: 4,
      title: "Portrait Stories",
      description:
        "",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
      liveUrl: "https://payverge-pv.vercel.app",
      category: "GrowthSpace",
      subImages: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop",
          title: "Natural Light",
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
          title: "Studio Portrait",
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=400&fit=crop",
          title: "Candid Moment",
        },
        {
          id: 4,
          url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=400&fit=crop",
          title: "Professional Shot",
        },
        {
          id: 5,
          url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=400&fit=crop",
          title: "Artistic Vision",
        },
        {
          id: 6,
          url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop",
          title: "Character Study",
        },
      ],
    },
  ];

  const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project }) => (
    <div
      className="flex-shrink-0 w-96 rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-500 mx-4 group border-2"
      style={{ backgroundColor: '#EEEEEE', borderColor: '#1E1E1E' }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{ backgroundColor: '#1E1E1E', color: '#EEEEEE' }}
          >
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3
          className="text-xl font-bold mb-3 group-hover:opacity-90 transition-colors"
          style={{ color: '#1E1E1E' }}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-6" style={{ color: '#666666' }}>
          {project.description}
        </p>

        <div className="flex gap-3">
          <button
            onClick={() => {
              setSelectedAlbum(project);
              setCurrentView('album');
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: '#1E1E1E', color: '#EEEEEE' }}
          >
            <FolderOpen size={16} />
            Full Project
          </button>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-300 hover:scale-105"
            style={{ borderColor: '#1E1E1E', color: '#1E1E1E', backgroundColor: 'transparent' }}
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );

  const AlbumCard: React.FC<{ project: Project }> = ({ project }) => (
    <div
      className="rounded-xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-500 group border-2 cursor-pointer"
      style={{ backgroundColor: '#EEEEEE', borderColor: '#1E1E1E' }}
      onClick={() => {
        setSelectedAlbum(project);
        setCurrentView('album');
      }}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{ backgroundColor: '#1E1E1E', color: '#EEEEEE' }}
          >
            {project.category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <span
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{ backgroundColor: 'rgba(30, 30, 30, 0.8)', color: '#EEEEEE' }}
          >
            {project.subImages.length} Photos
          </span>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-2 text-white font-medium">
              <Eye size={20} />
              View Album
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3
          className="text-xl font-bold mb-3 group-hover:opacity-90 transition-colors"
          style={{ color: '#1E1E1E' }}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: '#666666' }}>
          {project.description}
        </p>
      </div>
    </div>
  );

  const ImageModal: React.FC<{
    image: SubImage & { index: number };
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
  }> = ({ image, onClose, onPrev, onNext }) => (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(30, 30, 30, 0.95)' }}
    >
      <div className="relative max-w-4xl max-h-full">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:opacity-70 transition-opacity"
          aria-label="Close image"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <img
          src={image.url}
          alt={image.title}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
        />

        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
          <h3 className="text-white text-lg font-medium mb-2">{image.title}</h3>
          <div className="flex justify-center gap-4">
            <button
              onClick={onPrev}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-300"
              style={{ backgroundColor: '#1E1E1E', color: '#EEEEEE' }}
            >
              <ArrowLeft size={16} />
              Previous
            </button>
            <button
              onClick={onNext}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-300"
              style={{ backgroundColor: '#1E1E1E', color: '#EEEEEE' }}
            >
              Next
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Our Work Section (Auto-scrolling)
  if (currentView === 'ourWork') {
    return (
      <>
        <style>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-scroll-continuous {
            animation: scroll-left 60s linear infinite;
          }

          .animate-scroll-continuous:hover {
            animation-play-state: paused;
          }

          .scrolling-wrapper {
            width: calc(400px * ${projects.length});
          }
        `}</style>

        <section className="py-20 overflow-hidden" style={{ backgroundColor: '#EEEEEE' }}>
          <div className="container mx-auto px-6 mb-12">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1E1E1E' }}>
                Our Work
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: '#666666' }}>
                Discover our portfolio of creative projects and innovative solutions
              </p>
            </div>
          </div>

          {/* Auto-scrolling container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-continuous scrolling-wrapper">
              {/* First set of projects */}
              {projects.map((project, index) => (
                <ProjectCard key={`first-${project.id}`} project={project} index={index} />
              ))}

              {/* Duplicate set for seamless loop */}
              {projects.map((project, index) => (
                <ProjectCard key={`second-${project.id}`} project={project} index={index} />
              ))}
            </div>

            {/* Gradient overlays for smooth edges */}
            <div
              className="absolute top-0 left-0 w-32 h-full pointer-events-none z-10"
              style={{
                background: 'linear-gradient(to right, #EEEEEE, transparent)',
              }}
            />
            <div
              className="absolute top-0 right-0 w-32 h-full pointer-events-none z-10"
              style={{
                background: 'linear-gradient(to left, #EEEEEE, transparent)',
              }}
            />
          </div>

          {/* View All Projects CTA */}
          <div className="container mx-auto px-6 mt-16 text-center">
            <button
              onClick={() => setCurrentView('gallery')}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              style={{ backgroundColor: '#1E1E1E', color: '#EEEEEE' }}
            >
              View All Projects
              <ArrowRight size={20} />
            </button>
          </div>
        </section>
      </>
    );
  }

  // Gallery View (Single Row with Left/Right Arrows)
  if (currentView === 'gallery') {
    const scrollLeft = () => {
      if (galleryScrollRef.current) {
        galleryScrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
      }
    };

    const scrollRight = () => {
      if (galleryScrollRef.current) {
        galleryScrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
      }
    };

    return (
      <section className="py-20" style={{ backgroundColor: '#EEEEEE' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1E1E1E' }}>
              Project Gallery
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#666666' }}>
              Explore our complete collection of creative projects. Click on any album to view the full series.
            </p>
          </div>

          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg hover:scale-105 transition"
              style={{ backgroundColor: '#1E1E1E', color: '#EEEEEE' }}
              aria-label="Scroll left"
            >
              <ArrowLeft size={20} />
            </button>

            {/* Horizontal scroll container */}
            <div
              ref={galleryScrollRef}
              className="flex overflow-x-auto gap-6 scroll-smooth px-6"
            >
              {projects.map((project) => (
                <div key={project.id} className="flex-shrink-0 w-96">
                  <AlbumCard project={project} />
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg hover:scale-105 transition"
              style={{ backgroundColor: '#1E1E1E', color: '#EEEEEE' }}
              aria-label="Scroll right"
            >
              <ArrowRight size={20} />
            </button>

            {/* Optional side gradients for nicer edges */}
            <div
              className="pointer-events-none absolute left-0 top-0 h-full w-16"
              style={{ background: 'linear-gradient(to right, #EEEEEE, transparent)' }}
            />
            <div
              className="pointer-events-none absolute right-0 top-0 h-full w-16"
              style={{ background: 'linear-gradient(to left, #EEEEEE, transparent)' }}
            />
          </div>

          {/* Back button */}
          <div className="container mx-auto px-6 mt-16 text-center">
            <button
              onClick={() => setCurrentView('ourWork')}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              style={{ backgroundColor: '#1E1E1E', color: '#EEEEEE' }}
            >
              <ArrowLeft size={20} />
              Back to Our Work
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Album View (Individual Album) - horizontal scroll + arrows (like gallery)
  if (currentView === 'album' && selectedAlbum) {
    const handleImageClick = (image: SubImage, index: number) => {
      setSelectedImage({ ...image, index });
    };

    const scrollLeft = () => {
      if (albumScrollRef.current) {
        albumScrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
      }
    };

    const scrollRight = () => {
      if (albumScrollRef.current) {
        albumScrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
      }
    };

    const handleNextImage = () => {
      if (!selectedImage) return;
      const nextIndex = (selectedImage.index + 1) % selectedAlbum.subImages.length;
      setSelectedImage({ ...selectedAlbum.subImages[nextIndex], index: nextIndex });
    };

    const handlePrevImage = () => {
      if (!selectedImage) return;
      const prevIndex =
        selectedImage.index === 0 ? selectedAlbum.subImages.length - 1 : selectedImage.index - 1;
      setSelectedImage({ ...selectedAlbum.subImages[prevIndex], index: prevIndex });
    };

    return (
      <>
        <section className="py-20" style={{ backgroundColor: '#EEEEEE' }}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{ backgroundColor: '#1E1E1E', color: '#EEEEEE' }}
                >
                  {selectedAlbum.category}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1E1E1E' }}>
                {selectedAlbum.title}
              </h2>
              <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: '#666666' }}>
                {selectedAlbum.description}
              </p>
            </div>

            <div className="relative">
              {/* Left Arrow */}
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg hover:scale-105 transition"
                style={{ backgroundColor: '#1E1E1E', color: '#EEEEEE' }}
                aria-label="Scroll album left"
              >
                <ArrowLeft size={20} />
              </button>

              {/* Scrollable row of images */}
              <div
                ref={albumScrollRef}
                className="flex overflow-x-auto gap-6 scroll-smooth px-6"
              >
                {selectedAlbum.subImages.map((image, index) => (
                  <div
                    key={image.id}
                    className="flex-shrink-0 w-96 relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                    onClick={() => handleImageClick(image, index)}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-2 text-white font-medium">
                          <Eye size={20} />
                          View Image
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                      <h3 className="text-white text-sm font-medium">{image.title}</h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg hover:scale-105 transition"
                style={{ backgroundColor: '#1E1E1E', color: '#EEEEEE' }}
                aria-label="Scroll album right"
              >
                <ArrowRight size={20} />
              </button>

              {/* Side gradients */}
              <div
                className="pointer-events-none absolute left-0 top-0 h-full w-16"
                style={{ background: 'linear-gradient(to right, #EEEEEE, transparent)' }}
              />
              <div
                className="pointer-events-none absolute right-0 top-0 h-full w-16"
                style={{ background: 'linear-gradient(to left, #EEEEEE, transparent)' }}
              />
            </div>

            {/* Back button */}
            <div className="container mx-auto px-6 mt-16 text-center">
              <button
                onClick={() => setCurrentView('gallery')}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                style={{ backgroundColor: '#1E1E1E', color: '#EEEEEE' }}
              >
                <ArrowLeft size={20} />
                Back to Gallery
              </button>
            </div>
          </div>
        </section>

        {selectedImage && (
          <ImageModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
            onNext={handleNextImage}
            onPrev={handlePrevImage}
          />
        )}
      </>
    );
  }

  return null;
};

export default GallerySystem;
