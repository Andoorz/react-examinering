type UsersCardProps = {
  name: string
}

const UserCard = ({ name }: UsersCardProps) => {

    const initials = name.trim().split(/\s+/).map((part) => part[0]).slice(0, 2).join('').toUpperCase()


    return(
        <article className="user-card">
            <div className="avatar">{initials || '?'}</div>
            <div className="user-card-copy">
                <h2>{name}</h2>
            </div>
            <span className="card-arrow" aria-hidden="true">↗</span>
        </article>
    )
}

export default UserCard;