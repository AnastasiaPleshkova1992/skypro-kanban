import { Column } from "../Column/Column";

import { Container } from "../../shared.styled";

export function Main({ tasks }) {
  const statuses = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово']
    return (
        <main className="main">
        <Container>
          
          <div className="main__block">
            <div className="main__content">
                {statuses.map((status) => (
                  <Column key={status} title={status} tasks={tasks} />
                ))}
            </div>
          
          </div>
        </Container>
      </main>
    )
}