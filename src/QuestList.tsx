import { useState } from "react"

type NPC = {}

type Quest = {
    id: number;
    complete: boolean;
    description: string;
    reward: 10 | 20 | 50 | 100 | 500 ; 
    questGiver?: NPC;
}

const QuestList = () => {
    const startQuest: Quest[] = [
        {id: 1, complete: false, description:"Slay the king", reward: 50 },
        {id: 2, complete: false, description:"Collect 10 pink flowers from the meadow", reward: 20},
        {id: 3, complete: false, description:"Build a castle", reward: 100}
    ];

    const [quests, setQuests] = useState(startQuest)

    return (
        <>
            <h1>QuestList</h1>
            <ul>
                {quests.map((q: Quest) => {
                return <li key={q.id}>{q.description}</li>
                })}
            </ul>
        </>
    )
}

export default QuestList