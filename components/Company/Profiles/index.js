import styles from './Profiles.module.scss'
import Profile from '../Profile'

const Profiles = ({data}) => {
  let {teamMembers} = data

  return (
    <div className={styles.container}>
      {teamMembers.map(teamMember => (
        <Profile
          picture={teamMember.picture}
          name={teamMember.name}
        >
          {teamMember.title}
        </Profile>
      ))}
    </div>
  )
}

export default Profiles
