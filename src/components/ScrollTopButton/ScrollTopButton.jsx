export const ScrollTopButton = () => {
    return (
        <button onClick={() => window.scrollTo ({ top:0, behavior: "smooth" })}>
            Ir arriba
        </button>
    )
}