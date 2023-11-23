import { embaralhar } from "@/functions/arrays"
import questoes from "@/pages/api/bancoDeQuestoes"

const questionario = (req: any, res: any) => {
    const ids = questoes.map(questoes => questoes.id)
    res.status(200).json(embaralhar(ids))
}

export default questionario