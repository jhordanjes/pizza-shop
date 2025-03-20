import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      {/* Coluna esquerda */}
      <div className="border-foreground/5 bg-muted text-muted-foreground flex h-full flex-col justify-between border-r p-10">
        <div className="text-foreground flex items-center gap-3 font-medium">
          <Pizza className="h-5 w-5" />

          <span>pizza.shop</span>
        </div>

        <footer className="text-sm">
          Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
        </footer>
      </div>
      {/* Coluna direita */}
      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
