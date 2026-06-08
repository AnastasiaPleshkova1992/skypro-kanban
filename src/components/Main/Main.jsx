import { Column } from "../Column/Column";

export function Main({ tasks }) {
  const statuses = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово']
    return (
        <main className="main">
        <div className="container">
          
          <div className="main__block">
            <div className="main__content">
                {statuses.map((status) => (
                  <Column key={status} title={status} tasks={tasks} />
                ))}
            </div>
          
          </div>
        </div>
      </main>
    )
}