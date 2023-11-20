import React from "react";

const SettingScreen = () => {
  return (
    <main className="flex">
        <div className="bg-[#ffdede] w-full m-[15px] mt-[64px] rounded-[15px] xl:rounded-[20px] p-[27px] xl:w-[60%] xl:mx-auto xl:p-[60px] xl:mt-[125px]">
            <div>
                <p className="font-semibold mb-3 xl:text-xl">Profil Saya</p>
                <div className="w-[65px] h-[65px] xl:w-[100px] xl:h-[100px] rounded-[50%] overflow-auto">
                    <img className="w-full" src="https://assets-a1.kompasiana.com/items/album/2021/03/24/blank-profile-picture-973460-1280-605aadc08ede4874e1153a12.png?t=o&v=780" alt="" />
                </div>
                <div className="flex gap-1 bg-[#222222] absolute w-fit px-[6px] py-[2px] rounded-xl mt-[-20px] ml-[50px]">
                    <svg className="xl:w-4 xl:h-4" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 4 5" fill="none">
                        <path d="M2.90903 1.01427C3.06898 0.857647 3.32479 0.857619 3.48478 1.0142L3.66803 1.19356C3.83291
                             1.35493 3.83294 1.62029 3.6681 1.7817C3.50814 1.93832 3.25233 1.93835 3.09234 1.78176L2.90909 
                             1.60241C2.74421 1.44104 2.74418 1.17567 2.90903 1.01427ZM0.370789 3.72193C0.370789 4.01554 
                             0.608801 4.25355 0.902405 4.25355H0.918821C1.06213 4.25355 1.19973 4.19742 1.30215 4.09718L2.62248
                              2.80494C2.83875 2.59327 2.83875 2.24519 2.62248 2.03352C2.4127 1.8282 2.07727 1.8282 1.86748 
                              2.03352L0.530559 3.342C0.428379 3.44201 0.370789 3.57896 0.370789 3.72193Z" fill="white"/>
                    </svg>
                    <p className="text-[9px] xl:text-xs xl:mt-[2px] text-white">Edit</p>
                </div>
            </div>
            <form action="" className="flex flex-col gap-5 text-[12px] xl:text-xl my-6">
                <div className="flex flex-col gap-1">
                    <label className="font-medium" htmlFor="">Username</label>
                    <input className="h-9 xl:h-14 border-[1.5px] border-[#D5D8DE] rounded-lg p-2" type="text" name="uname" id="uname" value={"Bendry Lakburlawal"} required/>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="font-medium" htmlFor="">Email</label>
                    <input className="h-9 xl:h-14 border-[1.5px] border-[#D5D8DE] rounded-lg p-2" type="email" name="email" id="email" value={"bendry@gmail.com"} required/>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="font-medium" htmlFor="">Password</label>
                    <input className="h-9 xl:h-14 border-[1.5px] border-[#D5D8DE] rounded-lg p-2" type="password" name="pass" id="pass" value={"1234lima"} required/>
                </div>

                <button type="submit" name="perbaharui" id="perbaharui" className="bg-[#FF5757;] w-[110px] xl:w-[180px] xl:h-[50px] h-[35px] self-end mt-3 rounded-[10px] xl:rounded-[15px] text-white font-semibold text-sans text-[14px] xl:text-xl p-2 xl:p-5 flex items-center gap-1 xl:gap-3">
                <svg className="xl:w-[21px] xl:h-[21px]" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 21 21" fill="none">
                    <path d="M17.7188 16.7908L16.4062 15.4783V13.7812H15.0938V16.0217L16.7908 17.7188L17.7188 16.7908Z" fill="white"/>
                    <path d="M15.75 20.3438C14.8414 20.3438 13.9533 20.0743 13.1978 19.5696C12.4424 19.0648 11.8536 18.3474 11.5059 17.508C11.1582 16.6686 11.0673 15.7449 11.2445 14.8538C11.4218 13.9627 11.8593 13.1442 12.5017 12.5017C13.1442 11.8593 13.9627 11.4218 14.8538 11.2445C15.7449 11.0673 16.6686 11.1582 17.508 11.5059C18.3473 11.8536 19.0648 12.4424 19.5696 13.1979C20.0743 13.9533 20.3438 14.8414 20.3438 15.75C20.3424 16.9679 19.8579 18.1355 18.9967 18.9967C18.1355 19.8579 16.9679 20.3424 15.75 20.3438ZM15.75 12.4688C15.101 12.4688 14.4666 12.6612 13.927 13.0217C13.3874 13.3823 12.9669 13.8948 12.7185 14.4943C12.4702 15.0939 12.4052 15.7536 12.5318 16.3901C12.6584 17.0266 12.9709 17.6113 13.4298 18.0702C13.8887 18.5291 14.4734 18.8416 15.1099 18.9682C15.7464 19.0948 16.4061 19.0298 17.0057 18.7815C17.6053 18.5331 18.1177 18.1126 18.4783 17.573C18.8388 17.0334 19.0312 16.399 19.0312 15.75C19.0304 14.88 18.6844 14.0459 18.0692 13.4308C17.4541 12.8156 16.62 12.4696 15.75 12.4688ZM10.5 18.375C8.41211 18.3727 6.41039 17.5423 4.93403 16.066C3.45767 14.5896 2.62726 12.5879 2.625 10.5H1.3125C1.31528 12.9358 2.28414 15.2711 4.00653 16.9935C5.72891 18.7159 8.06418 19.6847 10.5 19.6875V18.375ZM7.875 5.25001H4.64494C5.70688 4.06102 7.1051 3.22283 8.65424 2.84655C10.2034 2.47028 11.8303 2.57367 13.3193 3.14304C14.8084 3.71241 16.0892 4.72087 16.9921 6.03473C17.895 7.34859 18.3773 8.90582 18.375 10.5H19.6875C19.6904 8.67352 19.1479 6.88775 18.1297 5.37145C17.1114 3.85515 15.6636 2.67736 13.9718 1.98895C12.2801 1.30053 10.4213 1.13283 8.63359 1.50734C6.84591 1.88185 5.21072 2.7815 3.9375 4.09107V1.31251H2.625V6.56251H7.875V5.25001Z" fill="white"/>
                </svg>
                Perbaharui
                </button>
            </form>
        </div>
    </main>
  )
}

export default SettingScreen;