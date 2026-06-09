import { useParams } from "react-router"

export function CardPage() {
  const { id } = useParams()
  return <div>Страница карточки c id: {id}</div>
}