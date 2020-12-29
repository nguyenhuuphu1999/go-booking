

function RoomListItem ({ roomItem: { photos, name, title, pricePerNight }}) {
    return (
        <div className="RoomItem">
            <div>
                <img src={photos} alt={photos}/>
            </div>
            <div>
                <h3>{name}</h3>
                <p>{title}</p>
                <p>{pricePerNight}</p>
            </div>
        </div>
    )
}

export default RoomListItem;