import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {FormGroup} from "@material-ui/core";
import Box from "@material-ui/core/Box";
export default function () {

    // ポップアップ開くボタンボタン（仮）、スマホの種類、外枠の有無
    const [open, setOpen] = React.useState(false);
    const [Type, setType] = React.useState();
    const [state, setState] = React.useState({checkedA: true,});

    //ポップアップ開くor閉じる状態ボタン
    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    //外枠の有無の変更
    const handleCheckedChange = event => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    //スマホの種類の変更
    const handleChange = event => {
        setType(event.target.value);
    };



    return(
        <div>
            {/*ポップアップ表示するボタン*/}
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open form dialog
            </Button>
            {/*ポップアップ*/}
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={true} maxWidth={"md"}>
                <DialogTitle id="form-dialog-title">新しいフォームを作る</DialogTitle>
                <DialogContent>
                    <dialogContentText>
                        URL
                    </dialogContentText>
                    <TextField
                        autoFocus
                        id="name"
                        label=""
                        type="URL"
                        fullWidth
                    />
                    <Box m = "1rem"/>
                    <FormGroup>
                        <dialogContentText>
                            機種
                        </dialogContentText>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Type}
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>iPhone8</MenuItem>
                            <MenuItem value={2}>iPhone11</MenuItem>
                            <MenuItem value={3}>iPad 6th gen</MenuItem>
                            <MenuItem value={4}>Pixel 4</MenuItem>
                        </Select>
                        <Box m = "0.5rem"/>
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedA} onChange={handleCheckedChange} name="checkedA" />}
                            label="外枠あり"
                        />
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        キャンセル
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        作成
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}