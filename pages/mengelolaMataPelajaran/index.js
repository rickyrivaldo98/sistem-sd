import { Layout } from "../../components/layout";
import MengelolaMataPelajaranPage from "../../components/mengelolaMataPelajaran/mengelolaMataPelajaranPage"

function mengelolaMataPelajaran() {
    return (
        <>
            <MengelolaMataPelajaranPage />
        </>
    );
}
mengelolaMataPelajaran.getLayout = Layout;
export default mengelolaMataPelajaran;