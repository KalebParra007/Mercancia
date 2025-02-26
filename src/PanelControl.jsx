import imgUser from './assets/usuario.png'
import Card from './Card'
const PanelControl = () => {
    return(
        <section className="panel-control">
            <aside className="panel-control-aside">
                <div>
                    <img src={imgUser} alt="logo" />
                </div>
                <nav>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                </nav>
            </aside>
            <div className="panel-control-contenido">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </section>
    )
}

export default PanelControl