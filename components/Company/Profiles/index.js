import styles from './Profiles.module.scss'
import Carousel, {consts} from "react-elastic-carousel";


const Profiles = ({children}) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1024, itemsToShow: 4 },
    { width: 1280, itemsToShow: 5 }
  ];

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? '❮' : '❯'
    return (
      <button className={styles.button} onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    )
  }

  return (
    <Carousel
      breakPoints={breakPoints}
      pagination={false}
      renderArrow={myArrow}
    >
      {children}
    </Carousel>
  )
}

export default Profiles
