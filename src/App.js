import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const genders = ['Erkek', 'Kadın'];
  const [gender, setGender] = useState('')
  const [description, setDescription] = useState('')

  return (
    <>
    <div className='w-full xl:w-[1600px] lg:w-[1000px] md:[600px] mx-auto h-[70px] flex items-center justify-between'>
        <img src={logo} width={'120px'} />
        <ul className='flex items-center justify-content gap-6'>
          <li className=' block text-center w-[150px] h-[70px] rounded px-3 text-white font-medium hover:bg-zinc-700 hover:transition hover:cursor-pointer'><a className='block py-5'>Ana Sayfa</a></li>
          <li className=' block text-center w-[150px] h-[70px] rounded px-3 text-white font-medium hover:bg-zinc-700 hover:transition hover:cursor-pointer'><a className='block py-5'>Hakkında</a></li>
          <li className=' block text-center w-[150px] h-[70px] rounded px-3 text-white font-medium hover:bg-zinc-700 hover:transition hover:cursor-pointer'><a className='block py-5'>Ürünler</a></li>
          <li className=' block text-center w-[150px] h-[70px] rounded px-3 text-white font-medium hover:bg-zinc-700 hover:transition hover:cursor-pointer'><a className='block py-5'>İletişim</a></li>
        </ul>
      </div>

      <div className='w-full xl:w-[1600px] lg:w-[1000px] md:[600px] mx-auto mt-[100px]'>
       <select value={gender} onChange={e => setGender(e.target.value)}>
          <option value="">Seçin</option>
          <option value="1">Erkek</option>
          <option value="2">Kadın</option>
       </select>
        <span className='text-white font-medium font-2xl'>{gender}</span>
      </div>


      <div className='w-full xl:w-[1600px] lg:w-[1000px] md:[600px] mx-auto mt-[100px]'>
        <textarea value={description} onChange={e => setDescription(e.target.value)} /> <br />
        <span className='text-white font-medium font-2xl'>{description}</span>
      </div>

    </>
  );
}

export default App;
