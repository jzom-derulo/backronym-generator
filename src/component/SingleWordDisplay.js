const SingleWordDisplay = ({letter, index, currentWord}) => {
    console.log(letter);
    return (
        <li key={index}>

            <p>    
                {letter}
                <span>{currentWord}</span>
            </p>
        </li>
       
    )
}

export default SingleWordDisplay;