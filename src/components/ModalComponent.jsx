import React, { memo } from "react";
import { 
  Modal, 
  Fade,
  Backdrop,
} from "@material-ui/core";

import useStyles from "../styles/makeStyles";

const ModalComponent = ({open, close, children}) => {

  const styles = useStyles();

  return(
    <div>
      <Modal
        className={styles.modalStyle}
        open={open}
        onClose={close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{timeout: 500}}
      >
        <Fade in={open}>
          <div className={styles.modalContent}>
            {children}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default memo(ModalComponent);