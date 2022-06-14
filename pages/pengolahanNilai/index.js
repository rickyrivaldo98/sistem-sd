import { Layout } from "../../components/layout";
import PengolahanNilaiPage from "../../components/PengolahanNilai/pengolahanNilaiPage"

function PengolahanNilai() {
    return (
        <>
            <PengolahanNilaiPage />
        </>
    );
}
PengolahanNilai.getLayout = Layout;
export default PengolahanNilai;