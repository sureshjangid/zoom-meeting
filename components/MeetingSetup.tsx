"use client";
import { DeviceSettings, VideoPreview, useCall } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';

const MeetingSetup = ({setSetupCompelete}:{setSetupCompelete:(value: boolean)=>void;}) => {
  const [isMic,setIsMic] = useState(false);

  const call = useCall();
  if(!call){
    throw new Error('usecall must be used within streamcall components');
  }
  useEffect(()=>{

    if(isMic){
      call?.microphone.disable()
      call?.camera.disable()
    }else{
      call?.microphone.enable()
      call?.camera.enable()
    }
  },[isMic,call?.camera,call?.microphone])
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white'>
      <h1 className='text-2xl font-bold'>Setup</h1>
      <VideoPreview/>
      <div className="flex h-16 items-center justify-center gap-3">
      <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMic}
            onChange={(e) => setIsMic(e.target.checked)}
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />

</div>
<Button
        className="rounded-md bg-green-500 px-4 py-2.5"
        onClick={() => {
          call?.join();
          setSetupCompelete(true);
        }}
      >
        Join meeting
      </Button>
    </div>
  )
}

export default MeetingSetup