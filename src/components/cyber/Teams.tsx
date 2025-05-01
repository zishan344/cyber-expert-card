import axios from "axios";
import { useEffect, useState } from "react";
import Team from "./Team";
import Card from "./Card";
import Header from "./Header";

interface TeamMember {
  id: string | number;
  name: string;
  img: string;
  salary: number;
  age: number;
  designation: string;
  address: string;
}

const Teams = () => {
  const [teams, setTeams] = useState<TeamMember[]>([]);
  const [card, setCard] = useState<TeamMember[]>([]);

  useEffect(() => {
    axios
      .get("expert.json")
      .then((data) => setTeams(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>
        <div>
          <Header />
        </div>
        <div className="grid grid-cols-8 gap-4 justify-between flex-wrap">
          <div className="col-span-5">
            <div className="flex justify-between gap-2 flex-wrap">
              {teams.map((team) => (
                <Team
                  card={card}
                  setCard={setCard}
                  key={team?.id}
                  team={team}
                />
              ))}
            </div>
          </div>

          <div className="col-span-3">
            <Card setCard={setCard} card={card}></Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
