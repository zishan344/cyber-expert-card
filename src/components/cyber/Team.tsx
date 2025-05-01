interface Team {
  id: string | number;
  name: string;
  img: string;
  salary: number;
  age: number;
  designation: string;
  address: string;
}

interface TeamProps {
  team: Team;
  card: Team[];
  setCard: React.Dispatch<React.SetStateAction<Team[]>>;
}

const Team = ({ team, card, setCard }: TeamProps) => {
  const handelAddToCard = (team: Team) => {
    const newCard = [...card, team];
    setCard(newCard);
  };
  return (
    <div>
      {/* hear are card data: "id": 9,
    "name": "Daniel Miessler",
    "age": 43,
    "designation": "Project leader of OWASP’s IoT",
    "address": "SF Bay Area, CA",
    "img": "https://randomuser.me/api/portraits/men/9.jpg",
    "salary": 51700 */}
      <div className="card w-96 bg-base-100 shadow-xl p-4 rounded-lg bg-gray-300 ">
        <figure className="flex justify-center">
          <img src={team.img} alt="Shoes" className="h-30 w-30 rounded-full" />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title text-center font-bold text-xl">
            {team.name}
          </h2>
          <p>Designation: {team.designation}</p>
          <p>Age: {team.age}</p>
          <p>Address: {team.address}</p>
          <p>Salary: {team.salary}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => handelAddToCard(team)}
              className="bg-indigo-300 rounded text-xl hover:bg-indigo-400 px-2 py-1 font-semibold *:hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
              Add List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
