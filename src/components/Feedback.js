
function Feedback({feedback: {place, city, content, by}}){
    return (
        <div className="feedback">
            <h6>{place}</h6>
            <span>{city}</span>
            <p>{content}</p>
            <p>{by}</p>
        </div>
    )    
}

export default Feedback;