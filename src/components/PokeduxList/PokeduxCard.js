import { useDispatch, useSelector } from 'react-redux';
import { Grid, Icon, Image, Label } from 'semantic-ui-react'
import { setFavoritePokemon } from '../../redux/actions';
import { MAIN_COLOR, FAV_COLOR, DEFAULT_COLOR } from '../../utils/constants'
import './style.css'

const PokeduxCard = ({ pokemon }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.app.favorites)
  const { name, types, sprites, id } = pokemon;

  const handleFavorite = () => {
    dispatch(setFavoritePokemon({pokemonId: id}));
  }

  if (!pokemon) return null
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className='PokeduxCard'>
        <button className='PokeduxButton-favorite' onClick={handleFavorite}>
          <Icon name='favorite' color={favorites[pokemon.id] ? FAV_COLOR : DEFAULT_COLOR}/>
        </button>
        <Image centered src={sprites.front_default} />
        <h2 className='PokeduxCard-title '>{name}</h2>
        {types.map((type, index) => <Label key={`${index}-${type.name}`} color={MAIN_COLOR}>{type.type.name}</Label>)}
      </div>
    </Grid.Column>
    
  )
}

PokeduxCard.defaultProps = {
  pokemon: {} 
}

export default PokeduxCard