import ColecaoCliente from "@/backend/db/ColecaoCliente";
import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import { useEffect, useState } from "react";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes() {
  const repo: ClienteRepositorio = new ColecaoCliente();

  const {tabelaVisivel, formularioVisivel, exibirFormulario, exibirTabela} = useTabelaOuForm()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(obterTodos, []);

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      exibirTabela()
    });
  }

  function selecionarMembro(cliente: Cliente) {
    setCliente(cliente);
    exibirFormulario()
  }
  async function novoMembro() {
    await setCliente(Cliente.vazio());
    exibirFormulario()
  }
  async function excluirMembro(cliente: Cliente) {
    await repo.excluir(cliente);
    obterTodos();
  }
  function salvarMembro(cliente: Cliente) {
    repo.salvar(cliente);
    obterTodos();
  }

  return {
    selecionarMembro,
    excluirMembro,
    salvarMembro,
    novoMembro,
    obterTodos,
    clientes,
    cliente,

    exibirFormulario,
    tabelaVisivel,
    exibirTabela,
    formularioVisivel,
  };
}
