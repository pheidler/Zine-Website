import React from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { Share, Download } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

function ZineCard(props) {
  const navigate = useNavigate();
  const { zine } = props;
  return (
    <Card>
      <Card.Img
        onClick={() => {
          navigate(`/zines/${zine.path}`);
        }}
        variant="top"
        src={zine.thumbnail.default}
      />
      <Card.Body>
        <Card.Title>{zine.title}</Card.Title>
        <Stack gap={3} direction="horizontal">
          <Button
            className={styles.button}
            variant="primary"
            onClick={() => {
              navigate(`/zines/${zine.path}`);
            }}
          >
            Open
          </Button>
          <a href={zine.file} download={`${zine.path}.pdf`}>
            <Button className={styles.iconButton} variant="outline-secondary">
              <Download className={styles.buttonIcon} size={20} />
            </Button>
          </a>

          <Button className={styles.iconButton} variant="outline-secondary">
            <Share
              className={styles.buttonIcon}
              size={20}
              onClick={() => console.log("Clicked")}
            />
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}
export default ZineCard;
