import { Card } from "../Card/Card";

export function Column({ title, tasks }) {
    return (
        <div className="main__column column">
                <div className="column__title">
                  <p>{title}</p>
                </div>
                <div className="cards">
                  {tasks
                  .filter((task) => task.status === title)
                  .map((task) => (
                    <Card key={task.id} task={task} />
                  ))}
                </div>
              </div>
    )
}