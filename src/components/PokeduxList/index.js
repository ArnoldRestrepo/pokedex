import { Grid } from 'semantic-ui-react';
import PokeduxCard from './PokeduxCard';


const PokeduxList = ({ pokemons = Array(20).fill(" ") }) => { 
  return (
    <Grid className='PokeduxList'>
      {pokemons.map(pokemon => <PokeduxCard pokemon={pokemon}/>)}
    </Grid>
  )
}

export default PokeduxList;