import { useState, useEffect } from "react";
import { Testimonial } from "@/data/testimonials";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Star, Quote, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function TestimonialCarousel({
  testimonials,
  autoPlay = true,
  autoPlayInterval = 5000,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);
  const [direction, setDirection] = useState<"left" | "right">("right");

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setDirection("right");
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length, autoPlayInterval]);

  const goToPrevious = () => {
    setDirection("left");
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const currentTestimonial = testimonials[currentIndex];
  const nextTestimonial = testimonials[(currentIndex + 1) % testimonials.length];
  const prevTestimonial = testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length];

  return (
    <div className="w-full">
      {/* Main Carousel */}
      <div className="relative h-full">
        {/* Slides Container */}
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Previous Slide (Hidden on Mobile) */}
            <div className="hidden md:block opacity-40 scale-90 pointer-events-none">
              <TestimonialCard testimonial={prevTestimonial} />
            </div>

            {/* Current Slide */}
            <div className="md:col-span-1 scale-100 opacity-100 transition-all duration-500">
              <TestimonialCard testimonial={currentTestimonial} featured />
            </div>

            {/* Next Slide (Hidden on Mobile) */}
            <div className="hidden md:block opacity-40 scale-90 pointer-events-none">
              <TestimonialCard testimonial={nextTestimonial} />
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <Button
            onClick={goToPrevious}
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-secondary hover:border-secondary transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex items-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-secondary to-pink-500"
                    : "w-2 bg-slate-600 hover:bg-slate-500"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <Button
            onClick={goToNext}
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-secondary hover:border-secondary transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Auto-play Toggle */}
        <div className="flex justify-center">
          <Button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            variant="outline"
            className={cn(
              "border-slate-600 text-slate-300 hover:bg-slate-700/50 transition-all",
              isAutoPlay && "border-secondary text-secondary"
            )}
          >
            {isAutoPlay ? "⏸ Pausar" : "▶ Reproduzir"}
          </Button>
        </div>
      </div>
    </div>
  );
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  featured?: boolean;
}

function TestimonialCard({ testimonial, featured = false }: TestimonialCardProps) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div
      className={cn(
        "group relative h-full transition-all duration-500",
        featured && "scale-100"
      )}
    >
      {/* Glow Effect */}
      {featured && (
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-pink-500/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}

      <div
        className={cn(
          "relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 h-full flex flex-col hover:border-secondary/50 transition-all duration-300",
          featured && "group-hover:shadow-2xl group-hover:shadow-secondary/20 group-hover:scale-105"
        )}
      >
        {/* Quote Icon */}
        <div className="mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-pink-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <Quote className="w-6 h-6" />
          </div>
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 text-yellow-400 fill-yellow-400"
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-slate-300 leading-relaxed mb-6 flex-grow text-sm md:text-base">
          "{testimonial.text}"
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-slate-700 via-secondary/30 to-slate-700 mb-6" />

        {/* Author Info */}
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-secondary/50 group-hover:border-secondary transition-colors">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            {testimonial.videoUrl && (
              <button
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
              >
                <Play className="w-5 h-5 text-white fill-white" />
              </button>
            )}
          </div>

          {/* Name and Details */}
          <div className="flex-grow">
            <h4 className="text-white font-black text-sm md:text-base mb-1">
              {testimonial.name}
            </h4>
            <p className="text-secondary font-bold text-xs mb-1">
              {testimonial.role}
            </p>
            {testimonial.company && (
              <p className="text-slate-400 text-xs">{testimonial.company}</p>
            )}
            <Badge className="mt-2 bg-slate-700/50 text-slate-300 border border-slate-600 text-xs">
              {testimonial.course}
            </Badge>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && testimonial.videoUrl && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-2xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white hover:text-secondary transition-colors"
            >
              ✕
            </button>
            <div className="aspect-video bg-black rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={testimonial.videoUrl}
                title={`Depoimento de ${testimonial.name}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
