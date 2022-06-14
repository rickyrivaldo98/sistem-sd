import { Layout } from "../../components/layout";
import MengelolaSiswaPage from "../../components/mengelolaSiswa/mengelolaSiswaPage"

function mengelolaSiswa() {
    return (
        <>
            <MengelolaSiswaPage />
        </>
    );
}
mengelolaSiswa.getLayout = Layout;
export default mengelolaSiswa;