import React, {useState,useEffect} from 'react'

const About = () => {
    const taglines = ["Building Clean Front-ends with React","Backing sites with Django & FastAPI","Personalizing UX with LangGraph & LangChain","Munching KitKats"]
    
    const [index,setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % taglines.length);
        },4000);
        return () => clearInterval(interval);
    },[]);

    return (
        <div className='mt-15 m-auto gap-3 max-w-[90%] w-200 flex flex-wrap justify-between items-center'>
            <div className='flex flex-col grow w-70 h-20'>
                <h1 className=' text-4xl font-bold tracking-tighter text-emerald-700'>Daksh Madaan</h1>
                <p className='text-md mt-1 ml-px text-emerald-600 transition-all duration-150'>{taglines[index]}</p>
            </div>
            <a className='grow rounded-md text-white text-2xl font-bold p-1 text-center max-w-50 h-10 bg-emerald-600 transition-all duration-500 hover:rounded-xs hover:bg-emerald-600/25 hover:text-emerald-700' href=''>Contact</a>
        </div>
    )
}

export default About
