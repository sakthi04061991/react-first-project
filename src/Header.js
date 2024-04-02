import { useContext } from 'react';
import DataContext from './context/DataContext';

export const Header = ({title}) => {
  const {width} = useContext(DataContext);
  return (
    <header className='header'>
        <h2>{title}</h2>
        {width < 768 ? <button>Mobile</button> : 
          width < 992 ? <button>TapTop</button>: <button>DeskTop</button>}
    </header>
  )
}

export default Header
