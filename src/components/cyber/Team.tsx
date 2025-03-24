const Team = ({ team }) => {
  return (
    <div>
      {/* hear are card data: "id": 9,
    "name": "Daniel Miessler",
    "age": 43,
    "designation": "Project leader of OWASP’s IoT",
    "address": "SF Bay Area, CA",
    "img": "https://randomuser.me/api/portraits/men/9.jpg",
    "salary": 51700 */}
      <div className="card w-96 bg-base-100 shadow-xl p-2 rounded-md">
        <figure className="flex justify-center">
          <img src={team.img} alt="Shoes" className="h-20 w-20 rounded-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{team.name}</h2>
          <p>Designation: {team.designation}</p>
          <p>Age: {team.age}</p>
          <p>Address: {team.address}</p>
          <p>Salary: {team.salary}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
