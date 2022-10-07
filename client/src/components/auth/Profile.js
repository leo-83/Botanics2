import { AuthConsumer } from "../../providers/AuthProvider";

const Profile = () => {
  return (
    <>
    
    </>
  )
}

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { value => <Profile {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedProfile;