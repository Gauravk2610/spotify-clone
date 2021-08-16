import { Avatar } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React from 'react'
import { useDataLayerValue } from './DataLayer'
import './Header.css'

function Header({ spotify }) {
    const [{user}, dispatch] = useDataLayerValue();

    return (
        <div className='header'>

            <div className="header__left">
                <Search />
                <input
                    placeholder='Search for Artists, Songs' 
                    type="text" />
            </div>

            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt='GK' />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
