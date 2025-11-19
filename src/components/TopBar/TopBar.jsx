import "./TopBar.css"

export const TopBar = () => {
    return (
        <div className="topbar-container">
            <div className="topbar">
                <div className="brand">Dale Mono</div>
                <div className="menu">
                    <a href="#" className="menuItem">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.6 14c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1s-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5s.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4S9.7 8.5 9.5 8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3Q7 8.5 7 9.7c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2zm2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"/></svg>
                        +123 456 7890
                    </a>
                    <a href="#" className="menuItem">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 16.475q2.475-2 3.738-3.85T17 9.15q0-2.25-1.4-3.7T12 4T8.4 5.45T7 9.15q0 1.625 1.263 3.475T12 16.475M12 19q-3.525-2.6-5.262-5.05T5 9.15q0-3.125 1.95-5.137T12 2t5.05 2.013T19 9.15q0 2.35-1.737 4.8T12 19m0-8q.825 0 1.413-.587T14 9t-.587-1.412T12 7t-1.412.588T10 9t.588 1.413T12 11M5 22v-2h14v2zm7-13"/></svg>
                        Calle falsa 123, Godoy Cruz, Mendoza
                    </a>
                    <a href="#" className="menuItem">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect width="20" height="16" x="2" y="4" rx="2"/></g></svg>
                        contacto@mitienda.com
                    </a>
                    <button className="ctaButton">Cuenta</button>
                </div>
            </div>
        </div>
)}
