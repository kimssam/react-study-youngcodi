import './App.css';
import { InlineStyles } from './components/InlineStyles';
import { CssModules } from './components/CssModules';
import { StyledJsx } from './components/StyledJsx';
import { StyledComponents } from './components/StyledComponents';
import { Emotion } from './components/Emotion';
import { TailwindCss } from './components/TailwindCss';

function App() {
  return (
    <div>
      <InlineStyles />
      <CssModules />
      <StyledJsx/>
      <StyledComponents/>
      <Emotion/>
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-bold">Welcome to Tailwind CSS with React</h1>
      </header>
    </div>
  );
}

export default App;
