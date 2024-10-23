import Meta from "./Meta";
import listaMok from './MetaList'; 

function Lista() {
    return (
        <>
            {listaMok.map((meta, index) => (
                <Meta key={index} {...meta} />
            ))}
        </>
    );
}

export default Lista;