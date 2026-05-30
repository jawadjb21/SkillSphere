import React from 'react';
import { SiTicktick } from 'react-icons/si';

const CurriculumView = ({ curriculum }) => {
    return (
        <div className="join join-vertical w-full rounded-2xl overflow-hidden border border-white/20">
            {
                curriculum.map((module, idx) => {
                    return <div key={idx} className={`collapse collapse-arrow join-item bg-[#00272c] text-zinc-50  ${idx !== 0 && "border-t border-white/10"}`}>
                        <input type="radio" name="course-curriculum" defaultChecked={idx === 0}/>
                        <div className="collapse-title font-semibold text-lg">Module {idx + 1}: {module.module}</div >
                        <div className="collapse-content text-zinc-300">
                            {
                                module.lessons.map((lesson, idx) => <p key={idx} className='font-bold text-xl flex justify-start items-center gap-x-2 te'><SiTicktick className='text-[#e1ff51]'/>{lesson}</p>)
                            }
                        </div>
                    </div>
                })
            }
        </div >
    );
};

export default CurriculumView;