import {useSelector} from "react-redux"
function Get()
{
    const state = useSelector(state=>state)
 console.log(state);
    return(
        <div>

            </div>
    )
}
export default Get;