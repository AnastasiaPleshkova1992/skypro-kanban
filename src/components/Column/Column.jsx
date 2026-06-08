import { Card } from "../Card/Card";
import { ColumnWrapper, ColumnTitle, CardsList } from "./Column.styled";

export function Column({ title, tasks }) {
  return (
    <ColumnWrapper>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsList>
        {tasks
          .filter((task) => task.status === title)
          .map((task) => (
            <Card key={task.id} task={task} />
          ))}
      </CardsList>
    </ColumnWrapper>
  );
}
