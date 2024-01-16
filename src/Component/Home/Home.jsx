export function Home() {
    return (
        <>
            <header className="flex ms-20 mt-10 justify-between flex-wrap">
                <div className="flex"><img src="./Image1.png" /><h1 className="text-[#06286E] text-3xl ms-3 font-semibold">Hygge</h1><span className="text-4xl font-bold text-[#06286E]">X</span> </div>
                <div>
                    <span className="me-10 text-2xl text-gray-700">Home</span>
                    <span className="me-10 text-2xl text-gray-700">Flashcard</span>
                    <span className="me-10 text-2xl text-gray-700">Contact</span>
                    <span className="me-10 text-2xl text-gray-700">FAQ</span>
                    <span className="me-20 text-2xl text-gray-700"><button className="text-[#FFFFFF] bg-gradient-to-b from-blue-900 to-blue-500 ps-10 pe-10 pt-2 pb-2 rounded-full">Login</button></span>
                </div>
            </header>
            <section>
                <div className="ms-20 mt-14"><i class="bi bi-house-door text-xl  text-[#696671]"></i><i class="bi bi-chevron-right text-[#06286E]"></i><span className="text-[#696671]">Flashcard</span><i class="bi bi-chevron-right text-[#06286E]"></i><span className="text-[#696671]">Mathematics</span><i class="bi bi-chevron-right text-[#06286E]"></i><span className="text-[#06286E] font-bold">Relation and Function</span></div>
                <div className="ms-20 mt-8 font-bold text-[#06286E] text-[2.3em]">Relations and Functions ( Mathematics )</div>
                <main>
                    <div>
                        <div className="flex w-[50%] m-auto mt-6 justify-around">
                            <span className="text-[#06286E] text-2xl  font-bold border-b-4 pe-3 ps-3 border-blue-900">Study</span>
                            <span className="text-[#696671] text-2xl ">Quiz</span>
                            <span className="text-[#696671] text-2xl ">Test</span>
                            <span className="text-[#696671] text-2xl ">Game</span>
                            <span className="text-[#696671] text-2xl ">Others</span>
                        </div>
                        <div className="w-[50%] m-auto">
                            <div className=" mt-6 border rounded-[2.6rem] h-96 bg-gradient-to-b from-blue-900 to-blue-500">
                                <div className="flex justify-between mt-10"><i class="bi bi-lightbulb-fill ms-10 text-4xl text-[#FFFFFF]"></i><i class="bi bi-volume-up text-[#FFFFFF] text-4xl me-10"></i></div>
                                <div className="ms-[13rem] text-4xl text-[#FFFFFF] mt-[6rem]">
                                    <span>9 + 6 + 7x - 2x - 3</span>
                                </div>
                            </div>
                            <div className="flex justify-between mt-[1rem]">
                                <i class="bi bi-arrow-clockwise text-3xl text-[#06286E] font-bold"></i> <i class="bi bi-arrow-left-circle-fill text-3xl text-[#06286E]"></i><span className="font-bold text-3xl">01/10</span> <i class="bi bi-arrow-right-circle-fill text-3xl  text-[#06286E]"></i> <i class="bi bi-fullscreen text-3xl  text-[#06286E]"></i>
                            </div>
                        </div>

                    </div>
                </main>
                <div className="ms-[24rem] flex justify-between flex-wrap w-[50%] m-auto mt-[3rem]">

                </div>
                <div className="flex ms-14 mt-20 justify-between">
                    <div className="flex">
                        <img src="./Logo1.png" alt="" width="80px" height="50px" />
                        <div className="ms-3">Published by
                            <div className="text-[#06286E] text-3xl  font-semibold">Hygge<span className=" font-bold text-[#06286E] text-3xl">X</span></div>
                        </div>
                    </div>
                    <div className="flex mt-8">
                        <span><button className="bi bi-plus-circle-fill text-4xl text-[#06286E]"></button></span>
                        <span className="text-xl text-[#06286E] font-bold me-10  ms-4">Create Flashcard</span>
                    </div>
                </div>
                <div className="ms-16 mt-20">
                    <div className="text-[2.5rem] text-[#06286E]">FAQ</div>
                    <div className="ms-16 mt-6">
                        <select className="border p-2 rounded-xl pe-4 w-[40%]">
                            <option>Can education flashcards be used for all age groups?</option>
                        </select>
                        <div className="mt-6">
                            <select className="border p-2 rounded-xl pe-4 w-[40%]">
                                <option>How do education flashcards work?</option>
                            </select>
                        </div>
                        <div className="mt-6">
                            <select className="border p-2 rounded-xl pe-4 w-[40%]">
                                <option>Can education flashcards be used for test preparation?</option>
                            </select>
                        </div>

                    </div>
                </div>
            </section >
            <div className="mb-[10rem]">

            </div>
        </>
    )
}