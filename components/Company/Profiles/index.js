import styles from './Profiles.module.scss'
import Profile from '../Profile'
import Carousel, {consts} from "react-elastic-carousel";


const Profiles = ({data}) => {
  let {teamMembers} = data

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
    <div className={styles.container}>
      <Carousel
        breakPoints={breakPoints}
        pagination={false}
        renderArrow={myArrow}
      >
        {teamMembers.map(teamMember => (
          <Profile
            picture={teamMember.picture}
            name={teamMember.name}
          >
            {teamMember.title}
          </Profile>
        ))}
      </Carousel>
    </div>
  )
}

export default Profiles
