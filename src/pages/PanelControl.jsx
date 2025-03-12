import Card from '../components/Card'
import MenuLateral from '../components/MenuLateral'
import { envios } from '../services/dataBase'
const PanelControl = () => {
    
    return(
        <section className="panel-control">
            <MenuLateral/>
            <div className="panel-control-contenido">
                {
                    envios.map((envios)=> {
                        return <Card info={envios} />
                    })
                }
            </div>
        </section> 
    )
}

export default PanelControl