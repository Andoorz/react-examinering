import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { CircleLoader } from 'react-spinners'
import type { User } from './pages/Users'
import Home from './pages/Home'
import Users from './pages/Users'
import fetchMyUsers from './hooks/FetchMyUsers'
import Nav from './Components/Nav'

function UsersPage() {
  const userQuery = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: fetchMyUsers,
    staleTime: 1000 * 60 * 60 * 24 / 100,
    gcTime: 1000 * 60 * 60 * 24
  })


  if (userQuery.isLoading) {
    return (
      <div className="loading-state">
        <CircleLoader color="currentColor" size={42} />
        <p>Laddar användare...</p>
      </div>
    )
  }

  if (userQuery.isError) {
    return (
      <div className="loading-state">
        <p>Något gick fel med att hämta användare.</p>
        <button className='flex items-center border p-2 hover:bg-slate-500 hover:text-slate-50' type="button" onClick={() => userQuery.refetch()}>
          Försök igen ⟳
        </button>
      </div>
    )
  }

  return <Users users={userQuery.data ?? []} />
}

function AppRoutes() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const saveTheme = localStorage.getItem('theme')

    if (saveTheme === 'light' || saveTheme === 'dark') {
      setTheme(saveTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <div className={`app-shell ${theme}`}>
      <Nav theme={theme} onToggleTheme={toggleTheme} />

      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <span>USERSPACE</span>
        <span>Byggd med React + TypeScript</span>
      </footer>
    </div>
  )
}

export default AppRoutes
