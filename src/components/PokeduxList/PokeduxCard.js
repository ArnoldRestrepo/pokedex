import { Grid, Icon, Image, Label } from 'semantic-ui-react'
import { MAIN_COLOR, FAV_COLOR } from '../../utils/constants'
import './style.css'

const PokeduxCard = () => {
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className='PokeduxCard'>
        <Icon name='favorite' color={FAV_COLOR}/>
        <Image centered src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />
        <p>Dtto</p>
        <Label color={MAIN_COLOR}>Normal</Label>
      </div>
    </Grid.Column>
    
  )
}

export default PokeduxCard