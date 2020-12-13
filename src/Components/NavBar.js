import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar';

export default function NavBar() {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Avatar variant="square">
                        M
                    </Avatar>
                    <Typography style={{marginLeft:"10pt"}} component="h5" variant="h5" >
                        My Music App
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}