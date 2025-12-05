import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Plus, Image as ImageIcon, Eye, EyeOff } from "lucide-react";

interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  author: string;
  readTime: number;
  published: boolean;
  date: string;
}

interface BlogPostFormProps {
  post?: BlogPost;
  onSave: (post: BlogPost) => void;
  onCancel: () => void;
}

export default function BlogPostForm({ post, onSave, onCancel }: BlogPostFormProps) {
  const [formData, setFormData] = useState<BlogPost>(
    post || {
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      category: "Educação",
      image: "",
      author: "LA Educação",
      readTime: 5,
      published: false,
      date: new Date().toISOString().split("T")[0],
    }
  );

  const [preview, setPreview] = useState(false);
  const [contentPreview, setContentPreview] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
      ...(name === "title" && {
        slug: value
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-"),
      }),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const categories = [
    "Educação",
    "Carreira",
    "Tecnologia",
    "Desenvolvimento Profissional",
    "Dicas",
    "Notícias",
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-black text-white">
          {post ? "Editar Artigo" : "Novo Artigo"}
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
        {/* Title */}
        <div>
          <label className="block text-sm font-bold text-slate-300 mb-2">
            Título do Artigo *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Digite o título do artigo"
            required
            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-sm font-bold text-slate-300 mb-2">
            URL Amigável (Slug) *
          </label>
          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            placeholder="url-do-artigo"
            required
            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
          />
          <p className="text-xs text-slate-400 mt-1">
            Gerado automaticamente a partir do título
          </p>
        </div>

        {/* Grid 2 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Category */}
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">
              Categoria *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Read Time */}
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">
              Tempo de Leitura (minutos) *
            </label>
            <input
              type="number"
              name="readTime"
              value={formData.readTime}
              onChange={handleChange}
              min="1"
              required
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Grid 2 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Author */}
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">
              Autor *
            </label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Nome do autor"
              required
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">
              Data de Publicação *
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

        {/* Image URL */}
        <div>
          <label className="block text-sm font-bold text-slate-300 mb-2">
            URL da Imagem de Capa *
          </label>
          <div className="flex gap-2">
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://exemplo.com/imagem.jpg"
              required
              className="flex-1 bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
            />
            <button
              type="button"
              className="p-3 rounded-xl bg-slate-700/50 border border-slate-600/50 hover:border-secondary/50 text-slate-400 hover:text-secondary transition-all"
            >
              <ImageIcon className="w-5 h-5" />
            </button>
          </div>
          {formData.image && (
            <div className="mt-3 rounded-xl overflow-hidden border border-slate-600/50">
              <img
                src={formData.image}
                alt="Preview"
                className="w-full h-40 object-cover"
              />
            </div>
          )}
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-sm font-bold text-slate-300 mb-2">
            Resumo (Excerpt) *
          </label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            placeholder="Breve descrição do artigo que aparecerá na listagem"
            rows={3}
            required
            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all resize-none"
          />
          <p className="text-xs text-slate-400 mt-1">
            {formData.excerpt.length}/160 caracteres
          </p>
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-bold text-slate-300 mb-2 flex items-center justify-between">
            <span>Conteúdo do Artigo *</span>
            <button
              type="button"
              onClick={() => setContentPreview(!contentPreview)}
              className="flex items-center gap-1 text-xs text-secondary hover:text-pink-400 transition-colors"
            >
              {contentPreview ? (
                <>
                  <EyeOff className="w-4 h-4" />
                  Editar
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  Visualizar
                </>
              )}
            </button>
          </label>

          {!contentPreview ? (
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Digite o conteúdo completo do artigo. Suporta Markdown."
              rows={12}
              required
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all resize-none font-mono text-sm"
            />
          ) : (
            <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6 text-slate-300 min-h-96 prose prose-invert max-w-none">
              <div className="whitespace-pre-wrap break-words">{formData.content}</div>
            </div>
          )}
        </div>

        {/* Published Status */}
        <div className="flex items-center gap-3 bg-slate-700/30 border border-slate-600/50 rounded-xl p-4">
          <input
            type="checkbox"
            name="published"
            checked={formData.published}
            onChange={handleChange}
            className="w-5 h-5 rounded cursor-pointer"
          />
          <label className="text-sm font-bold text-slate-300 cursor-pointer">
            Publicar este artigo imediatamente
          </label>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-6 border-t border-slate-700/50">
          <Button
            type="submit"
            className="flex-1 bg-gradient-to-r from-secondary to-pink-500 text-white font-bold rounded-xl h-12 hover:shadow-lg hover:shadow-secondary/50 transition-all"
          >
            <Plus className="w-5 h-5 mr-2" />
            {post ? "Atualizar Artigo" : "Publicar Artigo"}
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
