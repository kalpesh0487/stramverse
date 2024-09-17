import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import ChannelDetail from './components/ChannelDetail'
import Feed from './components/Feed'
import VideoDetail from './components/VideoDetail'
import SearchFeed from './components/SearchFeed'

const App = () => (
    <BrowserRouter>
        <Box sx={{ background : '#000'}}>
            <Navbar />
            <Routes>    
                {/* <Route path="/video/:id"  element={<Feed />}/>
                <Route path="/" exact element={<VideoDetail />}/>
                <Route path="/channel/:id" exact element={<ChannelDetail />}/>
                <Route path="/search/:searchTerm" exact element={<SearchFeed />}/> */}

                <Route path="/video/:id"  element={<VideoDetail />}/>

                <Route path="/" exact element={<Feed />}/>
                <Route path="/channel/:id" exact element={<ChannelDetail />}/>
                <Route path="/search/:searchTerm" exact element={<SearchFeed />}/>

            </Routes>
        </Box>
    </BrowserRouter>
);


export default App