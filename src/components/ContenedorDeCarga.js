export const ContenedorDeCarga = ({ cargando, colSpan, children }) => {
    return cargando ? (
        <tr>
            <td colSpan={colSpan} className="text-center">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
                <p>Cargando datos, por favor espere...</p>
            </td>
        </tr>
    ) : (
        <>{children}</>
    );
};
