import { useState } from "react";
import "./App.css"

type NPC = {};

type Quest = {
  id: number;
  complete: boolean;
  description: string;
  reward: 10 | 20 | 50 | 100 | 500;
  questGiver?: NPC;
};

const QuestList = () => {
  const startQuest: Quest[] = [
    { id: 1, complete: false, description: "Slay the king", reward: 50 },
    {
      id: 2,
      complete: false,
      description: "Collect 10 pink flowers from the meadow",
      reward: 20,
    },
    { id: 3, complete: false, description: "Build a castle", reward: 100 },
  ];

  const [quests, setQuests] = useState(startQuest);

  // to do: checkbox för att toggla complete
  // edit-knapp för att redigera description
  // delete-knapp

  // funktion för completeQuest istället för att ha 2 långa onClick
  /* const handleCompleteClick = () => {
    setQuests(
        quests.map((quest) => {
          if (quest.id===q.id)
          return {...q, complete: true}
          else return quest;
          
        })
      );
  } */

  return (
    <>
      <h1>QuestList</h1>
      <ul>
        {quests.map((q: Quest) => {
          return (
            <li key={q.id}>
              {q.complete ? (
                <span className="complete" onClick={() => {
                    setQuests(
                      quests.map((quest) => {
                        if (quest.id===q.id)
                        return {...q, complete: false}
                        else return quest;
                        
                      })
                    );
                  }}>✅</span>
              ) : (
                <span className="notComplete"
                  onClick={() => {
                    setQuests(
                      quests.map((quest) => {
                        if (quest.id===q.id)
                        return {...q, complete: true}
                        else return quest;
                        
                      })
                    );
                  }}
                >
                  🟩
                </span >
              )}{" "}
              {q.description}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default QuestList;
