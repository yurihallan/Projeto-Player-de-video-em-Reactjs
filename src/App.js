import React, { Component } from 'react';
import './App.css';
import VideoList from './Components/VideoList';
import VideoPlayer from './Components/VideoPlayer';
import VideoCinema from './Components/VideoCinema';



class App extends Component {
  
   constructor(props){
     super(props);
     this.state = {
       videos:[],
       selectedVideo: {
         img: 'https://storage.coverr.co/thumbnails/coverr-norway-road-1575187202260',
         name:'norway-road',
         url:'https://storage.coverr.co/videos/coverr-norway-road-1575187202260?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTgyMjA0NTM4fQ.G4jr39638aqB4vyUbqUw66m86AKfxotCsMnwAQn56ng'
       }
     }
   }


   componentWillMount(){

   }






   
  render(){
    const { state } = this;
    return (
      <div className="App">
        <VideoPlayer video={state.selectedVideo}/>
        <VideoList videos={state.videos}/>
        <VideoCinema isActive={false}/>
      </div>
    );
  }

}


export default App;
