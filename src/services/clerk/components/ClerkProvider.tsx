import { ReactNode, Suspense } from 'react'
import { ClientProviderComponent } from './ClientProviderComponent';

export function ClerkProvider({ children }: { children: ReactNode }){
    return <ClientProviderComponent>
        {children}
    </ClientProviderComponent>
}