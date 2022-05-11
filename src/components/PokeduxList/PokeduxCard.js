import { Grid, Icon, Image, Label } from 'semantic-ui-react'
import { MAIN_COLOR, FAV_COLOR } from '../../utils/constants'
import './style.css'

const PokeduxCard = ({ pokemon }) => {
  const { name, types, sprites } = pokemon;
  if (!pokemon) return null
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className='PokeduxCard'>
        <Icon name='favorite' color={FAV_COLOR}/>
        <Image centered src={sprites.front_default} />
        <h2 className='PokeduxCard-title '>{pokemon.name}</h2>
        {types.map(type => <Label key={`${pokemon.id}-${type.name}`} color={MAIN_COLOR}>{type.type.name}</Label>)}
      </div>
    </Grid.Column>
    
  )
}

PokeduxCard.defaultProps = {
  pokemon: {} 
}

export default PokeduxCard