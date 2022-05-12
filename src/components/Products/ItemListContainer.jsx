const itemListContainer = props => {
    return (
        <main className="container" >
            <section className="section">
                <div className="row" style={{marginTop: 100}}>
                    <div className="col s12">
                        <h3>{props.greeting}</h3>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default itemListContainer;