import React from 'react';

const PostItem = (props) => {
    console.log(props);
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>1. Javascript</strong>
                <div>
                    Javascript - lang prog
                </div>
            </div>
            <div className='post__btns'>
                <button>Remove</button>
            </div>
        </div>
    );
};

export default PostItem;