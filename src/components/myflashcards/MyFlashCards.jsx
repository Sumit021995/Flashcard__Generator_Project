import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showFalshCard } from '../../redux/action/Action';


const MyFlashCards = () => {

    const [cardHandle, setCardHandle] = useState(6);
    const state = useSelector(state => state.Reducer.groupData);
    const dispatch = useDispatch();

    // showAllcard function will handle the clicks.
    const showAllcard = () => {
        setCardHandle(state.length);
    }

    // show card starting
    return (
        <div className='pb-7'>
            <div className="grid md:grid-cols-3 gap-5 justify-center">
                {state.map((ele, index) => {
                    return ( 
                        index < cardHandle?
                    <div key={index} className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
                        <div className="">
                            <div className="">
                                <div className='grid md:grid-cols-12 font-medium'>
                                    <div className="col-span-3"><div className='cardImg mr-4'></div></div>
                                    <div className="col-span-9"><div className=''>
                                        <h3 className='text-black font-bold'>{ele.group.groupName}</h3>
                                        <small>{ele.state.length} Cards</small>
                                    </div></div>
                                </div>
                                <p className='md:col-span-12 text-sm text-gray-500 pt-2'>
                                    {ele.group.description}
                                </p>
                                <div className="md:col-span-6">
                                    <Link
                                        to={`/flashCard${index}`}
                                        className='py-2 font-medium flex items-center text-red-500'
                                        onClick={() => dispatch(showFalshCard(index))}>
                                        <span>View Cards</span>
                                        <BsArrowRight className='text-lg ml-3' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    : 
                    null
                    )
                })}
            </div>
            <div className='text-right pb-11 px-5' style={cardHandle < 7 ? { display: 'block' } : { display: 'none' }}>
                {state.length === 0 ?
                    <div className='font-semibold '>Sorry, but no flashcard was found. Please create a new flashcard.</div> :
                    <button className='text-red-500 font-bold'
                        onClick={showAllcard}>
                        See all
                    </button>
                }
            </div>
        </div>
    )
}

export default MyFlashCards