import { useNavigate } from 'react-router-dom';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
// ini perubahan

export default function Popup(props) {
    const navigate = useNavigate();
    const { open, setOpen } = props;

    const handleOK = () => {
        setOpen(false);
        navigate('/');
    };
    return (

        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-center"> {/* Parent text-center */}
                            {/* Icon - selalu di tengah */}
                            <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-white">
                                <CheckIcon className="size-30 text-blue-500" aria-hidden="true" />
                            </div>

                            {/* Konten teks - diatur ke tengah */}
                            <div className="mt-3"> {/* Hapus sm:flex sm:items-start */}
                                <div className="mt-3"> {/* Hapus sm:ml-4 dan sm:text-left */}
                                    <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                                        <h1 className="font-black text-blue-500">No.A1</h1> {/* Hapus justify-center (tidak diperlukan karena parent sudah text-center) */}
                                        <h2 className="font-bold text-blue-500">Janji temu berhasil dibuat</h2>
                                    </DialogTitle>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Mohon hadir 30 menit sebelum jadwal untuk proses administrasi
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 justify-center">
                            <button
                                type="button"
                                onClick={handleOK}
                                className="inline-flex w-1/4 justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xl  hover:bg-blue-500"
                            >
                                Oke
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>

    )
}


