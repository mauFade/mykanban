import Header from "../components/header";
import Kanban from "../components/kanban";

const Home = () => {
  return (
    <div className="bg-stoneGray h-full flex flex-col items-center">
      <Header />
      <div className="w-full md:w-4/5 h-full bg-darkCyan border-x border-lightCyan flex flex-row justify-around">
        <article className="bg-lightCyan w-60">
          <Kanban
            title="First"
            description="Testing this"
            status="TO DO"
            date="01/08/2022"
          />
        </article>
        <article className="bg-lightCyan w-60">
          <Kanban
            title="First"
            description="Testing this"
            status="DOING"
            date="01/08/2022"
          />
        </article>
        <article className="bg-lightCyan w-60">
          <Kanban
            title="First"
            description="Testing this"
            status="DONE"
            date="01/08/2022"
          />
        </article>
      </div>
    </div>
  );
};

export default Home;
