import { Layout } from "../../components/layout";
import MengelolaGuruPage from "../../components/mengelolaGuru/mengelolaGuruPage"

function mengelolaGuru() {
    return (
        <>
            <MengelolaGuruPage />
        </>
    );
}
mengelolaGuru.getLayout = Layout;
export default mengelolaGuru;