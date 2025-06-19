import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import useClientes from "@/hook/useClientes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const {
    cliente,
    clientes,
    selecionarMembro,
    excluirMembro,
    salvarMembro,
    novoMembro,
    exibirTabela,
    tabelaVisivel,
  } = useClientes();

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} 
        flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white
      `}
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao onClick={novoMembro}>
                Novo Membro
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarMembro}
              clienteExcluido={excluirMembro}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarMembro}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  );
}
