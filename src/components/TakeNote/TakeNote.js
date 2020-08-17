import React from "react";
import { CardContent } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import { useStyles } from "./TakeNotestyles.js";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";

export default function TakeNoteCard() {
  const classes = useStyles();
  return (
    <Box className={classes.mainLayout}>
      <Box boxShadow={5} className={classes.root}>
        <CardContent className={classes.content}>
          <InputBase
            placeholder="Take a note..."
            inputProps={{ "aria-label": "TakeNote" }}
            id="title"
            classes={{
              input: classes.inputInput,
            }}
          />
          <div className={classes.grow} />
          <IconButton>
            <CheckBoxOutlinedIcon />
          </IconButton>
          <IconButton>
            <BrushOutlinedIcon />
          </IconButton>
          <IconButton>
            <ImageOutlinedIcon />
          </IconButton>
        </CardContent>
      </Box>
    </Box>
  );
}
