import { Grid, Icon, Image, Label } from 'semantic-ui-react'
import { MAIN_COLOR, FAV_COLOR } from '../../utils/constants'
import './style.css'

const PokeduxCard = ({ pokemon }) => {
  if (!pokemon) return null
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className='PokeduxCard'>
        <Icon name='favorite' color={FAV_COLOR}/>
        <Image centered src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />
        <h2 className='PokeduxCard-title '>{pokemon.name}</h2>
        <Label color={MAIN_COLOR}>Normal</Label>
      </div>
    </Grid.Column>
    
  )
}

PokeduxCard.defaultProps = {
  pokemon: {} 
}

export default PokeduxCard