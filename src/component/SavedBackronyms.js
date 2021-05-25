import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";
const SavedBackronyms = ({ backronymList, deleteBackronym, isLoading }) => {

    //styleing for BeatLoader
    const override = css`
    display: block;
    text-align: center;
    margin: 3rem 0;
    `;

    return (
        <section className="savedBackronyms">
            <h2>Completed Backronyms</h2>

            {isLoading
                ? < BeatLoader color={"#81003C"} loading={isLoading} size={10} css={override} />
                :
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
            }

        </section>
    )
}
export default SavedBackronyms;