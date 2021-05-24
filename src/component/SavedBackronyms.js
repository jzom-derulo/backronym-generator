const SavedBackronyms = ({ backronymList, deleteBackronym }) => {

    return (
        <section className="savedBackronyms">
            <h2>Completed Backronyms</h2>

            <ul>
                {
                    backronymList.map((backronym) => {
                        return (
                            <li className="backronym" key={backronym.key}>

                                <p>{backronym.word}: {backronym.backronym}</p>

                                <button onClick={() => deleteBackronym(backronym)}>Delete</button>

                            </li>
                        )
                    })
                }
            </ul>

        </section>
    )
}
export default SavedBackronyms;