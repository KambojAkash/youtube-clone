import React from 'react';

const CommentSection = ({ user,text }) => {
//   const { user, text } = comment;
let data=[
    {
     user:"akash" ,
     text:"hello",
     reply:[
        {
            user:"akash" ,
            text:"hello",
            reply:[
               
            ]  
           }
     ]  
    },
    {
        user:"akash" ,
        text:"hello",
        reply:[
           
        ]  
       },
]
  return (
    <div className="flex py-3">
      <img
        src="https://via.placeholder.com/40"
        alt="User Avatar"
        className="w-10 h-10 rounded-full mr-4"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold">{user}</p>
          {/* You can add more details like time since comment, reply button, etc. here */}
        </div>
        <p className="text-sm text-gray-700">{text}</p>
        {/* You can add additional elements here, like like/dislike buttons, reply button, etc. */}
      </div>
    </div>
  );
};

export default CommentSection;
