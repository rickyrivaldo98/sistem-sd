import { Layout } from "../../components/layout";
import PengolahanRaporPage from "../../components/PengolahanRapor/pengolahanRaporPage"

function PengolahanRapor() {
    return (
        <>
            <PengolahanRaporPage />
        </>
    );
}
PengolahanRapor.getLayout = Layout;
export default PengolahanRapor;