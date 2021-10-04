import "./App.css"
import { Header, Characters, Content } from "./components"

export const App = () => {
  return (
    <div className={"App"}>
      <Header />
      <Content />
      <Characters />
    </div>
  )
}
