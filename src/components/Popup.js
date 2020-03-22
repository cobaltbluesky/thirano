import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { FormGroup } from "@material-ui/core";
import Box from "@material-ui/core/Box";
export default function(props) {
  // ポップアップ開くボタンボタン（仮）、url、スマホの種類、外枠の有無
  const {isOpen, popupClose, onSubmit } = props;
  const [text, setText] = React.useState("");
  const [Type, setType] = React.useState();
  const [state, setState] = React.useState({ checkedA: true });

  //urlの変更
  const handleTextChange = event => {
    setText(event.target.value);
  };

  //外枠の有無の変更
  const handleCheckedChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  //スマホの種類の変更
  const handleChange = event => {
    setType(event.target.value);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={popupClose}
      aria-labelledby="form-dialog-title"
      fullWidth={true}
      maxWidth={"md"}
    >
      <DialogTitle id="form-dialog-title">新しいプレビューを作る</DialogTitle>
      <DialogContent>
        <dialogContentText>URL</dialogContentText>
        <TextField
          autoFocus
          value={text}
          onChange={handleTextChange}
          id="name"
          label=""
          type="URL"
          fullWidth
        />
        <Box m="1rem" />
        <FormGroup>
          <dialogContentText>機種</dialogContentText>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Type}
            onChange={handleChange}
          >
            <MenuItem value={1}>iPhone8 横向き</MenuItem>
            <MenuItem value={2}>iPhone11 横向き</MenuItem>
            <MenuItem value={3}>iPhone8 縦向き</MenuItem>
            <MenuItem value={4}>iPhone11 縦向き</MenuItem>
          </Select>
          <Box m="0.5rem" />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedA}
                onChange={handleCheckedChange}
                name="checkedA"
              />
            }
            label="外枠あり"
          />
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={popupClose} color="secondary">
          キャンセル
        </Button>
        <Button
          onClick={() => {
            onSubmit(text, Type, state);
          }}
          color="primary"
        >
          作成
        </Button>
      </DialogActions>
    </Dialog>
  );
}
