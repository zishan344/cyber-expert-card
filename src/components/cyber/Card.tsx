interface Team {
  id: string | number;
  name: string;
  img: string;
  salary: number;
  age: number;
  designation: string;
  address: string;
}

interface CardProps {
  card: Team[];
  setCard: React.Dispatch<React.SetStateAction<Team[]>>;
}

const Card = ({ card, setCard }: CardProps) => {
  const totalCost = card.reduce((acc, team) => acc + team.salary, 0);
  const handleConfirm = () => {
    alert("Your team has been confirmed!");
    setCard([]);
  };
  return (
    <div>
      <div className="flex fixed overflow-y-auto flex-col gap-2 shadow-xl p-4 rounded-lg bg-gray-300 ">
        <div className="text-center">
          <h2>Expert Added: {card.length}</h2>
          <h2>Total Cost: ${totalCost}</h2>
        </div>

        <div className="flex flex-col gap-2 ">
          {card.map((team) => (
            <div key={team.id} className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <img
                  src={team.img}
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-indigo-400"
                />
                <h2>{team.name}</h2>
              </div>
              <h2>{team.salary}</h2>
            </div>
          ))}
          <div>
            <button
              onClick={handleConfirm}
              className="w-full bg-indigo-300 rounded text-xl hover:bg-indigo-400 px-2 py-1 font-semibold *:hover:shadow-lg transition duration-300 ease-in-out cursor-pointer ">
              Confirm List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
