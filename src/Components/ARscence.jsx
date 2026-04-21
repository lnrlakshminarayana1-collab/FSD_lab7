import React from 'react'
import 'aframe'

const ARscence = () => {
    return (
    <a-scene
      xr-mode="ar"
      renderer="colorManagement: true"
      embedded
      style={{ width: '100%', height: '80vh' }}
    >
      <a-box id="box" position="0 0 -0.8" color="#4CC3D9" scale="0.3 0.3 0.3"></a-box>
      <a-entity camera look-controls></a-entity>
    </a-scene>
  )

}

export default ARscence