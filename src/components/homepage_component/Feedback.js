import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    color: 'red',
  },
}))

function Feedback({ feedback: { place, city, content, by } }) {
  const classes = useStyles()

  return (
    <div className="feedback">
      <h4 className={classes.root}>{place}</h4>
      <span>{city}</span>
      <p>{content}</p>
      <p>{by}</p>
    </div>
  )
}

export default Feedback
