import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

import styles from './Rating.module.css'

const Rating = ({ rating }) => {

  const filled = Math.floor(rating.rate)
  const hasHalf = rating.rate % 1 > 0.2
  const empty = 5 - filled - hasHalf * 1

  return (
    <div className={styles.container}>
      <span className={styles.stars}>
        {[...Array(filled)].map((_, i) =>
          <BsStarFill key={i} />
        )}
        {hasHalf && <BsStarHalf />}
        {[...Array(empty)].map((_, i) =>
          <BsStar key={i} />
        )}
      </span>
      <span>{rating.rate} ({rating.count} reviews)</span>
    </div>
  )
}


export default Rating