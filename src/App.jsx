// import MainLayout from "./layout/MainLayout";
import { Providers } from "./providers";
import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { TodoAction } from "./components/TodoAction";
import { Root, TodoContainer } from "./App.styles.js";

function App() {
  return (
    <Providers>
      <Root>
        <Header>Todo List</Header>
        <TodoContainer>
          <TodoForm />
          <TodoList />
          <TodoAction />
        </TodoContainer>
      </Root>
    </Providers>
  );
}

export default App;
