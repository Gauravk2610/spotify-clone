import { Grid, Slider } from '@material-ui/core'
import { PlayCircleOutline, PlaylistPlay, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeDown } from '@material-ui/icons'
import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer__left">
                <img
                    className='footer__albumLogo' 
                    src="https://cdn.gelestatic.it/capital/sites/2/2017/03/Cover_Believer_300CMYK-748x748.jpg" alt="" />
                <div className="footer__songInfo">
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>

            <div className="footer__center">
                <Shuffle className="footer__green" />
                <SkipPrevious className="footer__icon" />
                <PlayCircleOutline fontSize='large' className='footer__icon' />
                <SkipNext className='footer__icon' />
                <Repeat className='footer__green' />
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlay />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
