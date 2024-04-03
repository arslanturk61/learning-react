import logo from './logo.svg';
import './App.css';

function App() {
  const menuler = () => ({
    //burada ul yapısını dinamik bir şekilde aşşağıya yazdır
  })

  return (
    <>
    <div className='w-full xl:w-[1600px] lg:w-[1000px] md:[600px] mx-auto h-[70px] flex items-center justify-between'>
        <img src={logo} width={'120px'} />
        <ul>
          <li className='bg-zinc-600 block h-[70px] rounded px-3 text-white font-medium hover:bg-zinc-700 hover:transition hover:cursor-pointer'><a className='block py-5'>Ana Sayfa</a></li>
        </ul>
      </div>
    </>
  );
}

export default App;
