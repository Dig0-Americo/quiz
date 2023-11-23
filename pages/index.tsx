import QuestaoModel from "@/model/questao";
import { useEffect, useState } from "react";
import Questionario from "@/components/Questionario"
import { useRouter } from 'next/router'


const BASE_URL = 'https://quiz-chi-steel.vercel.app/api'

export default function Home() {

  const router = useRouter()

  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>()
  const [respostasCertas, setRespostasCertas] = useState<number>(0)

  const carregarIdsDasQuestoes = async () => {
    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsDasQuestoes = await resp.json()
    setIdsDasQuestoes(idsDasQuestoes)
  }

  const carregarQuestao = async (idQuestao: number) => {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await resp.json()
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json)
    setQuestao(novaQuestao)
  }

  useEffect(() => {
    carregarIdsDasQuestoes()
  }, [])

  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
  }, [idsDasQuestoes])

  const questaoRespondida = (questaoRespondida: QuestaoModel) => {
    setQuestao(questaoRespondida)
    const acertou = questaoRespondida.acertou
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0))
  }

  const idProximaPergunta = () => {
      const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1
      return idsDasQuestoes[proximoIndice]
  }

  const irPraProximaQuestao = (proximoId: number) => {
    carregarQuestao(proximoId)
  }

  const Finalizar = () => {
    router.push({
      pathname: '/resultado',
      query: {
        total: idsDasQuestoes.length,
        certas: respostasCertas
      }
    })
  }

  const irPraProximoPasso = () => {
    const proximoId = idProximaPergunta()
    proximoId ? irPraProximaQuestao(proximoId) : Finalizar()
  }



  return (
    questao ?
      <Questionario
        questao={questao}
        ultima={idProximaPergunta() === undefined}
        questaoRespondida={questaoRespondida}
        irPraProximoPasso={irPraProximoPasso}
      />
      : false
  )
}
