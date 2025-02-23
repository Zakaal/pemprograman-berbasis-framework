import Counter from './Counter';
import Greeting from './Greeting';
import React, {useState} from 'react';
import TodoList from './TodoList';

//komponen header
function Header(){
  return(
    <header>
      <h1>Aplikasi React</h1>
    </header>
  );
}

//Komponen Main
function Main(){
  return(
    <main>
      <h2>Selamat datang di Aplikasi React Kaka</h2>
      <p>Ini adalah area konten utama</p>
    </main>
  );
}

//Komponen footer
function Footer(){
  return(
    <footer>
      <p>&copy; 2023 Aplikasi React Kaka</p>
    </footer>
  );
}

//Komponen state
function Example(){
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  return (
    <div>
      <input type="text" placeholder="Nama" value={name} onChange={handleNameChange}></input>
      <input type="number" placeholder="Umur" value={age} onChange={handleAgeChange}></input>
      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange}></input>
      <p>{name} berumur {age} tahun dan emailnya adalah {email}</p>
    </div>
  );
  
}

//Komponen App yang menggunakan Header, Main, dan footer
function App(){
  return(
    <div>
      <Header />
      <Main />
      <Greeting name="Kaka" />
      <Counter />
      <Example />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;