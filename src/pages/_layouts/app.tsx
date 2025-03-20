import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="flex min-h-screen antialiased">
      <h1>cabeçalho</h1>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
