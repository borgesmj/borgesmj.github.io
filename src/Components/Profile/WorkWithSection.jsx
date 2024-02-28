const WorkWithSection = () => {
    return (
        <div className='my-2 py-2 w-full flex flex-col text-center bg-gradient-to-r from-[#5bad1e] to-[#008eff] text-white p-8 rounded-lg mb-8'>
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <img src="/Images/Developer-activity-bro.webp" alt="Developer-activity-bro" className="md:h-[15rem] mx-auto md:w-[15rem]" />
            <p className="text-lg mb-8">I'm excited to collaborate with you. Let's create something amazing together!</p>
            <a href="/contact/" className="bg-[#560bad] md:w-2/3 xl:w-1/2 md:mx-auto text-indigo-600 hover:bg-indigo-600 py-2 px-6 rounded-full text-lg font-bold inline-block border-[2px] border-solid border-[#560bad] transition-all hover:bg-white hover:text-[#560bad]">&lt;Work with Me&#47;&gt;</a>
        </div>
    )
}

export default WorkWithSection
