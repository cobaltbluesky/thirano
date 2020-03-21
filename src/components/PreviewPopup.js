import React, {useState} from "react";
import {
    Divider,
    List,
    ListItem,
    ListItemIcon, 
    ListItemText
} from "@material-ui/core";

import {
    Delete,
    Edit,
    Info,
    Refresh,
    Rotate90DegreesCcw
} from "@material-ui/icons";

function PreviewPopup (){
    return(
        <List>
            {/*reload*/}
            <ListItem button>
                <ListItemIcon>
                    <Refresh />
                </ListItemIcon>
                <ListItemText primary="再読み込み"></ListItemText>
            </ListItem>

            {/*edit*/}
            <ListItem button>
                <ListItemIcon>
                    <Edit />
                </ListItemIcon>
                <ListItemText primary="編集"></ListItemText>
            </ListItem>

            {/*rotate*/}
            <ListItem button>
                <ListItemIcon>
                    <Rotate90DegreesCcw />
                </ListItemIcon>
                <ListItemText primary="90°回転"></ListItemText>
            </ListItem>

            {/*prop*/}
            <ListItem button>
                <ListItemIcon>
                    <Info />
                </ListItemIcon>
                <ListItemText primary="プロパティ"></ListItemText>
            </ListItem>

            <Divider />

            {/*remove*/}
            <ListItem button>
                <ListItemIcon>
                    <Delete />
                </ListItemIcon>
                <ListItemText primary="削除"></ListItemText>
            </ListItem>
        </List>
    );
}

export default PreviewPopup;