import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Plus, Eye, EyeOff } from "lucide-react";

interface Module {
  id: string;
  title: string;
  lessons: number;
  duration: string;
}

interface Course {
  id?: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  level: string;
  price: number;
  instructor: string;
  image: string;
  duration: string;
  students: number;
  rating: number;
  modules: Module[];
  published: boolean;
  featured: boolean;
  date: string;
}

interface CourseFormProps {
  course?: Course;
  onSave: (course: Course) => void;
  onCancel: () => void;
}

export default function CourseForm({ course, onSave, onCancel }: CourseFormProps) {
  const [formData, setFormData] = useState<Course>(
    course || {
      title: "",
      slug: "",
      description: "",
      category: "Educação",
      level: "Iniciante",
      price: 0,
      instructor: "LA Educação",
      image: "",
      duration: "40h",
      students: 0,
      rating: 5,
      modules: [],
      published: false,
      featured: false,
      date: new Date().toISOString().split("T")[0],
    }
  );

  const [preview, setPreview] = useState(false);
  const [newModule, setNewModule] = useState({ title: "", lessons: 0, duration: "" });

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
            ? parseFloat(value)
            : value,
      ...(name === "title" && {
        slug: value
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-"),
      }),
    });
  };

  const handleAddModule = () => {
    if (newModule.title && newModule.lessons > 0 && newModule.duration) {
      setFormData({
        ...formData,
        modules: [
          ...formData.modules,
          {
            id: Date.now().toString(),
            ...newModule,
          },
        ],
      });
      setNewModule({ title: "", lessons: 0, duration: "" });
    }
  };

  const handleRemoveModule = (id: string) => {
    setFormData({
      ...formData,
      modules: formData.modules.filter((m) => m.id !== id),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const categories = ["Educação", "Tecnologia", "Negócios", "Desenvolvimento Profissional", "Idiomas"];
  const levels = ["Iniciante", "Intermediário", "Avançado", "Especialista"];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-black text-white">
          {course ? "Editar Curso" : "Novo Curso"}
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
        {/* Título */}
        <div>
          <label className="block text-sm font-bold text-slate-300 mb-2">
            Título do Curso *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Digite o título do curso"
            required
            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
          />
        </div>

        {/* Grid 2 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">
              Nível *
            </label>
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
            >
              {levels.map((lv) => (
                <option key={lv} value={lv}>
                  {lv}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Grid 3 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">
              Preço (R$) *
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="0.00"
              step="0.01"
              min="0"
              required
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">
              Duração Total *
            </label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="Ex: 40h"
              required
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-300 mb-2">
              Instrutor *
            </label>
            <input
              type="text"
              name="instructor"
              value={formData.instructor}
              onChange={handleChange}
              placeholder="Nome do instrutor"
              required
              className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Descrição */}
        <div>
          <label className="block text-sm font-bold text-slate-300 mb-2">
            Descrição do Curso *
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Descreva o curso, objetivos e conteúdo"
            rows={4}
            required
            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all resize-none"
          />
        </div>

        {/* Imagem */}
        <div>
          <label className="block text-sm font-bold text-slate-300 mb-2">
            URL da Imagem de Capa *
          </label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://exemplo.com/imagem.jpg"
            required
            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all"
          />
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

        {/* Módulos */}
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6 space-y-4">
          <h4 className="text-lg font-bold text-white">Módulos do Curso</h4>

          {/* Adicionar Módulo */}
          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <input
                type="text"
                value={newModule.title}
                onChange={(e) => setNewModule({ ...newModule, title: e.target.value })}
                placeholder="Título do módulo"
                className="bg-slate-700/50 border border-slate-600/50 rounded-lg px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
              />
              <input
                type="number"
                value={newModule.lessons}
                onChange={(e) =>
                  setNewModule({ ...newModule, lessons: parseInt(e.target.value) || 0 })
                }
                placeholder="Número de aulas"
                min="1"
                className="bg-slate-700/50 border border-slate-600/50 rounded-lg px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
              />
              <input
                type="text"
                value={newModule.duration}
                onChange={(e) => setNewModule({ ...newModule, duration: e.target.value })}
                placeholder="Duração (ex: 10h)"
                className="bg-slate-700/50 border border-slate-600/50 rounded-lg px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
              />
            </div>
            <button
              type="button"
              onClick={handleAddModule}
              className="w-full bg-secondary/20 text-secondary hover:bg-secondary/30 font-bold rounded-lg py-2 transition-all text-sm flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Adicionar Módulo
            </button>
          </div>

          {/* Lista de Módulos */}
          {formData.modules.length > 0 && (
            <div className="space-y-2">
              {formData.modules.map((module) => (
                <div
                  key={module.id}
                  className="bg-slate-800/50 rounded-lg p-3 flex items-center justify-between"
                >
                  <div className="flex-grow">
                    <p className="text-white font-bold text-sm">{module.title}</p>
                    <p className="text-slate-400 text-xs">
                      {module.lessons} aulas • {module.duration}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveModule(module.id)}
                    className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Status */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 bg-slate-700/30 border border-slate-600/50 rounded-xl p-4">
            <input
              type="checkbox"
              name="published"
              checked={formData.published}
              onChange={handleChange}
              className="w-5 h-5 rounded cursor-pointer"
            />
            <label className="text-sm font-bold text-slate-300 cursor-pointer">
              Publicar este curso
            </label>
          </div>

          <div className="flex items-center gap-3 bg-slate-700/30 border border-slate-600/50 rounded-xl p-4">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="w-5 h-5 rounded cursor-pointer"
            />
            <label className="text-sm font-bold text-slate-300 cursor-pointer">
              Destacar este curso
            </label>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-6 border-t border-slate-700/50">
          <Button
            type="submit"
            className="flex-1 bg-gradient-to-r from-secondary to-pink-500 text-white font-bold rounded-xl h-12 hover:shadow-lg hover:shadow-secondary/50 transition-all"
          >
            <Plus className="w-5 h-5 mr-2" />
            {course ? "Atualizar Curso" : "Criar Curso"}
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
