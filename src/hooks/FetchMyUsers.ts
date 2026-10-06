import type { User } from '../pages/Users'

const fetchMyUsers = async (): Promise<User[]> => {
  const url = 'https://api-userapi.onrender.com/api/users/getUsers'
  const res = await fetch(url, {
    headers: {
      'x-api-key': 'elev-hemlighet-2026',
    }
  })

  if (!res.ok) {
    throw new Error(`Kunde inte hämta användare (HTTP ${res.status}).`)
  }

  const data = await res.json()

  return data as User[]
}

export default fetchMyUsers