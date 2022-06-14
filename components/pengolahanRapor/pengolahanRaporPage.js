const pengolahanRaporPage = () => {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full mb-12 px-8">
                    <div className="mt-20">
                        <div className="flex items-center">
                            <img src="/images/pengolahanRapor/gambar1.png" className="mr-8 mb-8" alt="logo" />
                            <div>
                                <div className="text-5xl font-semibold text-white mb-3">Pengolahan Rapor</div>
                                <div className="flex items-center mb-3">
                                    <div className="text-3xl font-semibold text-white">Pilih Kelas :</div>
                                    <select className="px-9 py-2 rounded-xl ml-3 text-2xl font-semibold">
                                        <option>Kelas A</option>
                                        <option>Kelas A</option>
                                        <option>Kelas A</option>
                                    </select>
                                </div>
                                <div className="flex items-center mb-3">
                                    <div className="text-3xl font-semibold text-white">Pilih Mata Pelajaran :</div>
                                    <select className="px-9 py-2 rounded-xl ml-3 text-2xl font-semibold">
                                        <option>IPA</option>
                                        <option>IPS</option>
                                        <option>MTK</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div className="mx-2 relative">
                                <input type="text" placeholder="Cari" className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-3xl bg-white py-3 px-20" />
                                <div className="fas fa-search text-2xl left-6 absolute inset-y-center z-10"></div>
                            </div>
                            <div className="mx-2">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-2xl bg-white py-3 px-10">
                                    Print Rapor
                                </div>
                            </div>
                            <div className="mx-2">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-2xl bg-white py-3 px-10">
                                    Print Leger
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
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                                        </tr>
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

export default pengolahanRaporPage;