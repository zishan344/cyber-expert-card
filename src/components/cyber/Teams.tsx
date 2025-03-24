import axios from "axios";
import { useEffect, useState } from "react";
import Team from "./Team";
import Card from "./Card";

const Teams = () => {
  const [teams, setTeams] = useState([]);

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
          <h2>Header</h2>
        </div>
        <div className="grid grid-cols-7 gap-2">
          <div className="col-span-5">
            <div className="flex justify-between gap-3 flex-wrap">
              {teams.map((team) => (
                <Team key={team?.id} team={team} />
              ))}
            </div>
          </div>

          <div className="col-span-2">
            <Card></Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
