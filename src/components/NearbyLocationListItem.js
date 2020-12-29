

function NearbyLocationListItem ({ location: { thumbnailUrl, detail, address } }) {
    return (
        <div className="near-by-location">
            <div className="near-by-img">
                <img src={thumbnailUrl} alt={detail}/>
            </div>
            <div>{detail}</div>
            <div>
                <span className=""></span>
                <span className="">{address}</span>
            </div>
            <div></div>
        </div>
    )
}

export default NearbyLocationListItem;