import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ChevronRight } from "lucide-react";

interface Message {
  id: string;
  name: string;
  email: string;
  type: string;
  message: string;
  date: string;
  read: boolean;
}

export default function MessagesTab() {
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const messages: Message[] = [
    {
      id: "1",
      name: "Maria Silva",
      email: "maria@email.com",
      type: "Dúvida",
      message: "Gostaria de saber mais sobre o curso de Python",
      date: "15/12/2024",
      read: false,
    },
    {
      id: "2",
      name: "João Santos",
      email: "joao@email.com",
      type: "Reclamação",
      message: "Tive problemas ao acessar o curso",
      date: "14/12/2024",
      read: true,
    },
    {
      id: "3",
      name: "Ana Costa",
      email: "ana@email.com",
      type: "Sugestão",
      message: "Vocês poderiam adicionar cursos de IA?",
      date: "13/12/2024",
      read: true,
    },
  ];

  if (selectedMessage) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-black text-white">
            Mensagem de {selectedMessage.name}
          </h3>
          <button
            onClick={() => setSelectedMessage(null)}
            className="p-2 rounded-lg hover:bg-slate-700/50 transition-all text-slate-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-slate-400 text-sm">Nome</p>
              <p className="text-white font-bold">{selectedMessage.name}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Email</p>
              <p className="text-white font-bold">{selectedMessage.email}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Tipo</p>
              <p className="text-white font-bold">{selectedMessage.type}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Data</p>
              <p className="text-white font-bold">{selectedMessage.date}</p>
            </div>
          </div>

          <div>
            <p className="text-slate-400 text-sm mb-2">Mensagem</p>
            <p className="text-white bg-slate-700/30 rounded-lg p-4">
              {selectedMessage.message}
            </p>
          </div>

          <div className="flex gap-3">
            <Button className="flex-1 bg-gradient-to-r from-secondary to-pink-500 text-white font-bold rounded-xl">
              Responder
            </Button>
            <Button className="flex-1 bg-red-500/20 text-red-400 font-bold rounded-xl border border-red-500/50">
              Deletar
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-black text-white">Mensagens</h3>
        <div className="text-sm text-slate-400">
          {messages.filter((m) => !m.read).length} não lidas
        </div>
      </div>

      <div className="space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            onClick={() => setSelectedMessage(msg)}
            className={`bg-slate-800/50 backdrop-blur-xl border rounded-xl p-4 cursor-pointer transition-all ${
              msg.read
                ? "border-slate-700/50 hover:border-secondary/50"
                : "border-secondary/50 bg-secondary/5"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-grow">
                <div className="flex items-center gap-2">
                  <p className="text-white font-bold">{msg.name}</p>
                  <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">
                    {msg.type}
                  </span>
                  {!msg.read && (
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                  )}
                </div>
                <p className="text-slate-400 text-sm">{msg.email}</p>
                <p className="text-slate-300 mt-2">{msg.message}</p>
                <p className="text-slate-500 text-xs mt-2">{msg.date}</p>
              </div>
              <button className="p-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
