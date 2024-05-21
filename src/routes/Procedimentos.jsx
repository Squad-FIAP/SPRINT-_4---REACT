function Procedimentos() {
    return(
        <>
            <section className="procedures-section">
                <h1>Procedimentos</h1>
                <p>O que fazer antes dos seus exames?</p>
                <form id="procedure-form">
                    <label>Digite aqui qual seu procedimento:</label>
                    <input type="text" id="procedure-search" placeholder="Digite aqui"/>
                    <button id="search-btn" type="submit">Buscar</button>
                </form>
                <div id="procedure-description">
                    <p>Aqui haverá um descritivo de preparação do exame para o paciente dependendo da resposta do quadro acima.</p>
                </div>
            </section>
        </>
    )
}

export default Procedimentos