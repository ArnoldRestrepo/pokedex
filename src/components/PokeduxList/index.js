import { Grid } from 'semantic-ui-react';
import PokeduxCard from './PokeduxCard';


const PokeduxList = ({ pokemons  }) => { 
  return (
    <Grid className='PokeduxList'>
      {pokemons.map(pokemon => <PokeduxCard pokemon={pokemon}/>)}
    </Grid>
  )
}

PokeduxList.defaultProps = {
  pokemons: []
}

export default PokeduxList;