import {
  AudioFile as AudioFileIcon,
  Image as ImageIcon,
  UploadFile as UploadFileIcon,
  VideoFile as VideoFileIcon,
} from "@mui/icons-material";
import { ListItemText, Menu, MenuItem, MenuList } from "@mui/material";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsFileMenu, setUploadingLoader } from "../../redux/reducers/misc";
import toast from "react-hot-toast";
import { useSendAttachementsMutation } from "../../redux/api/api";

const FileMenu = ({ anchorE1, chatId }) => {
  const { isFileMenu } = useSelector((state) => state.misc);

  const imageRef = useRef(null);
  const audioRef = useRef(null);
  const videoRef = useRef(null);
  const fileRef = useRef(null);

  const dispatch = useDispatch();

  const [sendAttachements] = useSendAttachementsMutation();
  const closeFileMenu = () => dispatch(setIsFileMenu(false));

  const selectRef = (ref) => {
    ref.current?.click();
  };

  const fileChangeHandler = async (e, key) => {
    const files = Array.from(e.target.files);

    if (files.length <= 0) return;

    if (files.length > 5)
      return toast.error(`You can only send 5 ${key} at a time`);

    dispatch(setUploadingLoader(true));

    const toastId = toast.loading(`Sending ${key} ...`);
    closeFileMenu();
    //fetching here

    try {
      const myForm = new FormData();

      myForm.append("chatId", chatId);

      files.forEach((file) => myForm.append("files", file));
      const res = await sendAttachements(myForm);

      if (res.data) toast.success(`${key} send successfully`, { id: toastId });
      else toast.error(`failed to send ${key}`, { id: toastId });
    } catch (error) {
      toast.error(error, { id: toastId });
    } finally {
      dispatch(setUploadingLoader(false));
    }
  };
  return (
    <Menu anchorEl={anchorE1} open={isFileMenu} onClose={closeFileMenu}>
      <div
        style={{
          width: "10rem",
        }}
      >
        <MenuList>
          <MenuItem onClick={() => selectRef(imageRef)}>
            <ImageIcon />
            <ListItemText style={{ marginLeft: "0.5rem" }}>Image</ListItemText>
            <input
              type="file"
              multiple
              accept="image/png, image/jpg, image/fig"
              style={{ display: "none" }}
              onChange={(e) => fileChangeHandler(e, "Images")}
              ref={imageRef}
            />
          </MenuItem>

          <MenuItem onClick={() => selectRef(audioRef)}>
            <AudioFileIcon />
            <ListItemText style={{ marginLeft: "0.5rem" }}>Audio</ListItemText>
            <input
              type="file"
              multiple
              accept="audio/mpeg. audio/wav"
              style={{ display: "none" }}
              onChange={(e) => fileChangeHandler(e, "Audio")}
              ref={audioRef}
            />
          </MenuItem>

          <MenuItem onClick={() => selectRef(videoRef)}>
            <VideoFileIcon />
            <ListItemText style={{ marginLeft: "0.5rem" }}>Video</ListItemText>
            <input
              type="file"
              multiple
              accept="video/mp4, video/webm, video/ogg"
              style={{ display: "none" }}
              onChange={(e) => fileChangeHandler(e, "Video")}
              ref={videoRef}
            />
          </MenuItem>

          <MenuItem onClick={() => selectRef(fileRef)}>
            <UploadFileIcon />
            <ListItemText style={{ marginLeft: "0.5rem" }}>File</ListItemText>
            <input
              type="file"
              multiple
              accept="*"
              style={{ display: "none" }}
              onChange={(e) => fileChangeHandler(e, "Video")}
              ref={fileRef}
            />
          </MenuItem>
        </MenuList>
      </div>
    </Menu>
  );
};

export default FileMenu;
