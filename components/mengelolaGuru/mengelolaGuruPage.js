import { useEffect, useState } from "react";
import { getId, getLevel } from "../../pages/utils/common";
import axios from "axios";
import Link from 'next/link'
const MengelolaGuruPage = () => {
    const [Loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://methodist-app.vercel.app/guru/index/`)
            .then((res) => {
                // alert("masuk");
                setLoading(true);
                // console.log(res.data.data)
                setData(res.data.data.user)
                setLoading(false);
            })
            .catch((err) => {
                alert("Akun Tidak Ditemukan");
            });
    }, [data]);
    const handleDelete = (e) => {
        // e.preventDefault();
        axios
            .post(`https://methodist-app.vercel.app/guru/delete/${e}`)
            .then((res) => {
                alert("Guru Sudah Di Hapus");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full mb-12 px-8">
                    <div className="mt-20">
                        <div className="flex items-center">
                            <img src="/images/mengelolaGuru/gambar1.png" className="mr-8 mb-8" alt="logo" />
                            <div>
                                <div className="text-5xl font-semibold text-white mb-3">Mengelola Guru</div>

                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div className="mx-2 relative">
                                <input type="text" placeholder="Cari" className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-3xl bg-white py-3 px-20" />
                                <div className="fas fa-search text-2xl left-6 absolute inset-y-center z-10"></div>
                            </div>

                            <div className="mx-2">
                                <Link href={'/mengelolaGuru/tambahGuru/'}>
                                    <a className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-2xl bg-white py-3 px-10">
                                        Tambah Guru
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-2xl bg-white">
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Nama Guru
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Username
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Password
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Aksi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.filter(x => x.enable_flag == "Y").map((x) => (
                                                <>
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                            {x.nama_guru}
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            {x.username}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {x.password}
                                                        </td>
                                                        <td className="px-6 py-4 flex">
                                                            <Link href={'/mengelolaGuru/' + x.id}>
                                                                <a className="font-medium text-black bg-keempat py-2 px-5 rounded-2xl mr-2">Edit Detail</a>
                                                            </Link>
                                                            <a onClick={() => handleDelete(x.id)} className="font-medium text-white bg-ketiga py-2 px-5 rounded-2xl">Hapus</a>
                                                        </td>
                                                    </tr>
                                                </>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MengelolaGuruPage;