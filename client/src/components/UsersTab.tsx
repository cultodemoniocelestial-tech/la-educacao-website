import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash2, X, Shield, User } from "lucide-react";

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "Super Admin" | "Admin" | "Editor" | "Viewer";
  status: "Ativo" | "Inativo";
  lastLogin: string;
  permissions: string[];
}

export default function UsersTab() {
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState<AdminUser | null>(null);
  const [users, setUsers] = useState<AdminUser[]>([
    {
      id: "1",
      name: "Administrador Principal",
      email: "admin@laeducacao.com",
      role: "Super Admin",
      status: "Ativo",
      lastLogin: "Hoje às 10:30",
      permissions: ["Tudo"],
    },
    {
      id: "2",
      name: "Gerenciador de Conteúdo",
      email: "editor@laeducacao.com",
      role: "Admin",
      status: "Ativo",
      lastLogin: "Ontem às 14:20",
      permissions: ["Blog", "Cursos", "Depoimentos", "Mensagens"],
    },
  ]);

  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    role: "Super Admin" | "Admin" | "Editor" | "Viewer";
    password: string;
    permissions: string[];
  }>({
    name: "",
    email: "",
    role: "Editor",
    password: "",
    permissions: [],
  });

  const rolePermissions = {
    "Super Admin": ["Tudo"],
    Admin: ["Blog", "Cursos", "Depoimentos", "Mensagens", "Configurações"],
    Editor: ["Blog", "Cursos", "Depoimentos"],
    Viewer: ["Visualizar Blog", "Visualizar Cursos"],
  };

  const handleAddUser = () => {
    if (formData.name && formData.email) {
      const newUser: AdminUser = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        role: formData.role,
        status: "Ativo",
        lastLogin: "Nunca",
        permissions: rolePermissions[formData.role],
      };
      setUsers([...users, newUser]);
      setFormData({ name: "", email: "", role: "Editor", password: "", permissions: [] });
      setShowForm(false);
    }
  };

  const handleDeleteUser = (id: string) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const handleEditUser = (user: AdminUser) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
      password: "",
      permissions: user.permissions,
    });
    setShowForm(true);
  };

  if (showForm) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-black text-white">
            {editingUser ? "Editar Usuário" : "Novo Usuário"}
          </h3>
          <button
            onClick={() => {
              setShowForm(false);
              setEditingUser(null);
              setFormData({ name: "", email: "", role: "Editor", password: "", permissions: [] });
            }}
            className="p-2 rounded-lg hover:bg-slate-700/50 transition-all text-slate-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2">Nome Completo</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Digite o nome"
                className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Digite o email"
                className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2">Função</label>
              <select
                value={formData.role}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    role: e.target.value as any,
                    permissions: rolePermissions[e.target.value as keyof typeof rolePermissions],
                  })
                }
                className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
              >
                <option value="Viewer">Visualizador</option>
                <option value="Editor">Editor</option>
                <option value="Admin">Administrador</option>
                <option value="Super Admin">Super Administrador</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-300 mb-2">Senha</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder={editingUser ? "Deixe em branco para manter" : "Digite a senha"}
                className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-300 mb-3">Permissões</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {formData.permissions.map((perm) => (
                <div
                  key={perm}
                  className="bg-secondary/20 text-secondary px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-2"
                >
                  <Shield className="w-4 h-4" />
                  {perm}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t border-slate-700/50">
            <Button
              onClick={handleAddUser}
              className="flex-1 bg-gradient-to-r from-secondary to-pink-500 text-white font-bold rounded-lg h-10"
            >
              {editingUser ? "Atualizar Usuário" : "Criar Usuário"}
            </Button>
            <Button
              onClick={() => {
                setShowForm(false);
                setEditingUser(null);
                setFormData({ name: "", email: "", role: "Editor", password: "", permissions: [] });
              }}
              className="flex-1 bg-slate-700/50 text-slate-300 font-bold rounded-lg h-10 border border-slate-600/50"
            >
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-black text-white">Gerenciar Usuários</h3>
        <Button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-secondary to-pink-500 text-white font-bold rounded-xl flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Novo Usuário
        </Button>
      </div>

      <div className="space-y-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4 space-y-3 hover:border-secondary/50 transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-grow">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-pink-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                  {user.name.charAt(0)}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2">
                    <p className="text-white font-bold">{user.name}</p>
                    <span
                      className={`text-xs px-2 py-1 rounded font-bold ${
                        user.role === "Super Admin"
                          ? "bg-red-500/20 text-red-400"
                          : user.role === "Admin"
                            ? "bg-purple-500/20 text-purple-400"
                            : user.role === "Editor"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-slate-500/20 text-slate-400"
                      }`}
                    >
                      {user.role}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded font-bold ${
                        user.status === "Ativo"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {user.status}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm">{user.email}</p>
                  <p className="text-slate-500 text-xs mt-1">Último acesso: {user.lastLogin}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {user.permissions.map((perm) => (
                      <span
                        key={perm}
                        className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded"
                      >
                        {perm}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEditUser(user)}
                  className="p-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-all"
                >
                  <Edit className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
