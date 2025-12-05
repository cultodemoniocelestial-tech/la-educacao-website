import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Plus, Video as VideoIcon, Eye, EyeOff, Star } from "lucide-react";

interface VideoTestimonial {
  id?: string;
  name: string;
  company: string;
  role: string;
  videoUrl: string;
  thumbnailUrl: string;
  quote: string;
  rating: number;
  duration: string;
  featured: boolean;
  date: string;
}

interface VideoTestimonialFormProps {
  testimonial?: VideoTestimonial;
  onSave: (testimonial: VideoTestimonial) => void;
  onCancel: () => void;
}

export default function VideoTestimonialForm({
  testimonial,
  onSave,
  onCancel,
}: VideoTestimonialFormProps) {
  const [formData, setFormData] = useState<VideoTestimonial>(
    testimonial || {
      name: "",
      company: "",
      role: "",
      videoUrl: "",
      thumbnailUrl: "",
      quote: "",
      rating: 5,
      duration: "5:00",
      featured: false,
      date: new Date().toISOString().split("T")[0],
    }
  );

  const [preview, setPreview] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : type === "number"
            ? parseInt(value)
            : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-black text-white">
          {testimonial ? "Editar Depoimento" : "Novo Depoimento"}
        </h3>
        <button
          onClick={onCancel}
          className="p-2 rounded-lg hover:bg-slate-700/50 transition-all text-slate-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Grid 2 Colunas - Nome e Empresa */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">
              Nome do Parceiro *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ex: Carlos Silva"
              required
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">
              Empresa/Instituição *
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Ex: Instituto Silva"
              required
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Grid 2 Colunas - Cargo e Duração */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">
              Cargo/Posição *
            </label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Ex: Diretor Educacional"
              required
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">
              Duração do Vídeo *
            </label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="Ex: 5:30"
              required
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Video URL */}
        <div>
          <label className="block text-sm font-bold text-slate-300 mb-2">
            URL do Vídeo (YouTube/Vimeo) *
          </label>
          <div className="flex gap-2">
            <input
              type="url"
              name="videoUrl"
              value={formData.videoUrl}
              onChange={handleChange}
              placeholder="https://youtube.com/watch?v=..."
              required
              className="flex-1 bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
            />
            <button
              type="button"
              className="p-3 rounded-xl bg-slate-700/50 border border-slate-600/50 hover:border-secondary/50 text-slate-400 hover:text-secondary transition-all"
            >
              <VideoIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Thumbnail URL */}
        <div>
          <label className="block text-sm font-bold text-slate-300 mb-2">
            URL da Thumbnail *
          </label>
          <input
            type="url"
            name="thumbnailUrl"
            value={formData.thumbnailUrl}
            onChange={handleChange}
            placeholder="https://exemplo.com/thumbnail.jpg"
            required
            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
          />
          {formData.thumbnailUrl && (
            <div className="mt-3 rounded-xl overflow-hidden border border-slate-600/50">
              <img
                src={formData.thumbnailUrl}
                alt="Thumbnail Preview"
                className="w-full h-40 object-cover"
              />
            </div>
          )}
        </div>

        {/* Quote */}
        <div>
          <label className="block text-sm font-bold text-slate-300 mb-2">
            Citação/Depoimento *
          </label>
          <textarea
            name="quote"
            value={formData.quote}
            onChange={handleChange}
            placeholder="Digite a citação principal do depoimento"
            rows={4}
            required
            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all resize-none"
          />
          <p className="text-xs text-slate-400 mt-1">
            {formData.quote.length}/200 caracteres
          </p>
        </div>

        {/* Grid 2 Colunas - Rating e Data */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">
              Avaliação (Estrelas) *
            </label>
            <select
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
            >
              <option value="5">⭐⭐⭐⭐⭐ (5 estrelas)</option>
              <option value="4">⭐⭐⭐⭐ (4 estrelas)</option>
              <option value="3">⭐⭐⭐ (3 estrelas)</option>
              <option value="2">⭐⭐ (2 estrelas)</option>
              <option value="1">⭐ (1 estrela)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">
              Data do Depoimento *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Featured Status */}
        <div className="flex items-center gap-3 bg-slate-700/30 border border-slate-600/50 rounded-xl p-4">
          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
            className="w-5 h-5 rounded cursor-pointer"
          />
          <label className="text-sm font-bold text-slate-300 cursor-pointer flex items-center gap-2">
            <Star className="w-4 h-4 text-secondary" />
            Destacar este depoimento
          </label>
        </div>

        {/* Preview Section */}
        {preview && (
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6 space-y-4">
            <h4 className="text-lg font-bold text-white mb-4">Preview do Depoimento</h4>
            <div className="bg-slate-800/50 rounded-xl p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-pink-500 flex-shrink-0" />
                <div className="flex-grow">
                  <p className="text-white font-bold">{formData.name}</p>
                  <p className="text-slate-400 text-sm">{formData.role} • {formData.company}</p>
                  <div className="flex gap-1 mt-2">
                    {Array(formData.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                      ))}
                  </div>
                </div>
              </div>
              <p className="text-slate-300 italic">"{formData.quote}"</p>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3 pt-6 border-t border-slate-700/50">
          <Button
            type="submit"
            className="flex-1 bg-gradient-to-r from-secondary to-pink-500 text-white font-bold rounded-xl h-12 hover:shadow-lg hover:shadow-secondary/50 transition-all"
          >
            <Plus className="w-5 h-5 mr-2" />
            {testimonial ? "Atualizar Depoimento" : "Adicionar Depoimento"}
          </Button>
          <Button
            type="button"
            onClick={() => setPreview(!preview)}
            className="flex-1 bg-slate-700/50 text-slate-300 font-bold rounded-xl h-12 hover:bg-slate-700 transition-all border border-slate-600/50"
          >
            {preview ? (
              <>
                <EyeOff className="w-5 h-5 mr-2" />
                Fechar Preview
              </>
            ) : (
              <>
                <Eye className="w-5 h-5 mr-2" />
                Ver Preview
              </>
            )}
          </Button>
          <Button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-slate-700/50 text-slate-300 font-bold rounded-xl h-12 hover:bg-slate-700 transition-all border border-slate-600/50"
          >
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
}
