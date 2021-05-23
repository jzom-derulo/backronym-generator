const SavedBackronyms = () => {
// { finishedBackronyms }
    const finishedBackronyms = [
        "cat: controlling and testy", "print: people really into new things", "test: toaster eats so tasty"
    ]

    return (
        <section>
            <h2>Completed Backronyms</h2>

            <ul>
                {
                    finishedBackronyms.map((backronym) => {
                        return  <li>
                                {backronym}

                                </li>
                    })
                }
            </ul>

        </section>
    )
}
export default SavedBackronyms;