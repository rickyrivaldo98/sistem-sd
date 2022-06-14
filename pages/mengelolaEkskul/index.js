import { Layout } from "../../components/layout";
import MengelolaEkskulPage from "../../components/mengelolaEkskul/mengelolaEkskulPage"

function mengelolaEkskul() {
    return (
        <>
            <MengelolaEkskulPage />
        </>
    );
}
mengelolaEkskul.getLayout = Layout;
export default mengelolaEkskul;