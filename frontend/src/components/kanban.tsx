interface IKanbanProps {
  title: string;
  description: string;
  status: string;
  date: string;
}

const Kanban = (props: IKanbanProps) => {
  return (
    <div className="bg-whiteCyan rounded-lg h-52 w-52">
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h2>{props.status}</h2>
      <h4>{props.date}</h4>
    </div>
  );
};

export default Kanban;
