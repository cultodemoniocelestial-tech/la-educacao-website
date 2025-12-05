import { useState } from "react";
import { AnimatedElement } from "@/components/AnimatedElements";
import { videoTestimonials } from "@/data/videoTestimonials";
import { Play, X, Star, TrendingUp } from "lucide-react";

export default function VideoTestimonialsSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonial = videoTestimonials[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % videoTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-slate-900/50" />

      <div className="container relative z-10">
        <AnimatedElement type="fadeInUp">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/30">
              <Star className="w-4 h-4 text-secondary" />
              <span className="text-secondary font-bold text-sm uppercase">Histórias de Sucesso</span>
            </div>
            <h2 className="text-5xl font-black text-white mb-6">Depoimentos de Parceiros</h2>
            <p className="text-xl text-slate-300">
              Conheça as histórias reais de parceiros que transformaram suas vidas através da LA Educação
            </p>
          </div>
        </AnimatedElement>

        {/* Main Video Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <AnimatedElement type="fadeInLeft" duration={800}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl">
                {/* Video Thumbnail */}
                <div className="relative w-full aspect-video bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center cursor-pointer group/video">
                  <img
                    src={testimonial.thumbnail}
                    alt={testimonial.name}
                    className="w-full h-full object-cover group-hover/video:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/50 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-secondary to-pink-500 flex items-center justify-center text-white transform group-hover/video:scale-110 transition-transform">
                      <Play className="w-8 h-8 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 rounded-lg text-white text-sm font-bold">
                    {testimonial.duration}
                  </div>
                </div>

                {/* Quote Section */}
                <div className="p-8 space-y-6">
                  <div>
                    <p className="text-lg text-slate-300 italic mb-4 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-pink-500" />
                      <div>
                        <h3 className="text-white font-black">{testimonial.name}</h3>
                        <p className="text-slate-400 text-sm">{testimonial.role} • {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </AnimatedElement>
          </div>

          {/* Results Section */}
          <div>
            <AnimatedElement type="fadeInRight" duration={800} delay={200}>
            <div className="space-y-4">
              {/* Growth Badge */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl hover:border-secondary/50 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                    <span className="text-slate-400 text-sm font-bold uppercase">Crescimento</span>
                  </div>
                  <p className="text-3xl font-black text-secondary">{testimonial.growth}</p>
                </div>
              </div>

              {/* Results List */}
              <div className="space-y-3">
                {testimonial.results.map((result, idx) => (
                  <AnimatedElement key={idx} type="fadeInUp" delay={idx * 50}>
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-pink-500/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-4 rounded-xl hover:border-secondary/50 transition-all flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <p className="text-slate-300 text-sm leading-relaxed">{result}</p>
                      </div>
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
            </AnimatedElement>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 font-bold">
              {currentIndex + 1} / {videoTestimonials.length}
            </span>
          </div>
          <div className="flex gap-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-white hover:border-secondary/50 hover:bg-slate-700/50 transition-all hover:scale-110"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-pink-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-secondary/50 transition-all hover:scale-110 font-bold"
            >
              →
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {videoTestimonials.map((testimonial, idx) => (
            <AnimatedElement key={testimonial.id} type="fadeInUp" delay={idx * 30}>
              <button
                onClick={() => setCurrentIndex(idx)}
                className={`group relative aspect-square rounded-2xl overflow-hidden transition-all duration-300 ${
                  currentIndex === idx
                    ? "ring-2 ring-secondary scale-105"
                    : "hover:scale-105"
                }`}
              >
                <img
                  src={testimonial.thumbnail}
                  alt={testimonial.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <Play className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity ml-0.5" />
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-xs font-bold truncate">{testimonial.name}</p>
                  <p className="text-slate-300 text-xs truncate">{testimonial.company}</p>
                </div>
              </button>
            </AnimatedElement>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-secondary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video bg-black rounded-2xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={selectedVideo}
                title="Depoimento"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
