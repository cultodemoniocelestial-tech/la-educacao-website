import { useState, useMemo } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { courses, categories, levels, Course } from "@/data/courses";
import { AnimatedElement } from "@/components/AnimatedElements";
import { Search, Star, Users, Clock, BookOpen, ArrowRight, Filter, X } from "lucide-react";

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedLevel, setSelectedLevel] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filtrar e ordenar cursos
  const filteredCourses = useMemo(() => {
    let result = courses.filter((course) => {
      const matchCategory = selectedCategory === "Todos" || course.category === selectedCategory;
      const matchLevel = selectedLevel === "Todos" || course.level === selectedLevel;
      const matchSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchLevel && matchSearch;
    });

    // Ordenar
    if (sortBy === "popular") {
      result.sort((a, b) => b.students - a.students);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, selectedLevel, searchTerm, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 font-sans">
      <Header />

      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />
          
          <div className="container relative z-10">
            <AnimatedElement type="fadeInUp" duration={600}>
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
                  Catálogo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-pink-400">Cursos</span>
                </h1>
                <p className="text-xl text-slate-300">
                  Escolha entre mais de 4.000 cursos reconhecidos pelo MEC e transforme sua carreira.
                </p>
              </div>
            </AnimatedElement>

            {/* Search Bar */}
            <AnimatedElement type="fadeInUp" duration={600} delay={100}>
              <div className="relative max-w-2xl mx-auto mb-12">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar cursos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl pl-12 pr-6 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent transition-all text-lg"
                />
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* Filters and Results */}
        <section className="py-12">
          <div className="container">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar Filters - Desktop */}
              <div className="hidden lg:block">
              <AnimatedElement type="fadeInLeft" duration={600}>
                <div className="sticky top-32 space-y-8">
                  {/* Category Filter */}
                  <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl">
                    <h3 className="text-white font-black text-lg mb-6 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-secondary to-pink-500 rounded-full" />
                      Categoria
                    </h3>
                    <div className="space-y-3">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                            selectedCategory === cat
                              ? "bg-gradient-to-r from-secondary to-pink-500 text-white shadow-lg shadow-secondary/30"
                              : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Level Filter */}
                  <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl">
                    <h3 className="text-white font-black text-lg mb-6 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-secondary to-pink-500 rounded-full" />
                      Nível
                    </h3>
                    <div className="space-y-3">
                      {levels.map((level) => (
                        <button
                          key={level}
                          onClick={() => setSelectedLevel(level)}
                          className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                            selectedLevel === level
                              ? "bg-gradient-to-r from-secondary to-pink-500 text-white shadow-lg shadow-secondary/30"
                              : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                          }`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sort Filter */}
                  <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl">
                    <h3 className="text-white font-black text-lg mb-6 flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-secondary to-pink-500 rounded-full" />
                      Ordenar
                    </h3>
                    <div className="space-y-3">
                      {[
                        { value: "popular", label: "Mais Popular" },
                        { value: "rating", label: "Melhor Avaliado" },
                        { value: "price-low", label: "Menor Preço" },
                        { value: "price-high", label: "Maior Preço" }
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setSortBy(option.value)}
                          className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                            sortBy === option.value
                              ? "bg-gradient-to-r from-secondary to-pink-500 text-white shadow-lg shadow-secondary/30"
                              : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedElement>
              </div>

              {/* Mobile Filters Button */}
              <div className="lg:hidden mb-6">
                <Button
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="w-full bg-gradient-to-r from-secondary to-pink-500 text-white font-bold rounded-xl gap-2"
                >
                  <Filter className="w-5 h-5" />
                  {showMobileFilters ? "Fechar Filtros" : "Abrir Filtros"}
                </Button>

                {showMobileFilters && (
                  <div className="mt-4 space-y-4 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl">
                    <div>
                      <h4 className="text-white font-bold mb-3">Categoria</h4>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                          <button
                            key={cat}
                            onClick={() => {
                              setSelectedCategory(cat);
                              setShowMobileFilters(false);
                            }}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${
                              selectedCategory === cat
                                ? "bg-gradient-to-r from-secondary to-pink-500 text-white"
                                : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-3">Nível</h4>
                      <div className="flex flex-wrap gap-2">
                        {levels.map((level) => (
                          <button
                            key={level}
                            onClick={() => {
                              setSelectedLevel(level);
                              setShowMobileFilters(false);
                            }}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${
                              selectedLevel === level
                                ? "bg-gradient-to-r from-secondary to-pink-500 text-white"
                                : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                            }`}
                          >
                            {level}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Courses Grid */}
              <div className="lg:col-span-3">
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-white font-black text-2xl">
                    {filteredCourses.length} {filteredCourses.length === 1 ? "Curso" : "Cursos"} encontrados
                  </h2>
                </div>

                {filteredCourses.length > 0 ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    {filteredCourses.map((course, idx) => (
                      <CourseCard key={course.id} course={course} delay={idx * 50} />
                    ))}
                  </div>
                ) : (
                  <AnimatedElement type="fadeInUp">
                    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-12 text-center">
                      <BookOpen className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                      <h3 className="text-white font-black text-2xl mb-2">Nenhum curso encontrado</h3>
                      <p className="text-slate-400 mb-6">Tente ajustar seus filtros ou termo de busca</p>
                      <Button
                        onClick={() => {
                          setSelectedCategory("Todos");
                          setSelectedLevel("Todos");
                          setSearchTerm("");
                        }}
                        className="bg-gradient-to-r from-secondary to-pink-500 text-white font-bold"
                      >
                        Limpar Filtros
                      </Button>
                    </div>
                  </AnimatedElement>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function CourseCard({ course, delay }: { course: Course; delay: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedElement type="fadeInUp" delay={delay}>
      <div
        className="group relative h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-secondary/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden h-full flex flex-col hover:border-secondary/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-secondary/20">
          {/* Image Container */}
          <div className="relative overflow-hidden h-48 bg-gradient-to-br from-slate-700 to-slate-800">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />

            {/* Badge */}
            {course.badge && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-gradient-to-r from-secondary to-pink-500 text-white font-bold shadow-lg">
                  {course.badge}
                </Badge>
              </div>
            )}

            {/* Level Badge */}
            <div className="absolute top-4 left-4">
              <Badge variant="outline" className="bg-slate-900/80 backdrop-blur text-slate-200 border-slate-600 font-bold">
                {course.level}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow p-6 flex flex-col">
            {/* Category */}
            <div className="mb-3">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                {course.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-black text-white mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-pink-400 transition-all">
              {course.title}
            </h3>

            {/* Description */}
            <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">
              {course.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-6 py-4 border-t border-b border-slate-700/50">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-white font-bold text-sm">{course.rating}</span>
                </div>
                <span className="text-xs text-slate-500">Avaliação</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Users className="w-4 h-4 text-secondary" />
                  <span className="text-white font-bold text-sm">{(course.students / 1000).toFixed(1)}k</span>
                </div>
                <span className="text-xs text-slate-500">Alunos</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span className="text-white font-bold text-sm">{course.modules}</span>
                </div>
                <span className="text-xs text-slate-500">Módulos</span>
              </div>
            </div>

            {/* Instructor */}
            <div className="mb-6 pb-4 border-b border-slate-700/50">
              <p className="text-xs text-slate-500 mb-1">Instrutor</p>
              <p className="text-sm text-slate-300 font-medium">{course.instructor}</p>
            </div>

            {/* Price and Button */}
            <div className="flex items-center justify-between mt-auto">
              <div>
                <span className="text-slate-500 text-xs">A partir de</span>
                <div className="text-2xl font-black text-white">
                  R$ {course.price.toLocaleString("pt-BR")}
                </div>
              </div>
              <Link href={`/cursos/${course.id}`}>
                <Button className="bg-gradient-to-r from-secondary to-pink-500 text-white font-bold rounded-xl p-3 h-auto hover:shadow-lg hover:shadow-secondary/50 transition-all group-hover:scale-110 duration-300">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatedElement>
  );
}
