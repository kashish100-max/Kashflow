import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';

export default function Side_bar(){
    return (
        <div className="Side-bar">
            <div className="profile">
                <Avatar src={Source} sx={{width:106 ,height:106,cursor:"pointer"}} defalut="/broken-image.jpg" />
                 <Button variant="outlined" startIcon={<CreateIcon/>}>
                    Edit
                </Button>
            </div>
            <hr style={{margin:"0 1rem"}}></hr>
        </div>
    )
}