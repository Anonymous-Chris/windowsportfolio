import React from 'react'
import ChromeIcon from '../../assets/icons/chrome.svg'
import FileIcon from '../../assets/icons/file_explorer.png'
import GithubIcon from '../../assets/icons/github.svg'
import MicrosoftEdge from '../../assets/icons/microsoft-edge.svg'
import WindowsIcon from '../../assets/icons/windows.png'
import '../../assets/styles/taskbar.css'
const TaskBar = () => {
  const clickedWindowsIcon = () => {
    console.log('windows icon is clickeds')
  }


  const clickedChromeIcon = () => {
    console.log('chrome is clickeds')
  }

  const clickedMicrosoftEdgeIcon = () => {
    console.log('edge is clickeds')
  }
  const clickedFileIcon = () => {
    console.log('file icon is clickeds')
  }
  const clickedGithubIcon = () => {
    console.log('github is clickeds')
  }
  return (<>
    <div className='taskbar taskbar-center'>
      <div className='eachIcon'>
        <img src={WindowsIcon} alt="windowsIcon" onClick={clickedWindowsIcon} />
      </div>
      <div className='eachIcon'>
        <img src={ChromeIcon} alt="chromeIcon" onClick={clickedChromeIcon} />
      </div>
      <div className='eachIcon'>
        <img src={MicrosoftEdge} alt="microsoftedge" onClick={clickedMicrosoftEdgeIcon} />
      </div>
      <div className='eachIcon'>
        <img src={FileIcon} alt="fileIcon" onClick={clickedFileIcon} />
      </div>
      <div className='eachIcon'>
        <img src={GithubIcon} alt="searchIcon" onClick={clickedGithubIcon} />
      </div>
    </div>
    <div className='taskbar taskbar-right'>
      <div className='upArrow'>
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="18 15 12 9 6 15"></polyline></svg>
      </div>
      <div className='weather'>
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
      </div>
      <div className='wifi'>
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg></div>
      <div className='battery'>
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line></svg>      </div>
      <div className='sound'>
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>      </div>
      <div className='dateTime'>
        Date
      </div>
    </div>
  </>
  )
}

export default TaskBar