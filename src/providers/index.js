import { Theme } from "./Theme";
import { TodoProvider } from "./Todo";

export const Providers = ({ children }) => (
  <Theme>
    <TodoProvider>{children}</TodoProvider>
  </Theme>
);
