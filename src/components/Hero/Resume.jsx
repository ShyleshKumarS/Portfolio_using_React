import React from 'react'

const Resume = () => {
  return (
    <div>
      <button onClick={()=>{
        const link = document.createElement('a');
        link.href = './assets/Resume.pdf';
        link.download = "Resume_Shylesh";
        link.click();
      }}  className="btn btn-primary">Download Resume</button>
    </div>
  )
}

export default Resume
