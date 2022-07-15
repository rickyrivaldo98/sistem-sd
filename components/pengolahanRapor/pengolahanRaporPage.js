import { useEffect, useState } from "react";
import { getId, getLevel } from "../../lib/common";
import axios from "axios";
import Link from 'next/link'

const PengolahanRaporPage = () => {
    const [Loading, setLoading] = useState(true);
    const [level, setLevel] = useState("");
    const [data, setData] = useState([]);
    const [kelas, setKelas] = useState("");
    const [kelasGuru, setKelasGuru] = useState([]);
    const [listKelas, setListKelas] = useState([]);


    useEffect(() => {

        setLevel(getLevel())
        axios
            .get(`https://methodist-app.vercel.app/siswa/index/`)
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
        axios
            .get(`https://methodist-app.vercel.app/kelas/show-guru/${getId()}`)
            .then((res) => {
                // alert("masuk");
                setLoading(true);
                // console.log(res.data.data)
                setKelasGuru(res.data.data.user)
                setLoading(false);
            })
            .catch((err) => {
                console.log(err)
            });
        axios
            .get(`https://methodist-app.vercel.app/kelas/index/`)
            .then((res) => {
                // alert("masuk");
                setLoading(true);
                // console.log(res.data.data)
                setListKelas(res.data.data.user)
                setLoading(false);
            })
            .catch((err) => {
                alert("Akun Tidak Ditemukan");
            });
        if (level == 2) {
            kelasGuru.length > 0 ?
                setKelas(kelasGuru[0].kd_kelas) : null
        }
        // { console.log(data) }
    }, [data]);
    const pilihKelas = (e) => {
        // e.preventDefault();
        setKelas(e)
    }
    // console.log(data)
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full mb-12 px-8">
                    <div className="mt-20">
                        <div className="flex items-center">
                            <img src="/images/pengolahanRapor/gambar1.png" className="mr-8 mb-8" alt="logo" />
                            <div>
                                <div className="text-5xl font-semibold text-white mb-3">Pengolahan Rapor</div>
                                {
                                    level == 1 ? (
                                        <>
                                            <div className="flex items-center mb-3">
                                                <div className="text-3xl font-semibold text-white">Pilih Kelas :</div>
                                                <select value={kelas} onChange={e => pilihKelas(e.target.value)} className="px-9 py-2 rounded-xl ml-3 text-2xl font-semibold">
                                                    <option disabled={parseInt(kelas) > 0 ? `disabled` : ``}>Pilih Kelas</option>
                                                    {listKelas.map((x) => (
                                                        <>
                                                            <option value={x.id}>{x.nama_kelas}</option>
                                                        </>
                                                    ))}
                                                </select>
                                            </div>
                                        </>
                                    ) : level == 2 ? (
                                        <>
                                            <div className="flex items-center text-3xl font-semibold  text-white mb-3">{kelasGuru.length > 0 ?
                                                kelasGuru[0].nama_kelas : null}</div>
                                        </>
                                    ) : (
                                        <></>
                                    )
                                }
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div className="mx-2 relative">
                                <input type="text" placeholder="Cari" className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-3xl bg-white py-3 px-20" />
                                <div className="fas fa-search text-2xl left-6 absolute inset-y-center z-10"></div>
                            </div>
                            <div className="mx-2">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-2xl bg-white py-3 px-10">
                                    Print Rapor Kelas
                                </div>
                            </div>
                            <div className="mx-2">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-2xl bg-white py-3 px-10">
                                    Print Leger Kelas
                                </div>
                            </div>
                        </div>
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-2xl bg-white">
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                Nama Murid
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                NIS
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Predikat
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Aksi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {console.log(data.filter(y => y.kelas_id == kelasGuru[0].id).map((x) => (
                                            x.nama_siswa
                                        )))} */}
                                        {
                                            kelas == "" ? (
                                                <>
                                                    <tr >
                                                        <th className="px-6 py-4 ">Silahkan pilih kelas terlebih dahulu</th>
                                                    </tr>
                                                </>
                                            ) : level == 2 ? (
                                                data.filter(y => y.kelas_id == kelasGuru[0].id).map((x) => (
                                                    <>
                                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                                {x.nama_siswa}
                                                            </th>
                                                            <td className="px-6 py-4">
                                                                {x.nis}
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                A
                                                            </td>
                                                            <td className="px-6 py-4 flex">
                                                                <Link href={'/pengolahanRapor/' + x.id}>
                                                                    <a className="font-medium text-black bg-keempat py-2 px-5 rounded-2xl mr-2">Edit Rapor</a>
                                                                </Link>
                                                                <a className="font-medium text-black bg-keempat py-2 px-5 rounded-2xl">Print Rapor</a>
                                                            </td>
                                                        </tr>
                                                    </>
                                                ))
                                            ) :
                                                data.filter(y => y.kelas_id == kelas).map((x) => (
                                                    <>
                                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                                {x.nama_siswa}
                                                            </th>
                                                            <td className="px-6 py-4">
                                                                {x.nis}
                                                            </td>
                                                            <td className="px-6 py-4">
                                                                A
                                                            </td>
                                                            <td className="px-6 py-4 flex">
                                                                <Link href={'/pengolahanRapor/' + x.id}>
                                                                    <a className="font-medium text-black bg-keempat py-2 px-5 rounded-2xl mr-2">Edit Rapor</a>
                                                                </Link>
                                                                <a href="#" className="font-medium text-black bg-keempat py-2 px-5 rounded-2xl">Print Rapor</a>
                                                            </td>
                                                        </tr>
                                                    </>
                                                ))

                                            // data.filter(y => y.kelas_id == kelas).map((x) => (
                                            //     <>
                                            //         <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            //             <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            //                 {x.nama_siswa}
                                            //             </th>
                                            //             <td className="px-6 py-4">
                                            //                 {x.nis}
                                            //             </td>
                                            //             <td className="px-6 py-4">
                                            //                 A
                                            //             </td>
                                            //             <td className="px-6 py-4 flex">
                                            //                 <a href="#" className="font-medium text-black bg-keempat py-2 px-5 rounded-2xl mr-2">Edit Rapor</a>
                                            //                 <a href="#" className="font-medium text-black bg-keempat py-2 px-5 rounded-2xl">Print Rapor</a>
                                            //             </td>
                                            //         </tr>
                                            //     </>
                                            // ))
                                        }

                                        {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                Murid A
                                            </th>
                                            <td className="px-6 py-4">
                                                121212
                                            </td>
                                            <td className="px-6 py-4">
                                                A
                                            </td>
                                            <td className="px-6 py-4 flex">
                                                <a href="#" className="font-medium text-black bg-keempat py-2 px-5 rounded-2xl mr-2">Edit Rapor</a>
                                                <a href="#" className="font-medium text-black bg-keempat py-2 px-5 rounded-2xl">Print Rapor</a>
                                            </td>
                                        </tr>
                                        <tr className="bg-white dark:bg-gray-800">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                Murid A
                                            </th>
                                            <td className="px-6 py-4">
                                                121212
                                            </td>
                                            <td className="px-6 py-4">
                                                A
                                            </td>
                                            <td className="px-6 py-4 flex">
                                                <a href="#" className="font-medium text-black bg-keempat py-2 px-5 rounded-2xl mr-2">Edit Rapor</a>
                                                <a href="#" className="font-medium text-black bg-keempat py-2 px-5 rounded-2xl">Print Rapor</a>
                                            </td>
                                        </tr> */}
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

export default PengolahanRaporPage;