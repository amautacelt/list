import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState('');
  
  const [todo, setTodos] = useState([]);

  return (
    <div className="App">
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
