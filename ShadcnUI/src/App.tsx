// import './styles.css'
// import { Button } from './components/ui/button';
import LoginForm from './components/LoginForm';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100 space-y-6">
      {/* <Button>Click me</Button> */}
      <LoginForm />
    </div>
  );
};

export default App;
