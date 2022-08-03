import { isMobile } from "react-device-detect";

import Header from "../components/header";
import Kanban from "../components/kanban";

const Home = () => {
  return (
    <div className="bg-stoneGray h-full flex flex-col items-center">
      <Header />
      {isMobile ? (
        <div className="w-[90%] h-full bg-darkCyan border-x border-lightCyan flex flex-col justify-around">
          <article className="bg-lightCyan w-full flex justify-center items-center flex-col overflow-y-auto">
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
          </article>
        </div>
      ) : (
        <div className="w-4/5 h-full bg-darkCyan border-x border-lightCyan flex flex-col lg:flex-row justify-around">
          <article className="bg-lightCyan w-full lg:w-[27rem] flex justify-center overflow-auto">
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
            <Kanban
              title="First"
              description="Testing this"
              status="TO DO"
              date="01/08/2022"
            />
          </article>
          <article className="bg-lightCyan w-full lg:w-[27rem] flex justify-center overflow-auto">
            <Kanban
              title="First"
              description="Testing this"
              status="DOING"
              date="01/08/2022"
            />
          </article>
          <article className="bg-lightCyan w-full lg:w-[27rem] flex justify-center overflow-auto">
            <Kanban
              title="First"
              description="Testing this"
              status="DONE"
              date="01/08/2022"
            />
          </article>
        </div>
      )}
    </div>
  );
};

export default Home;
