import '../styles.css'

const Button = ({loadMOre}) => {

    return (

<div class='Load-more'>
    <button type="button" class='Button' onClick={loadMOre}>Load More</button>
</div>
    )
}

export default Button