function FamousPlace({famousPlace: {name, photos}}){
    return (
        <div className="RoomItem">
            <div>
                <img src={photos} alt={photos}/>
            </div>
            <div>
                <h3>{name}</h3>
            </div>
        </div>
    )
}

export default FamousPlace;