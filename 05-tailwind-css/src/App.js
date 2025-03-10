import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">hello~tailed Css!</h1>
      <div className='border border-gray-400 rounded-2xl p-2 m-2 flex justify-around items-center'>
        <p className='text-gray-400 m-0'>Tailwind CSS입니다.</p>
        <button className='bg-gray-300 border-0 p-2 rounded-md hover:bg-gray-400 hover:text-white'>버튼</button>
      </div>
    </>
  );
}

export default App;
