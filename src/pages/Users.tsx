import UserCard from '../Components/UserCard'

export type User = {
  id: number
  profile: {
    name: string
  }
}

export type UsersProps = {
  users: User[]
}

function Users({ users }: UsersProps) {

  return (
    <section className="users-page">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><span className="eyebrow-dot" /> KATALOG</p>
          <h1>Användare<span>.</span></h1>
          <p className="section-description">Här hittar du användarna som hämtats från API:et.</p>
        </div>
        <div className="count-pill"><span className="count-dot" /> {users.length} st</div>
      </div>

      {users.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">◎</span>
          <h2>Inga användare ännu</h2>
          <p>API:et returnerade ingen användardata.</p>
        </div>
      ) : (
        
        <ul className="user-grid">
          {users.map((userItem) => (
            
            <li key={userItem.id}>
              <UserCard name={userItem.profile.name} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Users