const SavedBackronyms = ({ backronymList, deleteBackronym }) => {

    return (
        <section className="savedBackronyms">
            <h2>Completed Backronyms</h2>

            <ul>
                {
                    backronymList.map((backronym) => {
                        return (
                            <li key={backronym.key}>
                                <button onClick={() => deleteBackronym(backronym)}>Delete</button>

                                <p>{backronym.word}: {backronym.backronym}</p>
                            </li>
                        )
                    })
                }
            </ul>

        </section>
    )
}
export default SavedBackronyms;