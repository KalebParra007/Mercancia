function Card({ info }){
    return(
        <section className="panel-control-card">
                    <div>
                        <h1>Origen: {info.origen}</h1>
                        <h1>Destino: {info.destino}</h1>
                        <h1>id: {info.id}</h1>
                    </div>
                    <div>
                        <p>ver</p>
                    </div>
                </section>
    )
}

export default Card