import Card from './Card'
import MenuLateral from './MenuLateral'
const PanelControl = () => {
    let envios=[
        {
            origen: 'Medellin',
            destino: 'Bogotá',
            id: 'PEDIDO2390'
        },
        {
            origen: 'Medellin',
            destino: 'Cali',
            id: 'PEDIDO4258'
        },
        {
            origen: 'Medellin',
            destino: 'Necocli',
            id: 'PEDIDO8536'
        },
        {
            origen: 'Medellin',
            destino: 'Bucaramanga',
            id: 'PEDIDO9735'
        },
        {
            origen: 'Medellin',
            destino: 'Titiribi',
            id: 'PEDIDO1238'
        },
        {
            origen: 'Medellin',
            destino: 'Cartagena',
            id: 'PEDIDO1872'
        }
    ]
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