import '../scss/estilo.scss'

function Home() {
    return(
        <>
        <container className="container-home">
            <section className="home-container">
                <div className="content-home-wrap">
                    <section id="banner">
                        <div id="banner-text">
                            <h1>Somos referência 
                                em Oncologia 
                                infanto-juvenil</h1>
                            <button className="exame">Marque seu exame</button>
                        </div>
                    </section>
                </div>
            </section>
        </container>
        </>
    )
}

export default Home