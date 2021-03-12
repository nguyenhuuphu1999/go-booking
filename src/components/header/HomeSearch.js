import { Grid } from '@material-ui/core'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
const HomeSearch = () => {
  return (
    <div>
      <Grid container>
        <Grid xs={0} sm={0} md={12} lg={12} className="input_pagehome_big">
          <form>
            <div className="home-search">
              <div className="location-search">
                <p>Location</p>
                <input type="text" placeholder="Where are you going?" />
              </div>
              <div className="check-in-search">
                <p>Check in</p>
                <input
                  type="date"
                  id="start"
                  name="trip-start"
                  value="2020-07-22"
                  placeholder="Add date"
                />
              </div>
              <div className="check-out-search">
                <p>Check out</p>
                <input type="date" value="2020-07-22" placeholder="Add date" />
              </div>
              <div className="guests-search">
                <p>Guests</p>
                <input type="text" placeholder="Add guests" />
              </div>
            </div>
          </form>
        </Grid>
        <Grid xs={12} sm={12} md={0} lg={0} className="input_pagehome_small">
          <div className="div_input_pagehome_small">
            <input
              type="text"
              placeholder="Xin chào bạn cần GO giúp gì không ?"
            />
             <div className="icon-search-page_home">

              <SearchIcon/>
             </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default HomeSearch
