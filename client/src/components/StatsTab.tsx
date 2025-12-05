import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TrendingUp, Users, BookOpen, DollarSign } from "lucide-react";

const monthlyData = [
  { month: "Jan", visitantes: 2400, inscritos: 1200, vendas: 8400 },
  { month: "Fev", visitantes: 3210, inscritos: 1500, vendas: 9800 },
  { month: "Mar", visitantes: 2290, inscritos: 1100, vendas: 7200 },
  { month: "Abr", visitantes: 2000, inscritos: 1800, vendas: 9200 },
  { month: "Mai", visitantes: 2181, inscritos: 1390, vendas: 8900 },
  { month: "Jun", visitantes: 2500, inscritos: 2100, vendas: 10500 },
];

const courseData = [
  { name: "Python", value: 245, fill: "#ec4899" },
  { name: "Marketing", value: 189, fill: "#8b5cf6" },
  { name: "Gestão", value: 156, fill: "#06b6d4" },
  { name: "Outros", value: 210, fill: "#f59e0b" },
];

const COLORS = ["#ec4899", "#8b5cf6", "#06b6d4", "#f59e0b"];

export default function StatsTab() {
  const stats = [
    {
      label: "Total de Visitantes",
      value: "14,581",
      change: "+12.5%",
      icon: Users,
      color: "from-secondary to-pink-500",
    },
    {
      label: "Alunos Inscritos",
      value: "8,234",
      change: "+8.2%",
      icon: BookOpen,
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Receita Total",
      value: "R$ 54,230",
      change: "+23.1%",
      icon: DollarSign,
      color: "from-cyan-500 to-blue-500",
    },
    {
      label: "Taxa de Conversão",
      value: "5.64%",
      change: "+2.3%",
      icon: TrendingUp,
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-black text-white">Relatórios e Estatísticas</h3>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 space-y-3 hover:border-secondary/50 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded">
                  {stat.change}
                </span>
              </div>
              <div>
                <p className="text-slate-400 text-sm">{stat.label}</p>
                <p className="text-white text-2xl font-black">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart - Visitantes */}
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
          <h4 className="text-lg font-bold text-white mb-4">Visitantes vs Inscritos</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #475569",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "#fff" }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="visitantes"
                stroke="#ec4899"
                strokeWidth={2}
                dot={{ fill: "#ec4899", r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="inscritos"
                stroke="#8b5cf6"
                strokeWidth={2}
                dot={{ fill: "#8b5cf6", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart - Vendas */}
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
          <h4 className="text-lg font-bold text-white mb-4">Vendas Mensais</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #475569",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "#fff" }}
              />
              <Bar dataKey="vendas" fill="#06b6d4" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart - Cursos */}
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
          <h4 className="text-lg font-bold text-white mb-4">Distribuição de Alunos por Curso</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={courseData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {courseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #475569",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "#fff" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Top Courses Table */}
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
          <h4 className="text-lg font-bold text-white mb-4">Cursos Mais Populares</h4>
          <div className="space-y-3">
            {[
              { name: "Python para Iniciantes", students: 245, revenue: "R$ 12,250" },
              { name: "Marketing Digital", students: 189, revenue: "R$ 9,450" },
              { name: "Gestão de Projetos", students: 156, revenue: "R$ 7,800" },
              { name: "Web Development", students: 142, revenue: "R$ 7,100" },
            ].map((course, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all"
              >
                <div>
                  <p className="text-white font-bold text-sm">{course.name}</p>
                  <p className="text-slate-400 text-xs">{course.students} alunos</p>
                </div>
                <p className="text-secondary font-bold text-sm">{course.revenue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Export Button */}
      <div className="flex gap-3">
        <button className="flex-1 bg-gradient-to-r from-secondary to-pink-500 text-white font-bold rounded-xl py-3 hover:shadow-lg hover:shadow-secondary/50 transition-all">
          Exportar Relatório (PDF)
        </button>
        <button className="flex-1 bg-slate-700/50 text-slate-300 font-bold rounded-xl py-3 border border-slate-600/50 hover:bg-slate-700 transition-all">
          Exportar Dados (CSV)
        </button>
      </div>
    </div>
  );
}
