import { Rings } from "react-loader-spinner";


const Loader = ({Loading}) => {


return (

<div class="Loader">
{Loading && <Rings color="#00BFFF" Loading={Loading} height={380} width={380} />}
</div>
)

}

export default Loader;