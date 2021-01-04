import DatePickers from './DatePicker'

function HomeSearch() {
  var date = new Date()
  var today = date.getFullYear()
  return (
    <>
      <form>
        <div className="home-search">
          <div className="location-search">
            <p>Location</p>
            <input type="text" placeholder="     Where are you going?" />
          </div>
          <div className="check-in-search">
            <p>Check in</p>
            <DatePickers />
            {/* <input type="date" id="start" name="trip-start" min={today} placeholder="      Add date"/> */}
          </div>
          <div className="check-out-search">
            <p>Check out</p>
            <input
              type="date"
              defaultValue={today}
              placeholder="      Add date"
            />
          </div>
          <div className="guests-search">
            <p>Guests</p>
            <input type="text" placeholder="     Add guests" />
          </div>
        </div>
      </form>
    </>
  )
}

export default HomeSearch
