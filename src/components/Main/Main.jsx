import { Column } from "../Column/Column";

import { Container } from "../../shared.styled";
import { 
  MainWrapper,
  MainBlock,
  MainContent
} from "./Main.styled";

export function Main({ tasks }) {
  const statuses = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово']
    return (
        <MainWrapper>
        <Container>
          
          <MainBlock>
            <MainContent>
                {statuses.map((status) => (
                  <Column key={status} title={status} tasks={tasks} />
                ))}
            </MainContent>
          
          </MainBlock>
        </Container>
      </MainWrapper>
    )
}